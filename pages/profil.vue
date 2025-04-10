<template>
  <div class="wrapper">
    <br />
    <v-btn @click="retour" class="ml-1" plain>
      <v-icon>mdi-arrow-u-left-top</v-icon>
    </v-btn>
    <br /><br /><br />

    <v-card class="mx-auto" max-width="500" elevation="2">
      <h1 class="text-h4 text-center">Profil</h1>
      <v-divider></v-divider>
      <v-container>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title><strong>Nom :</strong> {{ user.nom }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title><strong>Email :</strong> {{ user.email }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

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
      </v-container>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn block color="error" @click="logout">
          <v-icon left>mdi-logout</v-icon> Déconnexion
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { auth, db } from "@/plugins/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

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
    };
  },
  methods: {
    async fetchUserData() {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          this.user = userDoc.data();
        } else {
          console.error("Les données utilisateur sont introuvables.");
        }
      }
    },
    retour() {
      this.$router.push("/");
    },
    async logout() {
      try {
        await signOut(auth);
        localStorage.setItem("etat", "deco");
        this.$router.push("/");
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
        this.fetchUserData();
      } else {
        this.$router.push("/");
      }
    });
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px;
}

h1 {
  font-family: "Google Sans", sans-serif;
}

.v-card {
  padding: 20px;
}
</style>
