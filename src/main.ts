import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Iconify from "@iconify/iconify";

// We want to make sure the iconify lib is ready before we create our vue app.
// We are just going to create the app after iconify will call the ready callback
Iconify.ready(() => {
  createApp(App)
    .use(router)
    .mount("#app");
});
