<template>
  <button
    class="am-button"
    :class="[
      `am-button--${type}`,
      `am-button--${size}`,
      {
        'is-round': round,
        'is-shadow': shadow,
        'is-loading': loading,
        'is-loading-mask': loadingMask,
        'is-plain': plain,
        'is-fill': fill,
        'is-disabled': disabled,
        'is-border': border,
        'is-bold': bold,
      },
    ]"
    :style="{
      color,
      backgroundColor,
      height: parseRpx(height),
      width: parseRpx(width),
      fontSize: parseRpx(fontSize),
      borderRadius: parseRpx(borderRadius),
      margin: parseRpx(margin),
    }"
    :size="size"
    :type="type"
    :disabled="disabled"
    :form-type="formType"
    :open-type="openType"
    :hover-class="hoverClass"
    :hover-start-time="hoverStartTime"
    :hover-stay-time="hoverStayTime"
    :app-parameter="appParameter"
    :hover-stop-propagation="hoverStopPropagation"
    :lang="lang"
    :session-form="sessionForm"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :show-message-card="showMessageCard"
    @getphonenumber="getPhoneNumber"
    @getuserinfo="getUserInfo"
    @error="error"
    @opensetting="openSetting"
    @launchapp="launchApp"
    @tap.stop="tap"
  >
    <!-- 加载框 -->
    <view class="am-button__loading">
      <am-loading
        v-if="loading"
        :size="16"
        :color="type ? '#fff' : ''"
        :theme="loadingTheme"
      ></am-loading>

      <text v-if="loadingText && loadingMask" class="am-button__loading-text">{{
        loadingText
      }}</text>
    </view>

    <!-- 图标 -->
    <view v-if="icon" class="am-button__icon">
      <image v-if="isImg" :src="icon" mode="aspectFit" />
      <text v-else :class="[icon]"></text>
    </view>

    <!-- 本文 -->
    <view class="am-button__text" :style="{ color }">
      <slot></slot>
    </view>
  </button>
</template>

<script setup lang="ts">
/**
 * @description 按钮
 * @property {String} size 按钮大小
 * @property {String} type 按钮类型
 * @property {Boolean} plain 是否镂空
 * @property {Boolean} disabled 是否禁用
 * @property {Boolean} loading 是否加载中
 * @property {String} loadingTheme 加载图标主题
 * @property {String} loadingMask 加载是否遮罩层模式
 * @property {String} loadingText 加载文案
 * @property {Boolean} round 是否圆角
 * @property {Boolean} shadow 是否阴影
 * @property {String} icon 左侧图标
 * @property {Boolean} fill 是否水平填充
 * @property {Number} height 高度
 * @property {Number} width 宽度
 * @property {String} color 颜色
 * @property {String} backgroundColor 背景颜色
 * @property {Number} fontSize 字体大小
 */

import { computed } from "vue";
import { parseRpx } from "@/amber/utils";

type Props = {
  size?: string;
  type?: "button" | "submit" | "reset";
  plain?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingTheme?: "default" | "spin";
  loadingMask?: boolean;
  loadingText?: string;
  round?: boolean;
  border?: boolean;
  borderRadius?: string | number;
  bold?: boolean;
  margin?: string | number | Array;
  shadow?: boolean;
  icon?: string;
  fill?: string;
  height?: number;
  width?: number;
  color?: string;
  backgroundColor: string;
  fontSize?: number;
  formType?: string;
  openType?: string;
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  appParameter?: string;
  hoverStopPropagation?: boolean;
  lang?: string;
  appParameter?: string;
  sessionForm?: String;
  sendMessageTitle?: string;
  sendMessagePath?: string;
  sendMessageImg?: string;
  showMessageCard?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  loadingTheme: "default",
  border: true,
  borderRadius: 10,
  bold: false,
  height: 66,
  fontSize: 26,
  hoverClass: "button-hover",
  hoverStartTime: 20,
  hoverStayTime: 70,
  lang: "en",
  hoverStopPropagation: false,
});

const isImg = computed(() => props.icon?.includes("/"));

const emit = defineEmits([
  "click",
  "tap",
  "getphonenumber",
  "getuserinfo",
  "error",
  "opensetting",
  "launchapp",
]);

const getPhoneNumber = (e: any) => {
  emit("getPhoneNumber", e);
};

const getUserInfo = (e: any) => {
  emit("getuserinfo", e);
};

const error = (e: any) => {
  emit("error", e);
};

const openSetting = (e: any) => {
  emit("opensetting", e);
};

const lanchApp = (e: any) => {
  emit("launchapp", e);
};

const tap = (e: any) => {
  if (!props.disabled && !props.loading) {
    emit("click", e);
    emit("tap", e);
  }
};
</script>

<style lang="scss" scoped>
@import "am-button";
</style>
