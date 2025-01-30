<script setup></script>
<template>
   <footer class="container hidden md:block">
      <div class="bg-[#F9FFF6] rounded-[20px] p-16">
         <div class="flex justify-between">
            <div class="w-[570px]">
               <img src="~/assets/images/nav-logo.png" alt="Logo Elemes" />
               <p class="text-sm text-secondary mt-4">
                  Upper Hill, Nairobi, Mara Road, Off Ragati Road,
                  P.O. Box 12345-00100, Upper Hill Estate,
                  Nairobi City, Kenya
               </p>
               <div class="flex items-center gap-2 mt-[33px]">
                  <div
                     v-for="item in contacts"
                     :key="item"
                     class="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary group transition-all duration-300"
                  >
                     <img
                        class="group-hover:brightness-[5] w-5 transition-all duration-300"
                        :src="'/icons/' + item.icon"
                        alt="icon"
                     />
                  </div>
               </div>
            </div>
            <div class="w-full grid grid-cols-3">
               <div>
                  <h5 class="text-lg font-medium">Categories</h5>

                  <ul class="flex flex-col gap-[19px] text-sm mt-[33px]">
                     <li class="text-secondary hover:text-primary capitalize">
                        <a href="">cupcake</a>
                     </li>
                     <li class="text-secondary hover:text-primary capitalize">
                        <a href="">pizza</a>
                     </li>
                     <li class="text-secondary hover:text-primary capitalize">
                        <a href=""> kebab </a>
                     </li>
                     <li class="text-secondary hover:text-primary capitalize">
                        <a href="">salmon</a>
                     </li>
                     <li class="text-secondary hover:text-primary capitalize">
                        <a href="">doughnut</a>
                     </li>
                  </ul>
               </div>
               <div>
                  <h5 class="text-lg font-medium">About us</h5>

                  <ul class="flex flex-col gap-[19px] text-sm mt-[33px]">
                     <li class="text-secondary hover:text-primary">
                        <a href="">About Us</a>
                     </li>
                     <li class="text-secondary hover:text-primary">
                        <a href="">FAQ</a>
                     </li>
                     <li class="text-secondary hover:text-primary">
                        <a href="">Report Problem</a>
                     </li>
                  </ul>
               </div>
               <div>
                  <h5 class="text-lg font-medium">About us</h5>

                  <p class="text-sm text-secondary mt-[33px] leading-6">
                     Get now free 50% discount for alll products on your first
                     order
                  </p>

                  <div class="mt-[18px]">
                     <div class="flex rounded-lg overflow-hidden">
                        <input
                           type="text"
                           class="w-full rounded-l-lg outline-none border-r-0 bg-transparent border-[1px] border-black pl-[15px] py-2 placeholder:text-black placeholder:text-sm"
                           placeholder="Your email address"
                        />
                        <button class="btn bg-primary font-medium text-white">
                           SEND
                        </button>
                     </div>
                  </div>
                  <ul class="mt-[19px] flex flex-col gap-[10px]">
                     <li
                        v-for="item in contacts.slice(0, 2)"
                        class="flex items-center gap-1 text-black text-sm"
                     >
                        <img
                           :src="'/icons/' + item.icon"
                           :alt="'Icon ' + item.label"
                        />
                        <span>{{ item.label }}</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <p
         class="text-center uppercase text-secondary text-[12px] tracking-[5%] pt-[48px] pb-8"
      >
         &copy; 2021 Elemes id. All rights reserved
      </p>
   </footer>
</template>
