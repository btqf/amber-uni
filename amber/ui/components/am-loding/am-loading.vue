<template>
  <view
    class="am-loading"
    :class="[`am-loading--${props.theme}`]"
    :style="{ height: props.size + 'px', width: props.size + 'px' }"
  >
    <!-- 菊花 -->
    <template v-if="props.theme == 'spin'">
      <view
        v-for="(a, i) in 5"
        :key="a"
        class="am-loading__spin"
        :style="{
          transform: `rotate(${i * 45}deg)`,
        }"
      >
        <text v-for="i in 2" :key="i" class="am-loading__spin-item" :style="spin"></text>
      </view>
    </template>

    <!-- 默认 -->
    <view
      v-else
      class="am-loading__inner"
      :style="{
        color,
        borderColor,
        borderWidth,
        'border-bottom': `${spin.width} solid currentColor`,
      }"
    >
    </view>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 加载图标
 * @property {String} color 图标颜色
 * @property {String} borderColor 边框颜色
 * @property {String} borderWidth 边框大小
 * @property {String} theme 主题, 取值为 default || spin
 * @property {Number} size 图标大小
 */

import { computed } from "vue";
import { parseRpx } from "@/amber/utils";

type Props = {
  color: string;
  borderColor?: string;
  borderWidth?: string | number;
  theme?: string;
  size?: number;
};

const props = withDefaults(defineProps<Props>(), {
  borderColor: "rgba(0, 0, 0, 0.1)",
  borderWidth: 4,
  theme: "default",
  size: 25,
});

const rh = computed(() => props.size / 8);
const rw = computed(() => props.size / 20);

const spin = {
  backgroundColor: props.color,
  width: parseRpx(props.borderWidth),
  height: "20%",
};
</script>

<style lang="scss" scoped>
@import "am-loading";
</style>
