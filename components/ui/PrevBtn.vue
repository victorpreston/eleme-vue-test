<template>
   <button
      @click="slidePrev"
      class="py-[9px] px-4 inline-flex items-center btn--primary btn--rounded font-medium"
   >
      <div
         class="h-[33px] w-[33px] flex items-center justify-center rounded-full bg-white mr-3"
      >
         <img src="~/assets/icons/ic_prevarrow.svg" alt="Icon Button" />
      </div>
      PREV
   </button>
</template>

<script setup>
const props = defineProps({
   swiper: {
      type: Object,
      required: true,
   },
});

const slidePrev = () => {
   if (props.swiper) {
      props.swiper.slidePrev();
   }
};
</script>
