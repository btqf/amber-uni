<template>
  <view class="am-grid" :class="[classList]">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 宫格布局，n * n 布局
 * @property {Number} column 列的数量，默认2
 * @property {Boolean} border 是否带边框
 */

type Props = {
  column?: number;
  border?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  column: 3,
  border: false,
});

const classList = () => {
  let list = [];
  if (props.border) {
    list.push("am-grid--border");
  }
  if (props.column) {
    list.push(`am-grid__column--${props.column}`);
  }
  return list.join(" ");
};
</script>

<style lang="scss" scoped>
@import "am-grid";
</style>
