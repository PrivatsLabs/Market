<template>
  <div class="wrapper">
    <br />
    <v-btn @click="retour" class="ml-1" plain>
      <v-icon>mdi-arrow-u-left-top</v-icon>
    </v-btn>
    <br /><br /><br />

    <v-card class="mx-auto" max-width="800" elevation="2">
      <h1 class="text-h4 text-center">À propos de nous</h1>
      <v-divider></v-divider>
      <v-container>
        <p>
          Bienvenue chez <strong>LafyShop</strong>, votre destination de choix pour
          les téléphones, tablettes et accessoires mobiles. Nous sommes une
          entreprise dédiée à offrir des produits de qualité à des prix
          compétitifs, tout en garantissant une expérience client exceptionnelle.
        </p>
        <br />
        <h2>Notre mission</h2>
        <p>
          Notre mission est de rendre la technologie accessible à tous en
          proposant une large gamme de produits électroniques adaptés à vos
          besoins. Nous croyons en l'innovation, la qualité et la satisfaction
          client.
        </p>
        <br />
        <h2>Pourquoi nous choisir ?</h2>
        <ul>
          <li>Produits de haute qualité</li>
          <li>Prix compétitifs</li>
          <li>Livraison rapide et fiable</li>
          <li>Service client réactif</li>
        </ul>
        <br />
        <h2>Contactez-nous</h2>
        <p>
          Si vous avez des questions ou des préoccupations, n'hésitez pas à nous
          contacter via notre <nuxt-link to="/aide">centre d'aide</nuxt-link>.
        </p>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  methods: {
    retour() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-top: 20px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

li {
  margin-bottom: 10px;
}
</style>
