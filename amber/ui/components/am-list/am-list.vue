<template>
  <view class="am-list" :style="{ 'border-radius': parseRpx(props.radius) }">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 列表
 * @property {String} justify 水平布局方式
 * @property {Boolean} disabled 是否禁用
 * @property {Boolean} border 是否带有下边框，默认true
 * @property {Number} radius 圆角大小
 */

import { parseRpx } from "@/amber/utils";

type Props = {
  justify?: "start" | "end" | "center";
  disabled?: boolean;
  border?: boolean;
  radius?: number;
};

const props = withDefaults(defineProps<Props>(), {
  justify: "center",
  disabled: false,
  border: true,
  radius: 0,
});
</script>

<style lang="scss" scoped>
@import "am-list";
</style>
