<script setup>
const navs = [
   {
      name: "Home",
      url: "/",
      icon: "ic_home.svg",
   },
   {
      name: "Promotion",
      url: "/",
      icon: "ic_bag.svg",
   },
   {
      name: "Others",
      url: "/",
      icon: "ic_grid.svg",
   },
];
</script>
<template>
   <nav
      class="bg-white fixed bottom-0 inset-x-0 border-t-[1px] py-3 border-[#f8f8f8] md:hidden z-50"
   >
      <div class="container flex items-center justify-around">
         <NuxtLink
            :to="nav.url"
            v-for="nav in navs"
            class="flex items-center flex-col text-sm"
         >
            <img
               class="w-6 h-6"
               :src="'/icons/' + nav.icon"
               :alt="'Icon ' + nav.name"
            />
            {{ nav.name }}
         </NuxtLink>
      </div>
   </nav>
</template>
