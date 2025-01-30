<script setup></script>
<template>
   <section class="pb-40 pt-16 md:py-16">
      <div class="container">
         <h2
            class="text-2xl leading-[30px] md:text-[38px] md:leading-[50px] font-medium"
         >
            Browser Our Tending <br />
            <span class="text-primary">Receipt</span>
         </h2>

         <div class="grid lg:grid-cols-4 gap-x-5 gap-y-[30px] mt-8">
            <NuxtLink
               v-for="item in products"
               to="/"
               :key="item"
               :class="
                  'py-[33px] px-5 rounded-[17px] relative shadow-[0px_11px_39px_0px_rgba(0,0,0,0.07)] group bg-' +
                  item.category
               "
            >
               <div class="inset-0 absolute">
                  <div
                     class="bg-[url('~/assets/images/bg-category.png')] h-full bg-cover bg-center opacity-0 group-hover:opacity-[7%] transition-all duration-300"
                  ></div>
               </div>

               <div class="relative">
                  <img
                     class="h-[120px] w-[120px] rounded-md"
                     :src="'/images/' + item.image + '.png'"
                     :alt="'Item image ' + item.name"
                  />
                  <h5
                     class="text-[26px] font-medium leading-[50px] text-black capitalize mt-[19px]"
                  >
                     {{ item.name }}
                  </h5>
                  <h6
                     class="text-primary text-lg font-medium leading-[21.33px] capitalize"
                  >
                     {{ item.category }}
                  </h6>

                  <NuxtRating
                     class="mt-[19px]"
                     active-color="#FF8412"
                     inactive-color="#C9C9C9"
                     :rating-step="0.1"
                     :rounded-corners="true"
                     :rating-size="10"
                     :rating-value="item.rating"
                  />
               </div>
            </NuxtLink>
         </div>

         <div class="text-center mt-[68px] hidden md:block">
            <button class="btn btn--primary btn--rounded">
               <span class="w-[122px] text-white font-medium">ALL Receipt</span>
            </button>
         </div>
      </div>
   </section>
</template>
