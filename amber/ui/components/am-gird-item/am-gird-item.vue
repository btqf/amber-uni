<template>
  <view class="am-grid-item" :style="{ width }">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 宫格布局，n * n 布局
 */

import { computed } from "@vue/runtime-core";
import { useEl } from "../../hook";

const { getParent } = useEl();

// am-grid
const parent = getParent("am-grid", ["column"]);

// 宽度
const width = computed(() => {
  return 100 / (parent.value.column || 0) + "%";
});
</script>

<style scoped></style>
