<template>
  <div class="panier">
    <v-app-bar class="elevation-0">
      <v-toolbar-title>
        <nuxt-link to="/">
          <img src="/logo.png" width="100">
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="text-body-1 mr-3">Panier ({{ cartItemCount }} article<span v-show="cartItemCount > 1">s</span>
        )</span>
      <v-spacer></v-spacer>
      <v-icon @click="closeCart">mdi-close</v-icon>
    </v-app-bar>

    <div class="center">
      <div v-if="cartItems.length === 0" class="panier-vide">
        <img src="/cart.png" width="150" />
        <p class="text-h4 text-center">Votre panier est vide</p>
        <v-btn outlined block color="teal" @click="() => { closeCart(); menuO(); }">Voir boutique</v-btn>
      </div>
      <div style="
          width: 100%;
          padding: 10px;
          margin-top: 20px;
          margin-bottom: 150px;
          overflow: auto;
        " v-else>

        <div class="card elevation-1" v-for="item in cartItems" :key="item.id">
          <img :src="item.url" style=" width: 90px; height: 95px !important;" />
          <div class="infos">
            <span class="text-body-1">{{ item.name }}</span> <br />
            <span class="text-body-2">{{ item.details }}</span> <br />
            <span style="text-decoration: line-through" class="text-body-2">{{ item.last_prix }} FCFA</span>
            <br />
            <span class="text-body-1 font-weight-bold">{{ item.prix }} FCFA</span>
          </div>
          <v-spacer></v-spacer>

          <div style="
              min-height: 100%;
              width: 40px;
              display: flex;
              flex-direction: column;
            ">
            <v-icon @click="() => { sonDelete(); removeFromCart(item.id); vibrate(); }">mdi-delete</v-icon>

            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <select @change="changeQuantity(item)" v-model="item.quantity"
              style="display: flex; align-items: center; justify-content: center !important; color: gray !important; font-weight: bolder !important;">
              <option v-for="n in 10" :value="n" :key="n">{{ n }}</option>
            </select>
          </div>
        </div>
        <audio ref="sonDelete" src="/delete.wav" preload="auto"></audio>

        <div class="bottom elevation-3">
          <div style="display: flex">
            <p class="font-weight-bold">Total estimé</p>
            <v-spacer></v-spacer>
            <p class="total">{{ calculateTotal().toLocaleString('fr-FR') }} CFA</p>
          </div>

          <v-divider></v-divider>

          <v-btn large block color="primary" @click="next">Procéder au paiement</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartItems", "cartItemCount"]),
  },
  methods: {
    ...mapActions(["closeCart", "removeFromCart", "updateCartItem"]),

    // 
    calculateTotal() {
      return this.cartItems.reduce((total, item) => {
        // Supprime les espaces dans le prix, puis convertit en nombre
        const prixSansEspace = parseInt(item.prix.replace(/\s/g, ''), 10);
        return total + prixSansEspace * item.quantity;
      }, 0);
    }
    ,
    changeQuantity(item) {
      // Met à jour la quantité dans le store ET dans le localStorage
      this.updateCartItem({ id: item.id, quantity: item.quantity });

      // Met à jour aussi le localStorage directement pour garantir la synchro
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const index = cart.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        cart[index].quantity = item.quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    },
    menuO() {
      document.querySelector('.menu').style.width = '95%';
      document.querySelector('.menu').style.padding = '20px';
      document.querySelector('.mdi-close').style.display = 'block';

      const boxes = document.querySelectorAll('.box');
      boxes.forEach((box) => {
        box.style.display = 'flex';
      });
    },
    sonDelete() {
      // Utiliser $nextTick pour garantir que le DOM est mis à jour
      this.$nextTick(() => {
        const sonDelete = this.$refs.sonDelete;

        if (sonDelete) {
          sonDelete.play().catch((error) => {
            console.error("Erreur lors de la lecture du son de suppression :", error);
          });
        } else {
          console.warn("L'élément audio n'a pas été trouvé.");
        }
      });
    },
    vibrate() {
      if (navigator.vibrate) {
        navigator.vibrate(200); // Vibration de 200ms
      } else {
        console.warn("La vibration n'est pas supportée sur cet appareil.");
      }
    },
    async next() {
      try {

        this.$router.push('/paiment');

        await this.closeCart();

      } catch (error) {
        console.error("Erreur lors de la fermeture du panier : ", error);
        // Gestion des erreurs si nécessaire
      }
    }





  },
};
</script>


<style scoped>
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
  position: fixed !important;
  z-index: 200 !important;
  height: 100% !important;
  width: 100%;
  background-color: white !important;
}

.panier .center {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100% !important;
  z-index: 20 !important;
  width: 100%;
  background-color: #f8f8f8 !important;
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

.infos {
  margin-left: 10px;
}
</style>
