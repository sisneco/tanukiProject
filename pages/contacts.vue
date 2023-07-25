<template>
  <div
    class="flex items-center flex-col justify-center font-notojp gap-y-4 mt-8"
  >
    <h1 class="text-8xl font-oswald text-teal-400">Contact</h1>
    <h2 class="text-3xl">お問い合わせ</h2>
    <p class="text-sm md:text-base">
      私について知りたい方、気になる方はぜひお気軽に下記まで！
    </p>
    <div class="mt-8">
      <p class="flex items-center gap-x-2 text-xl md:text-4xl">
        <a
          href="https://twitter.com/_TanukiMoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fasome :icon="['fab', 'twitter-square']" class="twitter" />
        </a>
        Twitter @_TanukiMoon
      </p>
      <p class="flex items-center gap-x-2 text-xl mt-4 md:text-4xl">
        <fasome :icon="['fab', 'google']" class="google" />
        Email tanukimoon369@gmail.com
      </p>
    </div>
  </div>
  <img
    src="@/assets/image.jpg"
    class="absolute md:fixed md:h-80 md:w-screen md:bottom-20 md:left-0 object-cover -z-50 mt-8"
  />
</template>

<style scoped>
.twitter {
  color: #1da1f2;
  height: 50px;
  width: 50px;
}

.google {
  background-color: #db4437;
  color: white;
  height: 43px;
  width: 43px;
  margin-left: 4px;
  border-radius: 5px;
}
</style>
