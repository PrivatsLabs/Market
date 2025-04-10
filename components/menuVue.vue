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

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>


    <v-btn @click="aide" large confortable text class="box pa-5" style="margin-top: auto !important; margin-bottom: 5px;">
      <v-icon>mdi-help-circle</v-icon>
      <span>Aide</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>

    <v-btn @click="log" id="seco" text color="warning" class="box pa-5" v-if="isLoggedIn === 'deco'">Se connecter / s'inscrire</v-btn> 
    <v-btn @click="handleSignOut" id="deco" text color="warning" class="box pa-5" v-if="isLoggedIn === 'co'">Se déconnecter</v-btn> 
<br>
<br>
<br>
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


.mdi-bag-checked,
.mdi-help-circle {
  margin-right: 20px;
}
</style>

<script>
import { signOut } from "firebase/auth";
import { auth } from "@/plugins/firebase";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isLoggedIn: "", // État de connexion récupéré depuis localStorage
    };
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
    async handleSignOut() {
      this.close();
      try {
        await signOut(auth);
        localStorage.setItem("etat", "deco"); // Met à jour l'état dans localStorage
        this.isLoggedIn = "deco"; // Met à jour l'état local
        console.log("Déconnexion réussie, isLoggedIn:", this.isLoggedIn);
        this.$toast.success("Déconnexion réussie !");
        window.location.reload();
      } catch (error) {
        console.error("Erreur lors de la déconnexion : ", error);
        this.$toast.error("Erreur lors de la déconnexion : " + error.message);
      }
    },
    log() {
      this.$router.push("/connexion"); // Redirige vers la page de connexion/inscription
      document.querySelector(".menu").style.width = "0%";
      document.querySelector(".menu").style.padding = "0px";
      document.querySelector(".mdi-close").style.display = "none";
      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
        box.style.display = "none";
      });
    },
  },
  mounted() {
    // Récupère l'état depuis localStorage
    this.isLoggedIn = localStorage.getItem("etat") || "deco";

    // Vérifie si les éléments avec les IDs 'seco' et 'deco' existent avant de modifier leur style
    const seco = document.getElementById("seco");
    const deco = document.getElementById("deco");

    if (seco && deco) {
      if (this.isLoggedIn === "co") {
        seco.style.display = "none";
        deco.style.display = "block";
      } else {
        seco.style.display = "block";
        deco.style.display = "none";
      }
    } else {
      console.warn("Les éléments avec les IDs 'seco' ou 'deco' sont introuvables.");
    }

    console.log("État de connexion récupéré depuis localStorage, isLoggedIn:", this.isLoggedIn);
  },
};
</script>
