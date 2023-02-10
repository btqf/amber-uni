<template>
  <view
    class="am-row"
    :class="[classList]"
    :style="{
      height: parseRpx(height),
      width: parseRpx(width),
      padding: parseRpx(padding),
      margin: margin2,
      borderRadius: parseRpx(borderRadius),
      border,
      backgroundColor,
    }"
    @tap="onTap"
  >
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 行
 * @property {Object} type 类型
 * @property {Object} wrap 是否换行
 * @example <am-col :span="12"></-col>
 */

import { computed } from "vue";
import { parseRpx } from "@/amber/utils";

type Props = {
  type?: string;
  wrap?: boolean;
  backgroundColor?: string;
  gutter?: number;
  justify?: string;
  align?: string;
  height?: string | number;
  width?: string | number;
  padding?: string | number | Array;
  margin?: string | number | Array;
  borderRadius?: string | number;
};

const props = withDefaults(defineProps<Props>(), {
  type: "",
  wrap: false,
  backgroundColor: "#fff",
  gutter: 0,
  justify: "start",
  align: "top",
  height: 0,
  width: 0,
  padding: 0,
  margin: 0,
  borderRadius: 0,
});

const emit = defineEmits(["click", "tap"]);

const classList = computed(() => {
  let list = [];
  if (props.type) {
    list.push(`am-row--${props.type}`);
  }
  if (props.justify) {
    list.push(`is-justify-${props.justify}`);
  }
  if (props.align) {
    list.push(`is-align-${props.align}`);
  }
  if (props.wrap) {
    list.push("is-wrap");
  }
  return list.join(" ");
});
const margin2 = computed(() => {
  return props.margin ? parseRpx(props.margin) : `0 -${props.gutter / 2}rpx`;
});
function onTap(e: any) {
  emit("click", e);
  emit("tap", e);
}
</script>

<style lang="scss" scoped>
@import "am-row";
</style>
