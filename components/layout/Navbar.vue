<script setup>
const links = [
   {
      title: "Home",
      url: "/",
      hot: false,
   },
   {
      title: "About",
      url: "/",
      hot: false,
   },
   {
      title: "Promotions",
      url: "/",
      hot: true,
   },
   {
      title: "Blogs",
      url: "/",
      hot: false,
   },
   {
      title: "Contact Us",
      url: "/",
      hot: false,
   },
];
</script>

<template>
   <div
      class="container py-6 absolute bg-white md:bg-transparent border-b-[1px] border-[#f8f8f8] md:border-none inset-x-0 z-50"
   >
      <div class="flex items-center justify-between">
         <NuxtLink to="/">
            <img
               class="h-[50px]"
               src="~/assets/images/nav-logo.png"
               alt="Elemes group"
            />
         </NuxtLink>

         <div class="md:flex items-center hidden">
            <ul class="flex gap-8 items-center">
               <li v-for="link in links" :key="link">
                  <NuxtLink
                     class="capitalize font-Medium text-sm hover:text-primary transition ease-out duration-200 relative"
                     :to="link.url"
                     >{{ link.title }}
                     <p
                        v-if="link.hot"
                        class="-top-4 -right-4 absolute leading-[14px] text-[8px] text-white inline-flex items-center bg-[#E7462D] px-[9px] py-[2px] font-bold rounded-lg"
                     >
                        HOT
                     </p>
                  </NuxtLink>
               </li>
            </ul>
         </div>
         <div class="flex items-center gap-6">
            <UiButton class="hidden md:block" label="Masuk" />
            <UiButton
               class="btn--primary btn--rounded"
               label="Daftar Sekarang"
            />
         </div>
      </div>
   </div>
</template>
