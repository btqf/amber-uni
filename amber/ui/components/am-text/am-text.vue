<template>
  <view
    class="am-text"
    :class="[classList]"
    :style="{
      color: props.color,
      textAlign: props.align,
      '-webkit-line-clamp': props.ellipsis,
      margin: parseRpx(props.margin),
      fontSize: parseRpx(props.size),
      letterSpacing: parseRpx(props.letterSpacing),
    }"
    @tap="onTap"
  >
    <!-- 价格 -->
    <text v-if="props.type == 'price'" class="am-text__symbol--price">￥</text>

    <!-- 前缀图标 -->
    <text v-if="props.prefixIcon" class="am-text__prefix-icon" :class="props.prefixIcon"> </text>

    <!-- 文本 -->
    <text class="am-text__value">{{ t.value }}</text>

    <!-- 小数 -->
    <text v-if="type == 'price' && props.precision" class="am-text__precision"
      >.{{ t.precision }}</text
    >

    <!-- 后缀图标 -->
    <text v-if="props.suffixIcon" class="am-text__suffix-icon" :class="props.suffixIcon"> </text>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 文本
 * @property {String, Number} value 内容
 * @property {String} type 类型
 * @property {Boolean} encrypt 手机号是否加密，默认true
 * @property {Boolean} bold 是否粗体
 * @property {Boolean} block 是否块状
 * @property {Number} ellipsis 文本超出省略
 * @property {String} color 字体颜色，默认#444
 * @property {Number, String} size 字体大小，默认24
 * @property {Boolean} precision 价格小数点，默认true
 * @property {Boolean} lineThrough 穿过文本下的一条线
 * @property {Boolean} underline 文本下的一条线
 * @property {String, Number} letterSpacing 文本水平间隔
 * @property {String, Number, Array} margin 外间距
 * @property {String} prefixIcon 前缀图标
 * @property {String} suffixIcon 后缀图标
 * @property {String} copy 是否长按复制
 */

import { computed } from "vue";
import { parseRpx } from "@/amber/utils";

type Props = {
  value: string | number;
  type?: "text" | "price" | "phone";
  encrypt?: boolean;
  bold?: boolean;
  block?: boolean;
  ellipsis?: number;
  color?: string;
  size?: string | number;
  align?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
  precision?: boolean;
  lineThrough?: boolean;
  underline?: boolean;
  letterSpacing?: string | number;
  margin?: string | number | Array;
  prefixIcon?: string;
  suffixIcon?: string;
  copy?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  value: "",
  type: "text",
  encrypt: true,
  bold: false,
  block: false,
  ellipsis: 0,
  color: "#444",
  size: 24,
  align: "left",
  precision: true,
  lineThrough: false,
  underline: false,
  letterSpacing: 0,
  margin: 0,
  prefixIcon: "",
  suffixIcon: "",
  copy: false,
});

const emit = defineEmits(["click", "tap"]);

// 文本
const t = computed(() => {
  if (props.type === "price") {
    const [value, precision = "00"] = parseFloat(String(props.value) || "0")
      .toFixed(2)
      .split(".");
    if (props.precision) {
      return {
        value,
        precision,
      };
    } else {
      return {
        value,
      };
    }
  } else if (props.type == "phone") {
    const str = String(props.value);
    return {
      value: props.encrypt ? str.substr(0, 3) + "****" + str.substr(7) : str,
    };
  } else {
    return {
      value: props.value,
    };
  }
});

// 样式
const classList = computed(() => {
  let list = [];
  if (props.bold) {
    list.push("is-bold");
  }
  if (props.block) {
    list.push("is-block");
  }
  if (props.lineThrough) {
    list.push("is-line-through");
  }
  if (props.underline) {
    list.push("is-underline");
  }
  if (props.ellipsis > 0) {
    list.push("is-ellipsis");
  }
  if (props.type) {
    list.push(`is-${props.type}`);
  }
  if (props.color) {
    list.push(`is-color-${props.color}`);
  }
  if (props.copy) {
    list.push("is-copy");
  }
  return list.join(" ");
});

// 点击
const onTap = (e: any) => {
  emit("click", e);
  emit("tap", e);
};
</script>

<style lang="scss" scoped>
@import "am-text";
</style>
