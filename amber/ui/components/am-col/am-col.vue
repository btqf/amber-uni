<template>
  <view
    class="am-col"
    :class="[classList]"
    :style="{ 'padding-left': padding, 'padding-right': padding }"
    @tap="onTap"
  >
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 布局组件
 * @property {Number} span 栅格占据的列数
 * @property {Number} offset 栅格左侧的间隔格数
 * @property {Number} pull 栅格向右移动格数
 * @property {Number} push 栅格向左移动格数
 * @example <cl-col :span="12"></cl-col>
 */

import { computed } from "vue";
import { useEL } from "../../hook";
const { getParent } = useEL();

type Props = {
  spin?: number;
  offset?: number;
  pull?: number;
  push?: number;
};

const props = withDefaults(defineProps<Props>(), {
  spin: 24,
  offset: 0,
  pull: 0,
  push: 0,
});

const emit = defineEmits(["click", "tap"]);
// am-row
const parent = getParent("am-row", ["gutter"]);

// 间距
const padding = computed(() => parent.value.gutter / 2 + "rpx");

// 样式
const classList = computed(() => {
  let list: string[] = [];
  ["span", "offset", "pull", "push"].forEach((k: any) => {
    let value = props[k];
    if (value || value === 0) {
      list.push(k !== "span" ? `am-col-${k}-${value}` : `cl-col-${value}`);
    }
  });
  return list.join(" ");
});

function onTap(e: any) {
  emit("click", e);
  emit("tap", e);
}
</script>

<style lang="scss" scoped>
@import "am-col";
</style>
