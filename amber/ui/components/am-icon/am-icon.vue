<template>
  <text
    :class="[
      'am-icon',
      props.className || `am-icon-${props.name}`,
      {
        'is-primary': color == 'primary',
      },
    ]"
    :style="{
      fontSize: parseRpx(size),
      color,
    }"
  ></text>
</template>

<script setup lang="ts">
/**
 * @description 字体图标
 * @property {String} name 图标名称
 * @property {String} className 自定义图标名称
 * @property {String, Number} size 图标大小
 * @property {String} color 图标颜色
 */

import { parseRpx } from "@/amber/utils";

type Props = {
  name: string;
  className?: string;
  size?: number;
  color?: string;
};

const props = withDefaults(defineProps<Props>(), {
  size: 30,
});
console.log("arrow-right", props.name);
</script>

<style lang="scss" scoped>
@import "am-icon";
</style>
