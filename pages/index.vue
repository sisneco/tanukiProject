<script setup>
// values
/* AboutMeAnimation ControlFlag */
const isAnimationAboutmeTop = ref(false);
const isAnimationAboutmeBottom = ref(false);

// methods
/* MouseOver For AboutMe */
function goAnimationAboutMeMouseOver() {
  isAnimationAboutmeTop.value = true;
}

/* MouseLeave For AboutMe */
function goAnimationAboutMeMouseLeave() {
  isAnimationAboutmeBottom.value = true;
  isAnimationAboutmeTop.value = false;
}
</script>

<template>
  <section
    className="w-full flex flex-col text-center items-center gap-y-8 py-14"
  >
    <p className="text-5xl text-red-600">-TakeYour EnjoyLife-</p>
    <p className="text-9xl font-bold text-white md:text-black">Tanuki Moon</p>
    <p className="text-2xl  text-white md:text-black">
      お客様のありがとうのために
    </p>
  </section>

  <div className="w-full h-96 flex flex-col md:flex-row">
    <section className=" w-full h-full md:w-1/2 flex  justify-center">
      <NuxtLink to="/about">
        <div
          @mouseover="goAnimationAboutMeMouseOver()"
          @mouseleave="goAnimationAboutMeMouseLeave()"
          class="rounded-full w-80 h-80 flex justify-center items-center cursor-pointer border-4 border-teal-400 md:w-96 md:h-96 flex-col text-center text-teal-500 text-5xl font-semibold"
          :class="[
            { 'animate-slide-top': isAnimationAboutmeTop },
            { 'animate-slide-bottom': isAnimationAboutmeBottom },
          ]"
        >
          <h2>About Me</h2>
          <p>→</p>
        </div>
      </NuxtLink>
    </section>
    <section
      className=" w-full h-full md:w-1/2 flex   flex-col justify-center item-center text-center md:items-end "
    >
      <h2 className="text-6xl italic md:text-8xl">FollowMe!!</h2>
      <div className="flex  items-center gap-y-2 mt-4 md:flex-col">
        <a
          href="https://twitter.com/_TanukiMoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fasome :icon="['fab', 'twitter-square']" class="twitter" />
        </a>
        <a
          href="https://github.com/sisneco"
          target="_blank"
          rel="noopener
        noreferrer"
        >
          <fasome :icon="['fab', 'github']" class="icon" />
        </a>
        <a
          href="https://www.strava.com/athletes/102604359"
          target="_blank"
          rel="noopener
      noreferrer"
        >
          <fasome :icon="['fab', 'strava']" class="strava icon" />
        </a>
      </div>
    </section>
    <img
      src="@/assets/image.jpg"
      class="absolute top-20 h-[520px] w-screen md:fixed md:h-screen md:w-80 md:top-0 md:left-32 object-cover -z-50"
    />
  </div>
</template>

<style scoped>
.strava {
  background-color: #fc4c02;
  color: white;
  margin-top: 4px;
}

.twitter {
  color: #1da1f2;
  height: 100px;
  width: 100px;
  cursor: pointer;
}

.icon {
  height: 90px;
  width: 90px;
  border-radius: 15px;
  cursor: pointer;
}
</style>
