<script setup>
import { storeToRefs } from "pinia";

const isClick = ref(true);

const designSt = storeToRefs(designStore());

designStore().initAction();
</script>

<template>
  <header class="mt-4">
    <div
      class="openbtn1 z-50"
      :class="[
        { active: designSt.isClickHamburger.value },
        { hidden: !designSt.isMobileSize.value },
      ]"
      @click="designStore().clickHamburger()"
    >
      <span></span><span></span><span></span>
    </div>
    <nav
      className=" w-screen h-24"
      :class="[
        { active: designSt.isClickHamburger.value },
        { nav_content: designSt.isMobileSize.value },
      ]"
    >
      <ul
        className="flex flex-col w-full h-full items-center  text-4xl  text-gray-800 font-notojp  justify-center gap-y-1 md:gap-y-0 md:flex-row md:gap-x-16 md:text-2xl"
      >
        <h2
          :class="{ hidden: !designSt.isMobileSize.value }"
          class="text-5xl fixed top-32 font-oswald italic drop-shadow pb-2 w-full"
        >
          Tanuki Project
        </h2>
        <HeaderListComponent path="/" text="HOME"></HeaderListComponent>
        <HeaderListComponent path="/about" text="ABOUT"></HeaderListComponent>
        <HeaderListComponent
          path="/portfolio"
          text="PORTFOLIO"
        ></HeaderListComponent>
        <HeaderListComponent
          path="/contacts"
          text="CONTACTS"
        ></HeaderListComponent>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.openbtn1 {
  position: relative; /*ボタン内側の基点となるためrelativeを指定*/
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 5px;
}

/*ボタン内側*/
.openbtn1 span {
  display: inline-block;
  transition: all 0.4s; /*アニメーションの設定*/
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
  background: #333;
  width: 45%;
}

.openbtn1 span:nth-of-type(1) {
  top: 15px;
}

.openbtn1 span:nth-of-type(2) {
  top: 23px;
}

.openbtn1 span:nth-of-type(3) {
  top: 31px;
}

/*activeクラスが付与されると線が回転して×に*/

.openbtn1.active span:nth-of-type(1) {
  top: 18px;
  left: 18px;
  transform: translateY(6px) rotate(-45deg);
  width: 30%;
}

.openbtn1.active span:nth-of-type(2) {
  opacity: 0; /*真ん中の線は透過*/
}

.openbtn1.active span:nth-of-type(3) {
  top: 30px;
  left: 18px;
  transform: translateY(-6px) rotate(45deg);
  width: 30%;
}

a {
  color: #333;
  text-decoration: none;
}

.lead {
  margin: 20px 0 0 0;
}

.btn-block {
  width: 200px;
  padding: 30px;
}

.nav_content {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: white;
  top: 0%;
  right: 100%; /* メニューを画面の外に飛ばす */
  z-index: 5;
  transition: 0.5s;
  text-align: center;
}

.nav_content.active {
  right: 0%;
}
</style>
