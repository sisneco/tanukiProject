<template>
  <section
    className="w-full flex flex-col text-center items-center gap-y-8 py-14"
  >
    <p className="text-4xl text-red-600">Tanuki is God...</p>
    <p className="text-8xl font-bold">Hello World!</p>
    <p className="text-2xl">
      本業はJavaエンジニア、だけれどWebをしてみたい！いいでしょ？やったー！！！！
    </p>
  </section>

  <div className="w-full h-96 flex flex-col md:flex-row">
    <section className=" w-full h-full md:w-1/2 flex  justify-center">
      <div
        className="rounded-full w-96 h-96 border border-teal-400  flex justify-center items-center  "
      >
        <NuxtLink
          to="/profile"
          className="text-center  text-teal-500 text-5xl font-semibold "
        >
          <h2>About Me</h2>
          <p>→</p>
        </NuxtLink>
      </div>
    </section>
    <section className=" w-full h-full md:w-1/2 flex  justify-center items-end">
      Twitter Strava zennを↓揃えで
    </section>
    <img
      src="@/assets/image.jpg"
      className="fixed h-screen w-80 top-0 left-10 object-cover -z-50 "
    />
  </div>
</template>
