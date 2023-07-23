<template>
  <carousel
    class="flex flex-col w-full"
    :items-to-show="props.itemsShow"
    :autoplay="props.autoplay"
    :transition="props.transition"
    :wrap-around="props.wrapAround"
    :breakpoints="props.breakpointsSetup"
  >
    <slot />

    <template #addons>
      <slot name="control" />
    </template>
  </carousel>
</template>

<script setup lang="ts">
interface Props {
  itemsShow?: number;
  autoplay?: number;
  transition?: number;
  wrapAround?: boolean;
  breakpointsSetup?: any;
}

const props = withDefaults(defineProps<Props>(), {
  itemsToShow: 3,
  autoplay: 2000,
  transition: 2000,
  wrapAround: true,
  breakpointsSetup: {
    480: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign: "center",
    },
  },
});
</script>

<style></style>
