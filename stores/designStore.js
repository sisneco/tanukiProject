import { defineStore } from "pinia";
const MEDIA_THRESHOLD = 768;

export const designStore = defineStore("designStore", {
  state: () => ({
    isMobileSize: false,
    isClickHamburger: false,
  }),
  getters: {},
  actions: {
    /** ハンバーガーメニュー -> ONOFF管理 */
    clickHamburger() {
      this.isClickHamburger = !this.isClickHamburger;
    },
    resetIsHamburger() {
      this.isClickHamburger = false;
    },

    /** 初期化（Mobileフラグ） */
    initAction() {
      if (window.innerWidth < MEDIA_THRESHOLD) {
        this.isMobileSize = true;
      } else {
        this.isMobileSize = false;
      }
    },
    /** リサイズイベント */
    resizeAction() {
      if (window.innerWidth < MEDIA_THRESHOLD) {
        this.isMobileSize = true;
      } else {
        this.isMobileSize = false;
      }
    },
  },
});
