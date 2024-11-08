<template>
    <div class="slider">
      <!-- Parcours des éléments de 'items' (qui sont les catégories) -->
      <div class="card" v-for="item in items" :key="item.id">
          <router-link :to="item.url">
        <v-avatar :color="item.color" size="80">
            <strong style="font-size: 1.9rem; color: white;">{{ item.initial }}</strong>
        </v-avatar>
    </router-link>
        <div class="info-box">
          <p style="text-align: center; font-size: 1.3rem;"><strong>{{ item.name }}</strong></p>
        </div>
        <br><br>
      </div>
    </div>
  </template>
  
  <script>
  import { categories } from '../utils/data'; // Importation des données
  
  export default {
    data() {
      return {
        // 'categories' doit être une liste d'éléments dans le tableau 'items'
        items: categories
      };
    }
  };
  </script>
  
  <style scoped>
  /* Votre style reste inchangé */
  .slider {
    display: flex;
    padding: 20px;
    overflow: auto;
  }
  
  .slider .card {
    min-width: 100px;
    padding: 10px;
    margin: 0px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
  }
  
  .card .img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #F8F9FA;
    padding: 25px;
    margin-bottom: 15px;
    height: 150px;
  }
  
  .card .info-box p {
    font-size: 0.9rem;
  }
  
  .info-box .last-price {
    text-decoration: line-through;
  }
  
  .card .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85px;
  }
  
  .bottom svg {
    width: 18px;
    color: rgb(6, 122, 200);
  }
  
  .bottom span {
    font-weight: 600;
    color: rgb(6, 122, 200);
  }
  </style>
  