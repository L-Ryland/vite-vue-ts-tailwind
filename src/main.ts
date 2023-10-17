import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setUpRouter } from "./router";
import { setupQueryClient } from "./queryClient";

const app = createApp(App);
setupQueryClient(app);
setUpRouter(app);
app.mount("#app");
