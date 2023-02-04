<template>
  <view class="am-loading-mask_wrap">
    <view
      class="am-loading-mask"
      :class="[classList]"
      :style="{ background: props.background, color: props.color }"
    >
      <view v-show="props.loading" class="am-loading-mask_content">
        <am-loading :color="props.color" :loading-theme="props.oadingTheme"></am-loading>
        <text v-if="text" class="am-loading-mask_text">{{ props.text }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 加载区域
 * @property {String} text 加载时文本，默认不显示
 * @property {Boolean} loading 是否加载中
 * @property {String} loadingTheme 加载图标主题
 * @property {Boolean} fullscreen 是否全屏显示
 * @property {String} color 加载图标颜色
 * @property {String} background 背景颜色，默认rgba(255,255,255,0.7)
 */

import { computed } from "vue";

type Props = {
  text: string;
  loading?: boolean;
  loadingTheme: string;
  fullScreen?: boolean;
  color?: string;
  background?: string;
};

const props = withDefaults(defineProps<Props>(), {
  text: "",
  loading: false,
  fullScreen: false,
  color: "rgba(0, 0, 0, 0.2)",
  background: "rgba(255, 255, 255, 0.7)",
});

const classList = computed(() => {
  const list = [];
  if (props.fullScreen) {
    list.push("is-fullscreen");
  }
  if (props.loading) {
    list.push("is-show");
  }
  return list;
});
</script>

<style lang="scss" scoped>
@import "am-loading-mask";
</style>
