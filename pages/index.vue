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
    <p className="text-9xl font-bold border-b border-black">Tanuki Moon</p>
    <p className="text-2xl">お客様のありがとうのために</p>
  </section>

  <div className="w-full h-96 flex flex-col md:flex-row">
    <section className=" w-full h-full md:w-1/2 flex  justify-center">
      <div
        @mouseover="goAnimationAboutMeMouseOver()"
        @mouseleave="goAnimationAboutMeMouseLeave()"
        class="rounded-full w-96 h-96 flex justify-center items-center cursor-pointer border-4 border-teal-400"
        :class="[
          { 'animate-slide-top': isAnimationAboutmeTop },
          { 'animate-slide-bottom': isAnimationAboutmeBottom },
        ]"
      >
        <NuxtLink
          to="/profile"
          className="text-center  text-teal-500 text-5xl font-semibold w-full h-full flex  flex-col items-center justify-center"
        >
          <h2>About Me</h2>
          <p>→</p>
        </NuxtLink>
      </div>
    </section>
    <section
      className=" w-full h-full md:w-1/2 flex  flex-col justify-center items-end "
    >
      <h2 className="text-8xl italic">FollowMe!!</h2>
      <div className="flex flex-col items-center gap-y-2 mt-4">
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
      className="fixed h-screen md:w-80 md:top-0 md:left-32 object-cover -z-50 "
    />
  </div>
</template>

<style>
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
