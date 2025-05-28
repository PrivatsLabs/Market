<template>
  <div class="wrapper">
    <v-container>
      <!-- Section Avatar et Nom -->
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div elevation="1" class="profile-card">
            <div class="text-center">
              <v-avatar size="80" color="primary" class="white--text">
                <span class="avatar-initial">{{ userInitial }}</span>
              </v-avatar>
            </div>
            <div class="text-center">
              <strong class="user-name">{{ user.nom }}</strong>
              <p class="text-muted">{{ user.email }}</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <br />

      <v-card tonal>
        <v-card-title class="text-center">Bienvenue sur votre profil !</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="text-center">
          Ici, vous pouvez gérer vos informations personnelles et vos préférences.
        </v-card-text>
      </v-card>

      <br />

      <!-- Section Informations -->
      <v-row v-if="edit=='no'" justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="1" class="info-card">
            <v-card-title>Informations personnelles</v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title><strong>Téléphone :</strong> {{ user.phone }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title><strong>Adresse :</strong> {{ user.address }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-earth</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title><strong>Pays :</strong> {{ user.pays }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-btn block color="primary" @click="editProfile">
              <v-icon left>mdi-pencil</v-icon> Modifier le profil
            </v-btn>
            <br>
          </v-card>
        </v-col>
      </v-row>

      <!-- Section Edition Profil -->
      <div v-else class="livraison-box">
        <p>MODIFIER LE PROFIL</p>
        <form @submit.prevent="enregistrer">
          <v-text-field
            v-model="form.nom"
            label="Nom complet"
            :rules="[rules.required, rules.minLength(2), rules.maxLength(40)]"
            required
            clearable
          ></v-text-field>
          <v-text-field
            v-model="form.telephone"
            label="Numéro de téléphone"
            type="tel"
            :rules="[rules.required, rules.phone]"
            required
            clearable
          ></v-text-field>
          <v-text-field
            v-model="form.pays"
            label="Pays"
            :rules="[rules.required]"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="form.ville"
            label="Ville"
            :rules="[rules.required]"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="form.adresse"
            label="Adresse"
            :rules="[rules.required]"
            clearable
          ></v-text-field>
          <br />
          <v-divider></v-divider>
          <br />
          <v-btn outlined block color="blue" type="submit">Enregistrer</v-btn>
          <v-btn outlined block color="grey" @click="edit='no'">Annuler</v-btn>
        </form>
      </div>

      <!-- Section Commandes -->
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="0" class="orders-card">
            <v-card-title>Mes Commandes</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div v-if="orders.length === 0" class="text-muted text-center">
                Vous n'avez pas encore passé de commande.
              </div>
              <div v-else>
                <div style="max-height: 450px; overflow-y: auto; padding-right: 8px; width: 100%;">
                  <br>
                  <v-expansion-panels multiple>
                    <v-expansion-panel
                      v-for="order in orders"
                      :key="order.id"
                      class="mb-2"
                    >
                      <v-expansion-panel-title>
                        <div class="d-flex flex-column" style="width: 100%;">
                          <span>
                            <strong>Date :</strong>
                            {{ order.timestamp && order.timestamp.seconds
                              ? new Date(order.timestamp.seconds * 1000).toLocaleString()
                              : '' }}
                          </span>

                        </div>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <div v-for="item in order.produits" :key="item.name" class="d-flex align-center mb-2 pt-2">
                          <img :src="item.url" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px; margin-right: 10px;" />
                          <div class="infos">
                            <span class="text-body-1">{{ item.name }}</span><br />
                            <span class="text-body-2">{{ item.details }}</span><br />
                            <span class="text-body-1 font-weight-bold">{{ item.prix }} FCFA</span> <br>
                            <span class="text-body-1 font-weight-bold">Quantité: {{ item.quantity }}</span>
                          </div>
                        </div>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                  <br>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br />

      <!-- Section Actions -->
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="2" class="action-card">
            <v-card-title>Actions</v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block color="error" @click="logout">
                <v-icon left>mdi-logout</v-icon> Déconnexion
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { auth, db } from "@/plugins/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, getDocs, query, where, setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      user: {
        nom: "",
        email: "",
        phone: "",
        address: "",
        pays: "",
      },
      orders: [],
      edit: "no",
      form: {
        nom: "",
        telephone: "",
        pays: "",
        ville: "",
        adresse: "",
      },
      honeypot: "",
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
  computed: {
    userInitial() {
      return this.user.nom ? this.user.nom.charAt(0).toUpperCase() : "U";
    },
  },
  methods: {
    async fetchUserOrders() {
      try {
        // Récupère l'ID utilisateur depuis le localStorage
        const userId = localStorage.getItem("userId");
        if (!userId) {
          console.warn("Aucun userId trouvé dans localStorage.");
          this.orders = [];
          return;
        }

        // Boucle sur tous les documents de la collection "orders"+userId
        const ordersCollection = collection(db, "orders" + userId);
        const querySnapshot = await getDocs(ordersCollection);
        this.orders = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const produits = (data.panier || []).map(item => ({
            name: item.name,
            url: item.url,
            details: item.details,
            prix: item.prix,
            quantity: item.quantity || 1, // Assure que quantity est défini
          }));
          return {
            id: doc.id,
            produits,
            total: data.total,
            timestamp: data.timestamp
          };
        });

        // Met à jour le localStorage avec les commandes récupérées
        localStorage.setItem("orders", JSON.stringify(this.orders));
      } catch (error) {
        console.error("Erreur lors de la récupération des commandes :", error);
      }
    },
    async fetchUserData() {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          this.user = userDoc.data();
          await this.fetchUserOrders(); // Récupère les commandes après avoir récupéré les données utilisateur
        } else {
          console.error("Les données utilisateur sont introuvables.");
        }
      }
    },
    editProfile() {
      this.edit = "yes";
      // Pré-remplit le formulaire avec les infos actuelles
      this.form.nom = this.user.nom || "";
      this.form.telephone = this.user.phone || "";
      this.form.pays = this.user.pays || "";
      this.form.ville = this.user.ville || "";
      this.form.adresse = this.user.address || "";
    },
    async enregistrer() {
      if (
        !this.form.nom?.trim() ||
        !this.form.telephone?.trim() ||
        !this.form.pays?.trim() ||
        !this.form.ville?.trim() ||
        !this.form.adresse?.trim()
      ) {
        this.$toast && this.$toast.error
          ? this.$toast.error("Veuillez remplir tous les champs.")
          : alert("Veuillez remplir tous les champs.");
        return;
      }
      try {
        const user = auth.currentUser;
        if (user) {
          await setDoc(doc(db, "users", user.uid), {
            nom: this.form.nom,
            phone: this.form.telephone,
            pays: this.form.pays,
            ville: this.form.ville,
            address: this.form.adresse,
            email: this.user.email,
          });
          this.user.nom = this.form.nom;
          this.user.phone = this.form.telephone;
          this.user.pays = this.form.pays;
          this.user.ville = this.form.ville;
          this.user.address = this.form.adresse;
          this.edit = "no";
          this.$toast && this.$toast.success
            ? this.$toast.success("Profil mis à jour !")
            : alert("Profil mis à jour !");
        }
      } catch (error) {
        console.error("Erreur lors de la mise à jour du profil :", error);
        this.$toast && this.$toast.error
          ? this.$toast.error("Erreur lors de la mise à jour du profil.")
          : alert("Erreur lors de la mise à jour du profil.");
      }
    },
    async logout() {
      try {
        await signOut(auth);
        localStorage.setItem("etat", "deco");
        localStorage.removeItem("userId"); // Supprime l'ID utilisateur de localStorage
        this.$router.push("/connexion");
        this.$toast.success("Déconnexion réussie !");
        window.location.reload();
      } catch (error) {
        this.$toast.error("Erreur lors de la déconnexion : " + error.message);
      }
    },
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.fetchUserData(); // Appel de fetchUserData lors du montage
        // Affiche les commandes depuis le localStorage si déjà présentes
        const ordersLS = localStorage.getItem("orders");
        if (ordersLS) {
          try {
            this.orders = JSON.parse(ordersLS);
          } catch {
            this.orders = [];
          }
        }
      } else {
        this.$router.push("/connexion");
      }
    });
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px;
}

.profile-card {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.avatar-initial {
  font-size: 2rem;
  font-weight: bold;
}

.user-name {
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: capitalize;
}

.text-muted {
  color: gray;
  font-size: 0.9rem;
}

.info-card,
.orders-card,
.action-card {
  padding: 10px;
  border-radius: 10px;
}
</style>
