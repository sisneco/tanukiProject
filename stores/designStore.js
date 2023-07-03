import { defineStore } from "pinia";
const MEDIA_THRESHOLD = 768;

export const designStore = defineStore("designStore", {
  state: () => ({
    isMobileSize: false,
  }),
  getters: {},
  actions: {
    resizeAction() {
      if (window.innerWidth < MEDIA_THRESHOLD) {
        this.isMobileSize = true;
      } else {
        this.isMobileSize = false;
      }
    },
  },
});
