<script setup>
useHead({ title: "Tanuki Moon - Home" });

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
    className="w-full flex flex-col text-center items-center gap-y-8 pt-14 pb-4"
  >
    <p className="text-5xl text-teal-400">-TakeYour EnjoyLife-</p>
    <p className="text-6xl md:text-9xl font-bold text-black">Tanuki Moon</p>
    <p className="font-notojp text-lg md:text-2xl   text-black">
      お客様のありがとうのために
    </p>
  </section>

  <div className="w-full h-56 flex flex-col md:flex-row md:mt-32">
    <section
      className=" w-full h-full md:w-1/2 flex  justify-center my-10 md:my-0  animationBug"
    >
      <NuxtLink to="/about">
        <div
          @mouseover="goAnimationAboutMeMouseOver()"
          @mouseleave="goAnimationAboutMeMouseLeave()"
          class="rounded-full w-32 h-32 text-xl flex justify-center items-center cursor-pointer border-2 md:border-4 border-teal-400 md:w-96 md:h-96 flex-col text-center text-teal-500 md:text-5xl font-semibold"
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
      <h2 className=" text-6xl italic md:text-8xl">FollowMe!!</h2>
      <div className="flex  items-center gap-2 mt-4  md:flex-col">
        <a
          href="https://twitter.com/_TanukiMoon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TanukiMoonのTwitterアカウント"
        >
          <fasome :icon="['fab', 'twitter-square']" class="twitter icon" />
        </a>
        <a
          href="https://github.com/sisneco"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TanukiMoonのgithubアカウント"
        >
          <fasome :icon="['fab', 'github']" class="icon" />
        </a>
        <a
          href="https://www.strava.com/athletes/102604359"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TanukiMoonのStravaアカウント"
        >
          <fasome :icon="['fab', 'strava']" class="strava icon" />
        </a>
      </div>
    </section>
    <img
      src="/image.jpg"
      class="absolute top-14 h-[200px] w-screen md:fixed md:h-screen md:w-80 md:top-0 md:left-32 object-cover -z-50"
      alt="TanukiMoonポートフォリオサイト背景"
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
  height: 45px;
  width: 45px;
  border-radius: 15px;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .icon {
    height: 120px;
    width: 120px;
  }
}
</style>
