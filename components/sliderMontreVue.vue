<template>
  <div class="slider">
    <div class="card" v-for="item in items" :key="item.name">
      <div class="img-box">
        <router-link :to="'/details/' + item.id">
          <img :src="item.url" style="height: 120px !important;">
        </router-link>
      </div>
      <div class="info-box">
        <p><strong>{{ item.name }}</strong></p>
        <span class="last-price">{{ item.last_prix }} FCFA</span>
        <p>A partir de <span>{{ item.prix }}</span> FCFA</p>
      </div>
      <br><br>

      <v-btn @click="() => { addSound(); addItemToCart(item); vibrate(); }" text block color="primary">Ajouter
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <audio ref="sonAdd" src="/add.wav" preload="auto"></audio>

  </div>
</template>

<script>
import { montres } from '../utils/data';

import { mapActions } from 'vuex';

export default {
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
    
  },
  data() {
    return {
      items: montres
    };
  }
};
</script>



<style scoped>
.slider {
  display: flex;
  padding: 20px;
  overflow: auto;
}

.slider .card {
  min-width: 160px;
  padding: 10px;
  margin: 0px 10px 0px;
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