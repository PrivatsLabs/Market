<template>
  <div class="wrapper">
    <!-- <div>
      <h1>Bienvenue sur LafyShop</h1>
    </div> -->

    <div class="toast">
      <div>
        <img src="/no-results.png" alt="">
        <h3 style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Ce site est conçu
          uniquement pour les téléphones mobiles.</h3> <br>
        <p>Vous pouvez accéder au site en utilisant votre smartphone pour une expérience parfaitement fonctionnelle.
        </p>
        <br> <br>
        <img src="/page-not-found.png" width="200">
      </div>
    </div>
  <!-- <v-container class="top">
    <br> <br>
    <p>Promos d'ete</p>
    
    <h2>L'ete arrive, nos offres aussi !</h2>
    <br />

    <p>
      Faites encore plus d'economies sur les appareils Pixel avec nos nouvelles
      offres pour ete.
    </p>

    <br />

    <v-btn outlined> Voir les offres </v-btn>

  </v-container> -->

  <!-- <br> <br> -->

   <!-- affiche 1 -->

   <Affiche1Vue/>


   <!-- affiche 1 -->

  <!-- affiche 2 -->

  <Affiche2Vue />

  <!-- affiche 2 -->

  <!-- affiche 3 -->

  <Affiche3Vue />


  <!-- affiche 3 -->


  <!-- slider recommander  -->

  <br> <br>
  <h2>Populaires chez nous.</h2>

  <SliderVue />

  <!-- slider recommander  -->

  <div class="notif">

    <p>Le savais-tu ?</p>
    <h4>Vous pouvez refuser l'article a la livraison si elle n'est pas comme vous le pensiez.</h4>

  </div>

  <!-- slider telepone  -->

  <br> <br>
  <h2>Nos Samsung </h2>

  <SliderTelVue />

  <!-- slider telepone  -->

  <br> <br>

  <!-- affiche 4 -->

   <Affiche4Vue />
  <!-- affiche 4 -->

  <br> <br> <br>

  <!-- <h2>Nos ordinateurs.</h2>


  <SliderPcVue />

  <br> <br> <br> -->

  <!-- <h2>Nos montres.</h2>


  <SliderMontreVue />

  <br> <br> <br> -->

  <!-- affiche 5 -->
   <Affiche5Vue></Affiche5Vue>
  <!-- affiche 5 -->







  

</div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&display=swap');

.top{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top p,h2{
  text-align: center;
  font-weight: 500;

}
.top p{
  font-weight: 400;
}

.notif{
  margin: 50px 0px 50px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EEE9E3;
  height: 200px;
}
.notif p,h4{
  text-align: center;
  font-family: "Edu AU VIC WA NT Hand", cursive;

}

.toast{
  display: none !important;
}


@media screen and (min-width: 624px) {

  body {
    display: none !important;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }



  .toast {
    display: block !important;
    text-align: center;
    /* Centre le texte */
    padding: 20px;
    /* Ajoute un peu d'espace autour du texte */
    color: black;
    position: fixed;
    z-index: 100;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: white

  }
}


</style>

<script>
import Affiche1Vue from '../components/affiche1Vue.vue';
import Affiche2Vue from '../components/affiche2Vue.vue';
import Affiche3Vue from '../components/affiche3Vue.vue';
import SliderVue from '../components/sliderVue.vue';
import SliderTelVue from '../components/sliderTelVue.vue';
import Affiche4Vue from '../components/affiche4Vue.vue';
import Affiche5Vue from '../components/affiche5Vue.vue';

export default {
  name: "IndexPage",
  data() {
    return {
      ipBlacklist: [""], // Liste des IP bloquées
    };
  },
  async mounted() {
    const clientIp = localStorage.getItem("clientIp");
    if (this.ipBlacklist.includes(clientIp)) {
      console.warn("Accès refusé pour l'adresse IP :", clientIp);
      this.$router.push("/access-denied"); // Redirige vers la page d'accès refusé
    }
  },
};
</script>
