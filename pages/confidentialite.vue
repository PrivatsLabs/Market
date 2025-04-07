<template>
  <div class="wrapper">
    <h1>Politique de Confidentialité</h1>
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Introduction</h2>
      <p>
        Chez LafyShop, nous accordons une grande importance à la confidentialité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
      </p>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Informations collectées</h2>
      <p>
        Nous collectons les informations suivantes lorsque vous utilisez notre site :
      </p>
      <ul>
        <li><strong>Informations personnelles :</strong> telles que votre nom, numéro de téléphone, adresse et email.</li>
        <li><strong>Informations de navigation :</strong> comme votre adresse IP, le type de navigateur et les pages visitées.</li>
      </ul>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Utilisation des informations</h2>
      <p>
        Les informations collectées sont utilisées pour :
      </p>
      <ul>
        <li>Traiter vos commandes et assurer la livraison.</li>
        <li>Améliorer votre expérience utilisateur sur notre site.</li>
        <li>Vous envoyer des notifications ou des offres promotionnelles (avec votre consentement).</li>
      </ul>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Partage des informations</h2>
      <p>
        Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :
      </p>
      <ul>
        <li>Pour respecter une obligation légale.</li>
        <li>Pour assurer la livraison via nos partenaires logistiques.</li>
        <li>Avec votre consentement explicite.</li>
      </ul>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Sécurité des données</h2>
      <p>
        Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte ou divulgation.
      </p>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Vos droits</h2>
      <p>
        Vous disposez des droits suivants concernant vos données personnelles :
      </p>
      <ul>
        <li>Accéder à vos données personnelles.</li>
        <li>Demander la rectification ou la suppression de vos données.</li>
        <li>Retirer votre consentement à tout moment.</li>
      </ul>
      <p>
        Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : <strong>support@lafyshop.com</strong>.
      </p>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Modifications de la politique</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.
      </p>
    </section>

    <br />
    <v-divider></v-divider>
    <br />

    <section>
      <h2>Contact</h2>
      <p>
        Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à :
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
  name: "ConfidentialitePage",
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
