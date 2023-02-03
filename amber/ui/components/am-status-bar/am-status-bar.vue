<template>
  <view class="am-status-bar__wrap" :style="{ height }">
    <view class="am-status-bar" :style="{ backgroundColor }"></view>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 状态栏
 * @property {String} backgroundColor 背景颜色，默认#fff
 */

import { computed } from "vue";
import { useAmber } from "@/amber";

type Props = {
  backgroundColor?: string;
};

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: "#fff",
});

const { router } = useAmber();
const { statusBarHeight } = uni.getSystemInfoSync();

// 状态栏高度
const height = computed(() => {
  return `${statusBarHeight}px`;
});

// 背景色
const backgroundColor = computed(() => {
  return (
    props.backgroundColor ||
    router.info()?.style?.navigationBarBackgroundColor ||
    router.globalStyle?.navigationBarBackgroundColor ||
    "#ffffff"
  );
});
</script>

<style lang="scss" scoped>
@import "am-status-bar";
</style>
