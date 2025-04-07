<template>
  <div class="wrapper">
    <!-- Barre supérieure -->
    <div class="top">
      <v-toolbar-title>
        <nuxt-link to="/">
          <img src="/logo.png" width="100" alt="Logo" />
        </nuxt-link>
        <v-spacer></v-spacer>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <svg
        style="height: 30px; width: 30"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
    </div>

    <br /><br />

    <div class="center">
      <p class="text-h5 font-weight-medium text-center">Paiement</p>
      <v-divider></v-divider>
      <br />
      <!-- Section Livraison -->
      <div v-if="showForm" class="livraison-box">
        <p>LIVRAISON</p>
        <form @submit.prevent="enregistrer">
          <v-text-field
            v-model="form.nom"
            label="Nom complet"
            :rules="[rules.required, rules.minLength(5), rules.maxLength(40)]"
            required
            id="nom"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="form.telephone"
            id="tel"
            label="Numéro de téléphone"
            type="tel"
            placeholder="(Exemple: +226 xx xx xx xx)"
            :rules="[rules.required, rules.phone]"
            required
            clearable
          ></v-text-field>
          <v-text-field
            v-model="form.ville"
            id="ville"
            label="Ville"
            :rules="[rules.required]"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="form.adresse"
            id="adresse"
            type="text"
            label="Lieu de livraison"
            :rules="[rules.required]"
            clearable
          ></v-text-field>
          <br />
          <v-divider></v-divider>
          <br />
          <v-btn outlined block color="blue" type="submit">Enregistrer</v-btn>
        </form>
      </div>

      <div v-else class="livraison-box" style="position: relative">
        <p>DÉTAILS DE LIVRAISON</p>
        <br />
        <ul>
          <li><strong>Nom complet :</strong> {{ form.nom }}</li>
          <li><strong>Téléphone :</strong> {{ form.telephone }}</li>
          <li><strong>Ville :</strong> {{ form.ville }}</li>
          <li><strong>Adresse :</strong> {{ form.adresse }}</li>
        </ul>
        <v-icon
          size="40"
          color="info"
          @click="modifier"
          style="position: absolute; right: 10px"
          >mdi-note-edit</v-icon
        >
      </div>

      <br /><br />

      <!-- Section Mode de paiement -->
      <div class="methode-box">
        <p>MODE DE PAIEMENT</p>
        <div class="d-flex justify-space-between align-center">
          <v-radio-group>
            <v-radio
              label="A la livraison - main à main"
              value="A la livraison - main à main"
            ></v-radio>
            <v-radio
              label="Par carte bancaire"
              value="Par carte bancaire"
            ></v-radio>
            <v-radio
              label="Via Mobile money"
              value="Via Mobile money"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>

      <br /><br />

      <!-- Section Panier -->
      <div class="panier-box">
        <p>PANIER</p>
        <v-list>
          <v-list-item v-for="item in cartItems" :key="item.id">
            <v-list-item-content>
              <v-list-item-title
                >{{ item.name }} x
                <strong>{{ item.quantity }}</strong></v-list-item-title
              >
              <v-list-item-subtitle>{{ item.prix }} FCFA</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="removeFromCart(item.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </div>

      <br /><br />
      <v-btn large block color="primary" @click="envoyerMessageTelegram"
        >Confirmer l'achat</v-btn
      >
    </div>

    <br /><br /><br /><br />

    <!-- Footer -->
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div class="pt-0">
        Engagement de LafyShop inc pour la protection de la vie privée
        Conditions de vente Conditions d'utilisation Caractéristiques
        environnementales des produits.
      </div>
      <br /><br />
      <v-divider></v-divider>
      <span>{{ new Date().getFullYear() }} — powered by</span>
      <a
        target="_blank"
        href="https://portfolio-rust-chi-35.vercel.app/"
        class="font-weight-bold"
      >
        Privat's Labs
      </a>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { db } from "@/firebase";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default {
  middleware: "auth",
  data() {
    return {
      showForm: true,
      form: {
        nom: "",
        telephone: "",
        ville: "",
        adresse: "",
      },
      rules: {
        required: (value) => !!value || "Ce champ est requis.",
        minLength: (min) => (value) =>
          (value && value.length >= min) || `Minimum ${min} caractères requis.`,
        maxLength: (max) => (value) =>
          (value && value.length <= max) ||
          `Maximum ${max} caractères autorisés.`,
        phone: (value) =>
          /^[0-9]{8,18}$/.test(value) || "Le numéro doit être valide.",
      },
    };
  },
  created() {
    const docId = localStorage.getItem("livraisonDocId");
    if (docId) {
      this.fetchLivraisonDetails(docId);
    }
  },
  computed: {
    ...mapGetters(["cartItems"]),
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    async enregistrer() {
      if (
        !this.form.nom ||
        !this.form.telephone ||
        !this.form.ville ||
        !this.form.adresse
      ) {
        this.$toast.error("Veuillez remplir tous les champs de livraison.");
        return;
      }

      try {
        const docRef = await addDoc(collection(db, "livraisons"), {
          nom: this.form.nom,
          telephone: this.form.telephone,
          ville: this.form.ville,
          adresse: this.form.adresse,
          timestamp: new Date(),
        });

        const docId = docRef.id;
        localStorage.setItem("livraisonDocId", docId);
        console.log("Détails de livraison enregistrés avec succès !");
        this.showForm = false;
        this.$toast.success("Détails de livraison enregistrés avec succès !");
      } catch (error) {
        console.error("Erreur lors de l'enregistrement :", error);
        this.$toast.error("Une erreur est survenue lors de l'enregistrement.");
      }
    },
    async fetchLivraisonDetails(docId) {
      try {
        const docRef = doc(db, "livraisons", docId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          this.form.nom = data.nom;
          this.form.telephone = data.telephone;
          this.form.ville = data.ville;
          this.form.adresse = data.adresse;
          this.showForm = false;
          console.log("Détails de livraison récupérés :", data);
        } else {
          console.error("Le document avec l'ID spécifié n'existe pas.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des détails :", error);
      }
    },
    async envoyerMessageTelegram() {
      // Vérifiez si tous les champs sont remplis et ne contiennent pas uniquement des espaces
      if (
        !this.form.nom?.trim() ||
        !this.form.telephone?.trim() ||
        !this.form.ville?.trim() ||
        !this.form.adresse?.trim()
      ) {
        this.$toast.error("Veuillez remplir tous les champs de livraison avant de confirmer l'achat.");
        return;
      }

      const botToken = process.env.TELEGRAM_BOT_TOKEN || "default_bot_token";
      const chatId = process.env.TELEGRAM_CHAT_ID || "default_chat_id";

      console.log("Debugging Telegram Config:", { botToken, chatId });
      if (botToken === "default_bot_token" || chatId === "default_chat_id") {
        console.error(
          "Les variables d'environnement par défaut sont utilisées. Assurez-vous que le fichier .env est correctement configuré et que les variables TELEGRAM_BOT_TOKEN et TELEGRAM_CHAT_ID sont définies."
        );
        this.$toast.error("Erreur de configuration : les identifiants Telegram sont manquants ou incorrects.");
        return;
      }

      const message = `
🛍️ *Nouvelle commande reçue !*

👤 *Nom complet* : ${this.form.nom}
📞 *Téléphone* : ${this.form.telephone}
📍 *Ville* : ${this.form.ville}
🏠 *Adresse* : ${this.form.adresse}

🛒 *Détails du panier* :
${this.cartItems
  .map((item) => `  • ${item.name} x${item.quantity} — ${item.prix} FCFA`)
  .join("\n")}

✅ Merci pour votre commande !
`;

      try {
        const response = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: "Markdown",
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Erreur lors de l'envoi du message Telegram :", errorData);
          this.$toast.error(`Erreur Telegram : ${errorData.description || "Une erreur est survenue."}`);
          return;
        }

        console.log("Commande envoyée avec succès !");
        this.$toast.success("Commande envoyée avec succès !");
        this.$router.push("/ticket");
        localStorage.removeItem("cart");
        this.$store.commit("clearCart");
      } catch (error) {
        console.error("Erreur lors de l'envoi du message Telegram :", error);
        this.$toast.error("Une erreur réseau est survenue lors de l'envoi de la commande.");
      }
    },
    modifier() {
      this.showForm = true;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.wrapper {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: white;
  overflow: scroll;
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 15px;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
}

.center {
  padding: 15px;
}

.livraison-box {
  border: 1px solid rgba(128, 128, 128, 0.392);
  border-radius: 10px;
  padding: 20px 15px 10px 15px;
  color: grey;
}

.methode-box,
.panier-box {
  border: 1px solid rgba(128, 128, 128, 0.392);
  border-radius: 10px;
  padding: 20px 15px 10px 15px;
  color: grey;
}
</style>