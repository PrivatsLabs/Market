<template>
  <div class="wrapper">
    <v-icon @click="retour">mdi-arrow-left</v-icon>

    <br />
    <br />
    <br />

    <h1 class="text-h5 text-center font-weight-bold">
      Découvrez notre vaste gamme de téléphones disponibles immédiatement après votre commande.
    </h1>

    <br />
    <br />

    <v-img cover src="/affiche/apple_white.png"></v-img>

    <br />
    <br />

    <CategoriesVue />

    <br />
    <br />

    <p class="text-h4">Nos téléphones</p>

    <br />
    <br />

    <!-- Boucle sur chaque catégorie de téléphones (iPhone, Samsung, Redmi) -->
    <div v-for="(phones, category) in telephones" :key="category">
      <!-- <h3>{{ category }}</h3> -->
      <div v-for="item in phones" :key="item.id">
        <v-card class="card mx-auto pa-5 rounded-xl" elevation="0">
          <router-link :to="'/details/' + item.id">
            <img class="img" :src="item.url" style="height: auto !important; width: 260px !important;" />
          </router-link>
          <v-card-title class="font-weight-bold">{{ item.name }}</v-card-title>
          <v-card-subtitle>{{ item.details }}</v-card-subtitle>
          <span class="body-text-2 text-decoration-line-through ml-3">{{ item.last_prix }} CFA</span>
          <span class="body-text-1 font-weight-bold ml-3">{{ item.prix }} CFA</span>
          <br />
          <v-card-actions>
            <v-btn color="primary" @click="() => { addSound(); addItemToCart(item); vibrate() }">Ajouter</v-btn>
            <!-- Élément audio avec ref="sonAdd" -->
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <audio ref="sonAdd" src="/add.wav" preload="auto"></audio>

    <br /><br /><br />

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
import { telephones } from '../utils/data'; // Importer directement les catégories (iPhone, Samsung, Redmi)
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      telephones, // Nous importons directement les téléphones par catégories
    };
  },
  methods: {
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
      window.history.back();
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

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 1px solid rgba(128, 128, 128, 0.345);
  margin-bottom: 20px;
}

.card a {
  margin-right: auto !important;
}

.body-text-1 {
  font-family: "Oswald", sans-serif !important;
  font-size: 1.3rem;

}
</style>