<template>
  <v-app dark>
    <img
      v-if="error.statusCode === 404"
      src="/woman.png"
      style="margin: 320px auto 30px auto;"
    />

    <br> <br>

    <p class="error-message">La page demandée est introuvable ou l'accès est restreint.</p>
  </v-app>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
  mounted() {
    // Actualise la page toutes les 2 secondes
    // this.refreshInterval = setInterval(() => {
    //   window.location.reload();
    // }, 2000);
  },
  beforeDestroy() {
    // Nettoie l'intervalle pour éviter les fuites de mémoire
    clearInterval(this.refreshInterval);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.v-toolbar__content {
  display: none;
}

.v-application {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
}

p.error-message {
  font-size: 1rem;
  font-weight: bold;
  color: #2a2827; /* Rouge pour attirer l'attention */
  text-align: center;
  margin-top: 20px;
  line-height: 1.6;
  font-family: "Arial", sans-serif;
}
</style>