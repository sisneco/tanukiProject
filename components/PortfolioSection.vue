<script setup>
const props = defineProps({
  title: String,
  img: String,
  startAt: String,
  endAt: String,
  tech: String,
  point: String,
  github: String,
});
</script>

<template>
  <section
    class="w-[95%] border border-black flex p-4 gap-x-4 flex-col md:flex-row md:w-2/3 md:h-96"
  >
    <iframe
      class="w-full h-72 md:w-1/2 md:h-full"
      src="https://www.youtube.com/embed/mgWEmuawjlk"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <div class="flex flex-col gap-y-2 w-full md:w-1/2">
      <h2 class="text-4xl font-oswald">{{ props.title }}</h2>
      <p class="text-sm md:text-xl">
        作成期間：{{ props.startAt }}　～　{{ props.endAt }}
      </p>
      <p class="text-sm md:text-xl">技術：{{ props.tech }}</p>
      <p class="text-xs md:text-xl">ポイント：{{ props.point }}</p>
      <p class="text-xs md:text-xl">
        Github：<a
          :href="props.github"
          target="_blank"
          rel="noopener noreferrer"
          class="border-b border-blue-200 text-blue-600"
        >
          {{ props.github }}
        </a>
      </p>
    </div>
  </section>
</template>
