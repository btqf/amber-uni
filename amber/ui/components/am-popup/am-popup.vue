<template>
  <view
    v-if="visible"
    :class="[
      'am-popup__wrapper',
      `am-popup__wrapper--${props.direction}`,
      `is-${status ? 'open' : 'close'}`,
    ]"
    :style="{
      zIndex: props.zIndex,
    }"
    @touchmove.stop.prevent
  >
    <!-- 遮罩层 -->
    <view
      v-if="props.modal"
      class="am-popup__modal"
      :style="{
        background: props.modalBackground,
      }"
      @tap="modalClose"
    ></view>

    <!-- 内容 -->
    <view
      class="am-popup"
      :style="{
        height,
        width,
        backgroundColor: props.backgroundColor,
        borderRadius: parseRpx(props.borderRadius),
      }"
    >
      <view class="am-popup__container" :style="{ padding: parseRpx(props.padding) }">
        <slot></slot>
      </view>

      <view v-if="status && props.showCloseBtn" class="am-popup__close" @tap="close">
        <text class="am-icon-close-border"></text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 弹出框
 * @property {Boolean} modelValue 是否可见
 * @property {Function} beforeClose 关闭前钩子函数
 * @property {String} direction 弹出方向，默认center
 * @property {Boolean} closeOnClickModal 点击遮罩层是否关闭，默认true
 * @property {String, Number} size 弹出框大小，默认auto
 * @property {String} backgroundColor 背景颜色，默认#fff
 * @property {String, Number} borderRadius 内容圆角
 * @property {String, Number} padding 内容内间据，默认20
 * @property {Boolean} modal 是否显示遮罩层
 */

import { computed, watch, ref } from "vue";
import { parseRpx } from "@/amber/utils";

type Props = {
  modelValue?: boolean;
  direction?: "center" | "top" | "left" | "right" | "bottom";
  size?: string | number;
  backgroundColor: string;
  borderRadius?: string | number;
  padding?: string | number;
  closeOnclickModal?: boolean;
  modal?: boolean;
  zIndex?: string | number;
  modalBackground?: string | number;
  showCloseBtn?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  direction: "center",
  size: "auto",
  backgroundColor: "#fff",
  borderRadius: 20,
  padding: 20,
  closeOnclickModal: true,
  modal: true,
  zIndex: 9999,
  modalBackground: "rgba(0, 0, 0, 0.4)",
  showCloseBtn: true,
});

const emit = defineEmits(["update:modelValue", "open", "opened", "close", "closed"]);

// 是否可见
const visible = ref<boolean>(false);
// 动画状态
const status = ref<boolean>(false);
// 计时器
let timer: any = null;
// 高度
const height = computed(() => {
  if (props.direction === "right") {
    return "100%";
  } else if (props.direction === "bottom") {
    return props.size;
  } else {
    return "";
  }
});
// 宽度
const width = computed(() => {
  if (props.direction === "center") {
    return props.size;
  } else if (props.direction === "bottom") {
    return "100%";
  } else {
    return "";
  }
});

watch(
  () => props.modelValue,
  (val: boolean) => {
    if (val) {
      open();
    } else {
      close();
    }
  },
  {
    immediate: true,
  }
);

// 打开
const open = () => {
  if (!visible.value) {
    // 显示内容
    visible.value = true;
    emit("update:modelValue", true);
    emit("open");
    clearTimeout(timer);
    timer = setTimeout(() => {
      // 开始动画
      status.value = true;
      // 等待动画结束
      timer = setTimeout(() => {
        emit("opened");
      }, 350);
    }, 50);
  }
};

// 关闭
const close = () => {
  if (status.value) {
    const done = () => {
      // 关闭动画
      status.value = false;
      emit("close");
      clearTimeout(timer);
      timer = setTimeout(() => {
        // 隐藏内容
        visible.value = false;
        emit("update:modelValue", false);
        emit("closed");
      }, 300);
    };
    done();
  }
};

// 遮罩层关闭
const modalClose = () => {
  if (!props.closeOnclickModal) {
    return false;
  }
  close();
};
</script>

<style lang="scss" scoped>
@import "am-popup";
</style>
