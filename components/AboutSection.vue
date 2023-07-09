<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <section class="w-1/2 flex flex-col justify-center">
    <h2 class="text-teal-500 text-8xl border-b-2 border-teal-400 pb-2 w-full">
      {{ props.title }}
    </h2>
    <slot />
  </section>
</template>
