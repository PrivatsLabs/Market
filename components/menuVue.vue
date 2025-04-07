<template>
  <div class="menu">
    <v-icon @click="close">mdi-close</v-icon> <br>
<v-divider></v-divider>
    <div @click="home" large confortable text class="box pa-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>      <span>Accueil</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <svg style="margin: 0%;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
    </div>
    <v-divider></v-divider>

    <div @click="telephones" large confortable text class="box pa-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
      <span>Telephones</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <svg style="margin: 0%;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>

    </div>
    <v-divider></v-divider>

    <!-- <div @click="ecouteurs" large confortable text class="box pa-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
      <span>Ecouteurs</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <svg style="margin: 0%;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>

    </div> -->
    <!-- <v-divider></v-divider>

    <div @click="montres" large confortable text class="box pa-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-watch"><circle cx="12" cy="12" r="6"/><polyline points="12 10 12 12 13 13"/><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"/><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/></svg>      <span>Montres</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <svg style="margin: 0%;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>

    </div>
    <v-divider></v-divider> -->

    <!-- <div @click="tools" large confortable text class="box pa-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cable"><path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"/><path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"/><path d="M21 21v-2h-4"/><path d="M3 5h4V3"/><path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"/></svg>
      <span>Accessoires</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <svg style="margin: 0%;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>

    </div>
    <v-divider></v-divider> -->

    <!-- <v-btn @click="tablettes" large confortable text class="box pa-5">
      <img
        src="https://lh3.googleusercontent.com/YN24eOCoidong7T3E1foOb7nn6irWVnKprK7TdXKooClNrLKih6GLszuAurv36z4glpTLsWZOwFYFqRtIS4flbacfA3boUMvGY8=rw-e365-nu-w601"
        width="50"
      />
      <span>Tablettes</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn> -->

    <!-- <v-btn @click="pc" large confortable text class="box pa-5">
      <img
        src="https://lh3.googleusercontent.com/YN24eOCoidong7T3E1foOb7nn6irWVnKprK7TdXKooClNrLKih6GLszuAurv36z4glpTLsWZOwFYFqRtIS4flbacfA3boUMvGY8=rw-e365-nu-w601"
        width="50"
      />
      <span>Ordinateurs</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn> -->

    <v-spacer></v-spacer>


    <v-btn @click="aide" large confortable text class="box pa-5" style="margin-top: auto !important; margin-bottom: 50px;">
      <v-icon>mdi-help-circle</v-icon>
      <span>Aide</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>

    <!-- <v-btn @click="handleSignOut" outlined color="warning" class="deco">Se déconnecter</v-btn> -->

  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 105;
  left: 0%;
  top: 55px;
  width: 0%;
  height: 100% !important;
  background-color: white !important;
  padding: 0px;
  padding-bottom: 720px;
  border-right: 1px solid rgba(128, 128, 128, 0.164);
  border-top: 1px solid rgba(128, 128, 128, 0.162);
  transition: 0.3s;
  animation: ease-in-out;
}

.menu .box {
  display: none;
  align-items: center;
  height: 50px;
  padding: 12px !important;
  margin-bottom: 0px;
  color: rgba(128, 128, 128, 0.776);
}
.box img {
  margin-right: 15px;
}
.mdi-close {
  margin-left: auto;
  display: none;
}
svg{
  color: rgba(128, 128, 128, 0.639);
  margin-right: 15px;
}
.deco{
  display: none;
}

.mdi-bag-checked,
.mdi-help-circle {
  margin-right: 20px;
}
</style>

<script>
import { tablettes } from "../utils/data";

import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    close() {
      document.querySelector(".menu").style.width = "0%";
      document.querySelector(".menu").style.padding = "0px";
      // document.querySelector(".deco").style.display="none";
      document.querySelector(".mdi-close").style.display = "none";

      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
        box.style.display = "none";
      });
    },
    home() {
      this.$router.push("/");
      this.close();
      this.closeCart();
    },
    aide() {
      this.$router.push("/aide");
      this.close();
      this.closeCart();
    },
    telephones() {
      this.$router.push("/telephones");
      this.close();
      this.closeCart();
    },
    montres() {
      this.$router.push("/montres");
      this.close();
      this.closeCart();
    },
    tablettes() {
      this.$router.push("/tablettes");
      this.close();
      this.closeCart();
    },
    tools() {
      this.$router.push("/accessoires");
      this.close();
      this.closeCart();
    },
    pc() {
      this.$router.push("/pc");
      this.close();
      this.closeCart();
    },
    ecouteurs() {
      this.$router.push("/ecouteurs");
      this.close();
      this.closeCart();
    },
    ...mapActions(["closeCart"]),
    ...mapActions({
      signOut: "auth/signOut", // Appelle l'action signOut du module auth
    }),
    // async handleSignOut() {
    //   this.close();
    //   try {
    //     await this.signOut(); // Appelle l'action signOut
    //     this.$router.push("/connexion"); // Redirige vers la page de login après déconnexion
    //   } catch (error) {
    //     console.error("Erreur lors de la déconnexion : ", error);
    //   }
    // },
  },
};
</script>
