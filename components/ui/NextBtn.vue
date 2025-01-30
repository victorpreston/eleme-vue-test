<template>
   <button
      @click="slideNext"
      class="py-[9px] px-4 inline-flex items-center btn--primary btn--rounded font-medium"
   >
      NEXT
      <div
         class="h-[33px] w-[33px] flex items-center justify-center rounded-full bg-white ml-3"
      >
         <img src="~/assets/icons/ic_nextarrow.svg" alt="Icon Button" />
      </div>
   </button>
</template>

<script setup>
const props = defineProps({
   swiper: {
      type: Object,
      required: true,
   },
});

const slideNext = () => {
   if (props.swiper) {
      props.swiper.slideNext();
   }
};
</script>
