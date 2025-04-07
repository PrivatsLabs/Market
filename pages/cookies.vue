<template>
  <div class="wrapper">
    <h1>Politique de gestion des cookies</h1>
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Introduction</h2>
      <p>
        Cette politique explique comment LafyShop utilise les cookies et technologies similaires pour améliorer votre expérience utilisateur sur notre site.
      </p>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Qu'est-ce qu'un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Il permet au site de se souvenir de vos actions et préférences (comme la langue ou le contenu du panier) pendant une période donnée.
      </p>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Types de cookies que nous utilisons</h2>
      <ul>
        <li><strong>Cookies essentiels :</strong> Ces cookies sont nécessaires pour le bon fonctionnement du site, comme la gestion du panier et l'accès sécurisé.</li>
        <li><strong>Cookies de performance :</strong> Ils nous aident à analyser l'utilisation du site pour améliorer ses performances.</li>
        <li><strong>Cookies de personnalisation :</strong> Ces cookies permettent de personnaliser votre expérience, comme mémoriser vos préférences.</li>
        <li><strong>Cookies tiers :</strong> Utilisés par des services externes comme Google Analytics pour collecter des données anonymes sur les visites.</li>
      </ul>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Gestion des cookies</h2>
      <p>
        Vous pouvez gérer ou désactiver les cookies via les paramètres de votre navigateur. Cependant, certaines fonctionnalités du site pourraient ne pas fonctionner correctement si les cookies sont désactivés.
      </p>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Contact</h2>
      <p>
        Si vous avez des questions concernant notre politique de gestion des cookies, vous pouvez nous contacter à :
      </p>
      <ul>
        <li><strong>Email :</strong> support@lafyshop.com</li>
        <li><strong>Téléphone :</strong> +226 xx xx xx xx</li>
        <li><strong>Adresse :</strong> Ouagadougou, Burkina Faso</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "CookiesPage",
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
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
}

ul {
  margin-left: 20px;
  list-style-type: disc;
}
</style>
