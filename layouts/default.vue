<template>
  <v-app>

    <div>
      <v-toolbar class="p-5" elevation="0">
        <v-app-bar-nav-icon @click="menuO"></v-app-bar-nav-icon>
        <audio id="son-ouverture" src="/click.wav" preload="auto"></audio>

        <!-- <v-toolbar-title>
          <span style="color: #008080; font-family: 'Playfair Display', serif;">Lafy</span><span
              style="color: #003366; font-family: 'Montserrat', sans-serif;">Shop</span></nuxt-link></v-toolbar-title> -->
        <nuxt-link to="/">
          <img src="/logo.png" width="98
              ">
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <div class="d-flex left">
          <v-spacer></v-spacer>
          <v-icon @click="search">mdi-magnify</v-icon>

          <v-spacer v-if="cartItemCount > 0"></v-spacer>

          <v-badge v-if="cartItemCount > 0" color="info" :content="cartItemCount">
            <v-icon @click="toggleCart">mdi-cart</v-icon>
          </v-badge>


          <!-- Avatar avec initiale du prénom utilisateur -->
          <!-- <v-avatar
            @click="settings"
            v-if="isAuthenticated"
            size="25"
            color="purple"
            class="white--text font-weight-bold"
            style="display: flex; align-items: center"
          >
            <span style="text-transform: uppercase">{{
              userPrenom[0] || "U"
            }}</span>
          </v-avatar> -->

          <!-- <nuxt-link v-else to="/connexion">
            <v-icon size="25">mdi-account-circle</v-icon>
          </nuxt-link> -->
        </div>
      </v-toolbar>
    </div>
    <br />
    <br />

    <menu-vue />
    <SearchVue />
    <panierVue v-if="isCartOpen" />

    <Nuxt />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <footerVue />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import menuVueVue from "../components/menuVue.vue";
import PanierVue from "../components/panierVue.vue";
import SearchVue from "../components/searchVue.vue";
import footerVue from "../components/footerVue.vue";

export default {
  components: {
    menuVueVue,
    PanierVue,
    SearchVue,
    footerVue,
  },
  data() {
    return {
      userPrenom: "",
      ipBlacklist: [""], // Liste des IP bloquées
    };
  },
  async mounted() {
    const clientIp = localStorage.getItem("clientIp");
    if (this.ipBlacklist.includes(clientIp)) {
      console.warn("Accès refusé pour l'adresse IP :", clientIp);
      this.$router.push("/access-denied"); // Redirige vers la page d'accès refusé
    }
    await this.loadCart();
  },
  computed: {
    ...mapGetters({
      isCartOpen: "isCartOpen",
      cartItemCount: "cartItemCount",
    }),
  },
  methods: {
    menuO() {
      // Jouer le son à l'ouverture du menu
      const sonOuverture = document.getElementById("son-ouverture");
      sonOuverture.play();
      this.vibrate();

      // Changer les styles pour afficher le menu
      document.querySelector(".menu").style.width = "80%";
      document.querySelector(".menu").style.padding = "0px";
      document.querySelector(".mdi-close").style.display = "block";
      // document.querySelector(".deco").style.display="block";

      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
        box.style.display = "flex";
      });
    },
    vibrate() {
      if (navigator.vibrate) {
        navigator.vibrate(50); // Vibration de 200ms
      } else {
        console.warn("La vibration n'est pas supportée sur cet appareil.");
      }
    },
    ...mapActions({
      toggleCart: "toggleCart",
    }),
    ...mapActions(["loadCart"]),

    search() {
      document.querySelector(".search").style.height = "100%";
      document.querySelector(".search-box").style.display = "block";
      document.querySelector(".mdi-close-box-outline").style.display = "block";
      document.querySelector(".search").style.padding = "0px 20px 20px 20px";
    },
    settings() {
      this.$router.push("/settings");
    },
  },
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Google Sans", sans-serif;
}

body {
  font-family: "Google Sans", sans-serif !important;
  font-size: 14px;
  line-height: 1.29;
  margin-top: 75px;
}

.v-toolbar {
  position: fixed;
  z-index: 100 !important;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(128, 128, 128, 0.162);

}

.v-toolbar__title a {
  color: #5da44c;
  font-family: "Rubik", sans-serif;
  font-weight: 900;
  font-style: normal;
  text-decoration: none;
}

.mdi-menu {
  height: 29px !important;
  font-size: 29px !important;
  width: 29px !important;
}

.left {
  width: 100px;
}
</style>
