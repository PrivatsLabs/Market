<template>
  <div class="wrapper">
    <v-icon @click="retour">mdi-arrow-left</v-icon>
    <br />
    <br />
    <div v-if="product">
      <p class="text-h5 font-weight-bold">{{ product.name }}</p>
      <p class="text-body-1">À partir de {{ product.prix }} FCFA</p>

      <div class="img-box">
        <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <img v-if="img === 'true'" :src="product.url" style="width: 300px !important;" key="img1" />
        </transition>

        <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <img v-if="img_2 === 'true'" :src="product.url2" style="width: 300px !important;" key="img2" />
        </transition>

        <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <img v-if="img_3 === 'true'" :src="product.url3" style="width: 300px !important;" key="img3" />
        </transition>
      </div>

      <div class="img-bottom">
        <div @click="img1">
          <img :src="product.url" />
        </div>
        <div @click="img2">
          <img :src="product.url2" />
        </div>
        <div @click="img3">
          <img :src="product.url3" />
        </div>
      </div>

      <p>{{ product.long_details }}</p>

      <br />
      <br />

      <v-btn large block color="primary" @click="() => { addSound(); addToCartHandler(); vibrate(); }">Ajouter au panier</v-btn>

      <br />

      <span>
        <v-icon color="success">mdi-shield-lock</v-icon>
        Paiement sécurisé
      </span>
      <br />
      <br />
      <span>
        <v-icon color="success">mdi-truck-delivery-outline</v-icon>
        Livraison rapide
      </span>
      <br />
      <br />
    </div>

    <v-alert v-else type="error" dismissible>Produit non trouvé !</v-alert>
    <audio ref="sonAdd" src="/add.wav" preload="auto"></audio>

  </div>
</template>

<script>
import { mapActions } from "vuex";
import { telephones, iphone, samsung, redmi, recommander } from "~/utils/data";

export default {
  async asyncData({ params }) {
    try {
      const productId = params.id;
      // Recherche dans toutes les catégories de produits
      const allProducts = [
        ...telephones.iPhone,
        ...telephones.samsung,
        ...telephones.redmi,
        ...recommander,
      ];
      const product = allProducts.find((p) => p.id === productId);

      return { product };
    } catch (error) {
      console.log("Produit non trouvé");
      return { product: null };
    }
  },
  data() {
    return {
      product: null,

      img: "true",
      img_2: "false",
      img_3: "false",
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    retour() {
      window.history.back();
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
    img1() {
      this.img = "true";
      this.img_2 = "false";
      this.img_3 = "false";
    },
    img2() {
      this.img = "false";
      this.img_2 = "true";
      this.img_3 = "false";
    },
    img3() {
      this.img = "false";
      this.img_2 = "false";
      this.img_3 = "true";
    },
    addToCartHandler() {
      if (this.product) {
        this.addToCart(this.product);
      }
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.transition = 'opacity 0.5s ease-in-out';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s ease-in-out';
      el.style.opacity = 0;
      done();
    }
  },
};
</script>




<style scoped>
.wrapper {
  padding: 15px;
}

.img-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 20px 5px;
  background-color: white;
  border: 1px solid rgba(128, 128, 128, 0.47);
  border-radius: 30px;
  position: relative;
}

.img-box #img_1 {
  position: absolute;
  z-index: 2;
}

.img-box #img_2 {
  position: absolute;
  z-index: 4;
  width: auto;
}

.img-box #img_3 {
  position: absolute;
  z-index: 6;
}

.img-bottom {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.img-bottom div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 105px;
  width: 100px;
  margin: 5px;
  border: 1px solid rgba(225, 221, 221, 0.616);
  border-radius: 20px;
}

.img-bottom div:hover {
  border: 1px solid #0091ea;
}

.img-bottom div img {
  width: 90px;
  height: 100px;
  padding: 2px;
  border-radius: 20px;

}

svg {
  width: 24px;
  height: 24px;
}
</style>
