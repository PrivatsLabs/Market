<template>
  <div class="wrapper">
    <br /> <br>

    <h1>Service d'assistance</h1>
    <v-divider></v-divider>
    <br /> <br>

    <!-- Section FAQ -->
    <div class="faq-section">
      <h2>Questions fréquentes</h2>
      <br> 
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Comment passer une commande ?</v-expansion-panel-header>
          <v-expansion-panel-content>
            Pour passer une commande, ajoutez les articles souhaités au panier, puis cliquez sur "Confirmer l'achat" et suivez les instructions.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Quels sont les modes de paiement disponibles ?</v-expansion-panel-header>
          <v-expansion-panel-content>
            Il n'y a que les livraisons main à main qui sont disponibles.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Comment suivre ma commande ?</v-expansion-panel-header>
          <v-expansion-panel-content>
            Une fois votre commande confirmée, vous recevrez un numéro de suivi par SMS ou par email.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <br />
    <v-divider></v-divider>
    <br />

    <!-- Section Contact -->
    <div class="contact-section">
      <h2>Contactez-nous</h2>
      <br>
      <p>Pour toute assistance, vous pouvez nous joindre via :</p>
      <ul>
        <li><strong>Email :</strong> sercicelafyshop@gmail.com</li>
        <li><strong>Téléphone :</strong> +226 xx xx xx xx</li>
        <li><strong>Adresse :</strong> Ouagadougou, Burkina Faso</li>
        <li><strong>Par chat :</strong> Via l'icône du chat en bas de l'écran</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AidePage",
  data() {
    return {
      ipBlacklist: [""], // Liste des IP bloquées
    };
  },
  async mounted() {
   

    // Ajout du script Tawk.to avec les nouvelles coordonnées
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67f6fbf09b5f671906ebe1f7/1ioecg9gd";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px;
}

.faq-section,
.contact-section {
  margin-bottom: 20px;
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
</style>