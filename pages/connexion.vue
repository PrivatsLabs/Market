<template>
  <div class="wrapper">
    <br />
    <v-btn @click="retour" class="ml-1" plain>
      <v-icon>mdi-arrow-u-left-top</v-icon>
    </v-btn>
    <br /><br /><br />

    <v-card class="mx-auto" max-width="344" elevation="0">
      <h1 class="text-h4 text-center">
        {{ etat === "co" ? "Connexion" : "Inscription" }}
      </h1>

      <v-container>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-if="etat !== 'co'"
            v-model="nom"
            color="#10a37f"
            label="Nom et prenom"
            type="text"
            variant="underlined"
            maxlength="30"
            minlength="3"
            clearable
            :rules="[(v) => !!v || 'Nom est requis']"
            required
          ></v-text-field>

          <v-text-field
            v-model="phone"
            color="#10a37f"
            label="Numéro de téléphone"
            variant="underlined"
            maxlength="10"
            minlength="8"
            type="tel"
            clearable
            :rules="[(v) => !!v || 'Numéro de téléphone est requis']"
            v-if="etat !== 'co'"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            color="#10a37f"
            label="Email"
            type="email"
            maxlength="30"
            minlength="3"
            variant="underlined"
            clearable
            :rules="[(v) => !!v || 'Email est requis']"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            color="#10a37f"
            label="Mot de passe"
            variant="underlined"
            :rules="[(v) => !!v || 'Mot de passe est requis']"
            required
          ></v-text-field>
          <br />
          <v-divider></v-divider>
          <br />
          <v-text-field
            v-model="pays"
            color="#10a37f"
            label="Pays"
            variant="underlined"
            clearable
            :rules="[(v) => !!v || 'Pays est requise']"
            v-if="etat !== 'co'"
            required
          ></v-text-field>
          <v-text-field
            v-model="ville"
            color="#10a37f"
            label="Ville"
            variant="underlined"
            clearable
            :rules="[(v) => !!v || 'Ville est requise']"
            v-if="etat !== 'co'"
            required
          ></v-text-field>
          <v-text-field
            v-model="address"
            color="#10a37f"
            label="Adresse"
            variant="underlined"
            clearable
            :rules="[(v) => !!v || 'Adresse est requise']"
            v-if="etat !== 'co'"
            required
          ></v-text-field>

          <v-checkbox
            v-model="terms"
            color="#10a37f"
            label="J'accepte les conditions"
            v-if="etat !== 'co'"
            :rules="[(v) => !!v || 'Vous devez accepter les conditions']"
            required
          ></v-checkbox>
        </v-form>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          @click="signUp"
          :disabled="!valid"
          tonal
          comfortable
          block
          large
          color="#10a37f"
          v-if="etat !== 'co'"
        >
          <span style="color: white">S'inscrire</span>
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>

        <v-btn
          @click="signIn"
          :disabled="!valid"
          style="color: white"
          tonal
          comfortable
          block
          large
          color="#10a37f"
          v-else
        >
          Se connecter
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>

      <v-alert type="error" v-if="error">{{ error }}</v-alert>

      <br /><br />

      <a
        class="text-blue text-center text-decoration-none ml-2"
        href="#"
        @click.prevent="changeEtat"
      >
        {{ etat === "co" ? "S'inscrire" : "J'ai déjà un compte. Me connecter" }}
        <v-icon>mdi-chevron-right</v-icon>
      </a>
    </v-card>
  </div>
</template>

<script>
import { auth, db } from "@/plugins/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default {
  data: () => ({
    etat: "co",
    nom: null,
    email: null,
    password: null,
    address: null,
    phone: null,
    pays: null,
    ville: null,
    terms: false,
    loading: false,
    error: null,
    valid: false,
    showPassword: false, // Ajout de la variable pour gérer l'affichage du mot de passe
    isLoggedIn: false, // État de connexion
  }),
  methods: {
    changeEtat() {
      this.etat = this.etat === "co" ? "" : "co";
    },
    retour() {
      window.history.back();
    },
    async signUp() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        // Crée un utilisateur avec Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;

        // Enregistre les données supplémentaires dans Firestore
        await setDoc(doc(db, "users", user.uid), {
          nom: this.nom,
          email: this.email,
          address: this.address,
          phone: this.phone,
          pays: this.pays,
          pays: this.ville,
          createdAt: new Date(),
        });

        this.$router.push("/");
        this.$toast.success("Inscription réussie !");
      } catch (error) {
        this.error = error.message;
        this.$toast.error("Erreur lors de l'inscription : " + error.message);
      } finally {
        this.loading = false;
      }
    },
    async signIn() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        // Connecte l'utilisateur avec Firebase Auth
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;

        // Stocke l'userId dans localStorage
        localStorage.setItem("userId", user.uid);

        // Récupère les données utilisateur depuis Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          localStorage.setItem("userPrenom", userData.nom); // Stocke le prénom dans localStorage
        }

        this.$router.push("/");
        this.$toast.success("Connexion réussie !");
        localStorage.setItem("etat", "co"); // Met à jour l'état dans localStorage
        this.reloadAfterDelay(); // Recharger la page après un délai
      } catch (error) {
        this.error = error.message;
        this.$toast.error("Erreur lors de la connexion : " + error.message);
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      try {
        await signOut(auth);

        // Supprime l'userId de localStorage
        localStorage.removeItem("userId");

        this.isLoggedIn = false;
        localStorage.setItem("etat", "deco"); // Met à jour l'état dans localStorage
        this.$router.push("/connexion");
        this.$toast.success("Déconnexion réussie !");
        window.location.reload();
      } catch (error) {
        this.$toast.error("Erreur lors de la déconnexion : " + error.message);
      }
    },
    reloadAfterDelay() {
      setTimeout(() => {
        window.location.reload();
      }, 2500); // Recharger après 2 secondes
    },
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = !!user;
    });
  },
};
</script>

<style scoped>
body {
  font-family: "Google Sans", sans-serif !important;
}
h1 {
  font-family: "Google Sans", sans-serif !important;
}
</style>