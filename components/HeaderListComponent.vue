<script setup>
const props = defineProps({
  text: String,
  path: String,
});
</script>

<template>
  <li>
    <NuxtLink :to="props.path" @click="designStore().resetIsHamburger()">
      {{ props.text }}
    </NuxtLink>
  </li>
</template>

<style scoped>
li {
  text-align: center;
}
a:hover {
  transition: all 1s;
}
a {
  padding: 10px;
  position: relative;
  text-align: center;
  display: inline-block;
  font-weight: bold;
  color: #333;
}
a::before {
  content: "";
  position: absolute;
  left: 100%;
  right: 100%;
  bottom: 0;
  height: 2px;
  background-color: #000000;
  -webkit-transition: left 0.4s ease, right 0.4s ease;
  -moz-transition: left 0.4s ease, right 0.4s ease;
  -o-transition: left 0.4s ease, right 0.4s ease;
  transition: left 0.4s ease, right 0.4s ease;
}
a:hover::before {
  left: 0;
  right: 0;
}
</style>
