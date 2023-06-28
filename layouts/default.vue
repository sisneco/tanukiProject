<template>
  <nav className=" w-screen h-24">
    <ul
      className="flex w-full h-full md:justify-center md:gap-x-16 items-center text-2xl text-gray-800"
    >
      <li>
        <NuxtLink to="/">HOME</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">ABOUT </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">PORTFOLIO</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">CONTACTS</NuxtLink>
      </li>
    </ul>
  </nav>
  <div className="w-screen font-oswald  font-notojp md:px-56">
    <slot />
  </div>
</template>
