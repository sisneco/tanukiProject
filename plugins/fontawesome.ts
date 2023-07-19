import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitterSquare,
  faStrava,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineNuxtPlugin((nuxtApp) => {
  config.autoAddCss = false;
  //個別フォントをimportした場合は以下を使う
  library.add(faTwitterSquare, faStrava, faGithub, faGoogle);
  nuxtApp.vueApp.component("fasome", FontAwesomeIcon);
});
