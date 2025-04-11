<template>
  <div class="wrapper">
    <v-container>
      <!-- Section Avatar et Nom -->
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="3" class="profile-card">
            <v-card-title class="text-center">
              <v-avatar size="80" color="primary" class="white--text">
                <span class="avatar-initial">{{ userInitial }}</span>
              </v-avatar>
            </v-card-title>
            <v-card-subtitle class="text-center">
              <strong class="user-name">{{ user.nom }}</strong>
              <p class="text-muted">{{ user.email }}</p>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <br />

      <!-- Section Informations -->
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="2" class="info-card">
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
          </v-card>
        </v-col>
      </v-row>

      <br />

      <!-- Section Actions -->
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="2" class="action-card">
            <v-card-actions>
              <v-btn block color="primary" @click="editProfile">
                <v-icon left>mdi-pencil</v-icon> Modifier le profil
              </v-btn>
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
  computed: {
    userInitial() {
      return this.user.nom ? this.user.nom.charAt(0).toUpperCase() : "U";
    },
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
    editProfile() {
      this.$toast.info("La fonctionnalité de modification est en cours de développement !");
    },
    async logout() {
      try {
        await signOut(auth);
        localStorage.setItem("etat", "deco");
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
        this.fetchUserData();
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
}

.text-muted {
  color: gray;
  font-size: 0.9rem;
}

.info-card {
  padding: 10px;
  border-radius: 10px;
}

.action-card {
  padding: 10px;
  border-radius: 10px;
}
</style>
