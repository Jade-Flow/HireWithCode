<template>
  <div class="flex flex-col h-screen">
    <header class="bg-blue-500 text-white p-4 fixed w-full">
      <router-link to="/guidance" class="text-white px-2">指引</router-link>
      <router-link to="/challenge" class="text-white px-2">挑战</router-link>
    </header>
    <main class="flex-1 overflow-y-auto pt-16 bg-gray-100">
      <router-view />
    </main>
  </div>
</template>
