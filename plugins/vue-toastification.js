import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {
  // Options de configuration (facultatif)
  timeout: 5000,
  position: "top-right",
});
