<template>
  <div class="wrapper">
    <!-- Icône pour retourner en arrière -->
    <v-icon @click="retour">mdi-arrow-left</v-icon>

    <br />
    <br />
    <br />

    <!-- Titre pour la catégorie iPhone -->
    <h1 class="text-h3 text-center font-weight-bold">iPhone</h1>

    <br />
    <br />



    <br />
    <CategoriesVue />

    <br />


    <br />
    <br />

    <!-- Boucle sur les iPhones -->
    <v-card class="mx-auto pa-5 rounded-xl" elevation="0" v-for="item in iphones" :key="item.id">
      <router-link :to="'/details/' + item.id">
        <v-img :src="item.url" width="260px"></v-img>
      </router-link>

      <v-card-title class="font-weight-bold">{{ item.name }}</v-card-title>

      <v-card-subtitle>{{ item.details }}</v-card-subtitle>

      <!-- Affichage du prix barré et prix actuel -->
      <span class="body-text-2 text-decoration-line-through ml-3">{{ item.last_prix }} FCFA</span>
      <br>
      <span class="body-text-1 font-weight-bold ml-3">{{ item.prix }} FCFA</span>

      <br />
      <br />

      <!-- Bouton Ajouter au panier -->
      <v-card-actions>
        <v-btn color="primary" @click="() => { addSound(); addItemToCart(item); vibrate() }">Ajouter</v-btn>
      </v-card-actions>
    </v-card>

    <audio ref="sonAdd" src="/add.wav" preload="auto"></audio>


    <br /> <br /> <br />

    <!-- Section pour livraison gratuite -->
    <v-card elevation="0"
      style="background-color: whitesmoke; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; border-radius: 30px; height: 200px;">
      <img src="https://storage.googleapis.com/mannequin/retail-qualifiers/free-shipping.svg" alt="" />
      <p class="text-body-1 font-weight-bold text-center">Livraison gratuite.</p>
      <br />
      <v-btn text color="info">En savoir plus</v-btn>
    </v-card>
  </div>
</template>

<script>
import CategoriesVue from '../components/categoriesVue.vue';

import { telephones } from '../utils/data';  // Importer les données depuis le fichier
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      // Nous récupérons les iPhones depuis la structure des données
      iphones: telephones.iPhone
    };
  },
  methods: {
    // Méthodes Vuex pour gérer l'ajout au panier
    ...mapActions(['addToCart']),
    addItemToCart(item) {
      this.addToCart(item);
    },
    addSound() {
      // Utiliser this.$nextTick pour s'assurer que l'élément audio est bien rendu
      this.$nextTick(() => {
        const sonAdd = this.$refs.sonAdd;

        // Vérifier si sonAdd est bien un élément audio
        if (sonAdd && typeof sonAdd.play === "function") {
          sonAdd.play().catch((error) => {
            console.error("Erreur lors de la lecture du son d'ajout :", error);
          });
        } else {
          console.warn("L'élément audio n'a pas été trouvé ou n'est pas valide.");
        }
      });
    },
    vibrate() {
      if (navigator.vibrate) {
        navigator.vibrate(50); // Vibration de 200ms
      } else {
        console.warn("La vibration n'est pas supportée sur cet appareil.");
      }
    }
    ,
    retour() {
      window.history.back();  // Retour à la page précédente
    },
  },
};
</script>


<style scoped>
body {
  font-family: Google Sans, Roboto, Arial, sans-serif !important;
}

.wrapper {
  padding: 15px;
}

.v-card {
  background-color: white;
  border: 1px solid rgba(128, 128, 128, 0.345);
  margin-bottom: 20px;
}

.v-card .v-img {
  margin-left: auto;
  margin-right: auto;
}

.body-text-1 {
  font-family: "Oswald", sans-serif !important;
  font-size: 1.3rem;

}
</style>