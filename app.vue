<script setup>
const designSt = designStore();

designSt.initAction();

onMounted(() => {
  window.addEventListener("resize", designSt.resizeAction);
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
