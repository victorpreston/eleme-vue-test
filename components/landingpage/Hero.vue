<script setup></script>
<template>
   <section class="relative pt-40 pb-16 md:py-16">
      <div class="inset-0 absolute">
         <div
            class="bg-[url('~/assets/images/background.png')] h-full bg-cover bg-center opacity-[2%]"
         ></div>
      </div>
      <div class="container relative">
         <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div class="md:max-w-[482px]">
               <h1
                  class="text-5xl lg:text-[64px] leading-[64px] text-primary font-medium"
               >
                  Good Food Us Good Mood
               </h1>

               <img
                  class="md:hidden"
                  src="~/assets/images/hero-img-mobile.png"
                  alt=""
               />

               <p
                  class="text-lg text-secondary leading-[29px] my-8 hidden md:block"
               >
                  I would think that conserving our natural resources should be
                  a conservative position: Not to waste food, and not to throw
                  away a lot of the food that we buy.
               </p>

               <div class="md:flex gap-4 items-center hidden">
                  <UiButton
                     class="btn--primary btn--rounded btn--shadow"
                     label="Daftar Sekarang"
                  /><UiButton
                     class="btn--secondary btn--rounded"
                     label="About us"
                  />
               </div>
            </div>
            <div>
               <img
                  class="hidden md:block"
                  src="~/assets/images/hero-img-desktop.png"
                  alt=""
               />
               <p class="text-lg text-secondary leading-[29px] my-8 md:hidden">
                  I would think that conserving our natural resources should be
                  a conservative position: Not to waste food, and not to throw
                  away a lot of the food that we buy.
               </p>

               <div class="flex gap-4 items-center md:hidden">
                  <UiButton
                     class="btn--primary btn--rounded btn--shadow"
                     label="Daftar Sekarang"
                  /><UiButton
                     class="btn--secondary btn--rounded"
                     label="About us"
                  />
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
