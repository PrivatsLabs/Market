<template>
  <div class="search elevation-6">
    <!-- Bouton pour fermer -->
    <v-icon @click="close">mdi-close-box-outline</v-icon>

    <!-- Barre de recherche -->
    <v-text-field
      v-model="searchQuery"
      class="search-box"
      :loading="loading"
      prepend-inner-icon="mdi-magnify"
      density="compact"
      label="Recherche ici...."
      outlined
      hide-details
      clearable
      color="teal"
      single-line
      type="search"
      @click:append-inner="onClick"
    ></v-text-field>

    <br /> <br /> <br /> <br /> <br />
    
    <!-- Liste des éléments filtrés -->
    <div class="search-items">
      <div class="card elevation-1" v-for="(item, index) in filteredItems" :key="index" @click="close">
        <img :src="item.url" style="width: 90px; height: 96px !important;" alt="Produit" />
        <nuxt-link :to="'/details/' + item.id">
          <div class="infos">
            <span class="text-body-1">{{ item.name }}</span><br />
            <span class="text-body-2">{{ item.details }}</span><br />
            <span style="text-decoration: line-through; color: rgb(101, 8, 8);" class="text-body-2">
              {{ item.last_prix }} FCFA
            </span><br />
            <span class="text-body-1 font-weight-bold">{{ item.prix }} FCFA</span>
          </div>
        </nuxt-link>
        <v-spacer></v-spacer>
      </div>
    </div>
  </div>
</template>

<script>
import { telephones } from "../utils/data"; // On importe maintenant les téléphones avec les catégories

export default {
  data: () => ({
    loaded: false,
    loading: false,
    searchQuery: "", // Texte de recherche
    telephones, // Les téléphones avec leurs catégories (iPhone, Samsung, Redmi)
  }),
  computed: {
    // Propriété calculée pour filtrer les items en fonction de la recherche
    filteredItems() {
      const query = this.searchQuery.toLowerCase();
      let filteredItems = [];

      // On parcourt les catégories (iPhone, Samsung, Redmi)
      for (const category in this.telephones) {
        if (this.telephones.hasOwnProperty(category)) {
          // On vérifie que la catégorie contient un tableau (c'est-à-dire les téléphones)
          if (Array.isArray(this.telephones[category])) {
            // Filtrage des téléphones de chaque catégorie
            const filteredCategory = this.telephones[category].filter(item => 
              item.name.toLowerCase().includes(query) || 
              item.details.toLowerCase().includes(query)
            );
            // Ajouter les résultats filtrés à filteredItems
            filteredItems = [...filteredItems, ...filteredCategory];
          }
        }
      }

      return filteredItems;
    },
  },
  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    close() {
      const searchElement = document.querySelector(".search");
      const closeIcon = document.querySelector(".mdi-close-box-outline");
      const closeBarre = document.querySelector(".search-box");

      if (searchElement && closeIcon) {
        searchElement.style.height = "0%";
        closeIcon.style.display = "none";
        closeBarre.style.display = "none";
        searchElement.style.padding = "0px";
      }
    },
  },
};
</script>


<style scoped>

.search {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 155 !important;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: white;
  overflow: scroll;
  padding: 0px;
  transition: 0.4s;
  animation: ease-in-out;
}
a{
  color: grey;
}
.search-box{
  width: 95%;
  top: 27px;
  left: 2.5%;
  z-index: 50;
  margin-bottom: 50px;
  position: fixed;
  display: none;
  background-color: white;
}


.mdi-close-box-outline{
  top: 5px;
  right: 2.5%;
  z-index: 50;
  margin-bottom: 50px;
  position: fixed;
  display: none;
  background-color: white;
}

.mdi-close-box-outline {
  margin-left: auto;
  display: none;
}


.v-toolbar {
  background-color: white !important;
}

.v-toolbar__title {
  color: #5da44c;
  font-family: "Rubik", sans-serif;
  font-weight: 900;
  font-style: normal;
  text-decoration: none;
}

.panier {
  position: fixed;
  z-index: 20;
  height: 100vh;
  width: 100%;
  background-color: white;
}

.panier .center {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f8f8f8;
  padding-bottom: 30px;
}

.panier a {
  color: #5da44c;
  font-family: "Fugaz One", sans-serif;
  font-weight: 900;
  font-style: normal;
  text-decoration: none;
}

.panier .panier-vide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: 300px;
  padding: 30px;
}

.card {
  display: flex;
  width: 100% !important;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
}

.bottom {
  background-color: white;
  padding: 20px;
  position: fixed;
  z-index: 30;
  bottom: 0;
  left: 0;
  width: 100%;
}

select {
  border: 1px solid rgba(128, 128, 128, 0.355);
  border-radius: 5px;
}

select:focus {
  outline: none;
}

select option {
  text-align: center;
}

.infos{
  margin-left: 10px;
}

</style>
