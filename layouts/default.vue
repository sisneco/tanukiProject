<template>
  <nav className=" w-screen h-24">
    <ul
      className="flex w-full h-full md:justify-center md:gap-x-16 items-center text-2xl text-gray-800"
    >
      <li>
        <NuxtLink to="/">Home </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile">MyProfile </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Home </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Home </NuxtLink>
      </li>
    </ul>
  </nav>
  <div className="w-screen  font-notojp md:px-24">
    <slot />
  </div>
</template>
