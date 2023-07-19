<template>
  <div
    class="flex items-center flex-col justify-center font-notojp gap-y-4 mt-8"
  >
    <h1 class="text-8xl font-oswald">Contact</h1>
    <h2 class="text-4xl">お問い合わせ</h2>
    <p>私について知りたい方、気になる方はぜひお気軽に下記まで！</p>
    <div>
      <p class="text-4xl">
        <a
          href="https://twitter.com/_TanukiMoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fasome :icon="['fab', 'twitter-square']" class="twitter" />
        </a>
        Twitter @_TanukiMoon
      </p>
      <p class="text-4xl mt-4">
        <fasome :icon="['fab', 'google']" class="google" />
        Email tanukimoon369@gmail.com
      </p>
    </div>
  </div>
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
