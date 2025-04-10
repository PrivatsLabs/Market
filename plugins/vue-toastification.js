import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default ({ app }, inject) => {
  if (process.client) {
    Vue.use(Toast, {
      // Options de configuration (facultatif)
      timeout: 3000,
      position: "top-right",
    });

    // Injecter $toast pour l'utiliser dans l'application
    inject("toast", Vue.$toast);
  }
};
