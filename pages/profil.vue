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
      <v-row justify="center">
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



      <!-- Section Commandes -->
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="1" class="orders-card">
            <v-card-title>Mes Commandes</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div v-if="orders.length === 0" class="text-muted text-center">
                Vous n'avez pas encore passé de commande.
              </div>
              <div v-else>
                <div
                  class="card elevation-0 mb-4"
                  v-for="order in orders"
                  :key="order.id"
                  style="padding: 10px;"
                >
                  <div>
                  
                    <span class="text-caption">
                      <strong>Date :</strong>
                      {{ order.timestamp && order.timestamp.seconds
                        ? new Date(order.timestamp.seconds * 1000).toLocaleString()
                        : '' }}
                    </span>
                  </div>
                  <v-divider class="my-2"></v-divider>
                  <div v-for="item in order.produits" :key="item.name" class="d-flex align-center mb-2">
                    <img :src="item.url" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px; margin-right: 10px;" />
                    <div class="infos">
                      <span class="text-body-1">{{ item.name }}</span><br />
                      <span class="text-body-2">{{ item.details }}</span><br />
                      <span class="text-body-1 font-weight-bold">{{ item.prix }} FCFA</span>
                      <span class="text-body-1 font-weight-bold">{{ item.quantity }}</span>
                    </div>
                  </div>
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
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";

export default {
  data() {
    return {
      user: {
        nom: "",
        email: "",
        phone: "",
        address: "",
        pays: "",
        edit: "no",
      },
      orders: [], // Liste des commandes de l'utilisateur
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
            prix: item.prix
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
      this.$toast.info("La fonctionnalité de modification est en cours de développement !");
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
