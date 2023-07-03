<script setup>
const designSt = designStore();

onMounted(() => {
  window.addEventListener("resize", designSt.resizeAction);
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
