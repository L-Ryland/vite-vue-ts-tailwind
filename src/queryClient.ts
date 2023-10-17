import { App } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

export const setupQueryClient = (app: App<Element>) => {
  app.use(VueQueryPlugin);
};
