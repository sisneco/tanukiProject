<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <section class="w-full flex flex-col justify-center">
    <h2
      class="text-teal-500 text-4xl border-b-2 border-teal-400 pb-2 w-full md:text-8xl"
    >
      {{ props.title }}
    </h2>
    <slot />
  </section>
</template>
