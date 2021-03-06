import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import './assets/tailwind.css'
import router from './router'
import store from './store'

const app = createApp(App).use(store).use(router);

app.use(PrimeVue);

app.mount("#app");
