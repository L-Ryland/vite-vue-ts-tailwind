import { App } from "vue";
import router from "./router";

export const setUpRouter = (app: App<Element>) => {
  app.use(router);
};
