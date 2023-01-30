<template>
  <view class="am-dialog__wrap">
    <am-popup
      v-model="visible"
      direction="center"
      :close-on-click-modal="props.closeOnClickModal"
      :size="props.width"
      :border-radius="16"
      :padding="0"
      @close="onClose"
    >
      <view class="am-dialog">
        <!-- 顶部 -->
        <view v-if="props.title" class="am-dialog__header">
          <text class="am-dialog__title">{{ props.title }}</text>
        </view>
        <!-- 内容 -->
        <view class="am-dialog__content">
          <view class="am-dialog__message">
            <slot></slot>
          </view>
        </view>
        <!-- 底部 -->
        <view v-if="$slot.footer" class="am-dialog__footer">
          <slot name="footer"></slot>
        </view>
        <!-- 关闭按钮 -->
        <view v-if="props.showCloseBtn" class="am-dialog__close" @tap="close">
          <text class="am-icon-close"></text>
        </view>
      </view>
    </am-popup>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 对话框
 * @property {Boolean} modelValue 是否可见
 * @property {String} title 标题
 * @property {String} width 宽度，默认80%
 * @property {Boolean} closeOnClickModal 点击遮罩层是否关闭，默认true
 * @property {Boolean} showCloseBtn 显示关闭按钮
 */
import { ref, watch } from "vue";

type Props = {
  modelValue?: boolean;
  title: string;
  width?: string;
  closeOnClickModal?: boolean;
  showCloseBtn?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  width: "80%",
  closeOnClickModal: true,
  showCloseBtn: true,
});

const visible = ref<boolean>(false);

watch(
  () => props.modelValue,
  (val: boolean) => {
    visible.value = val;
  },
  {
    immediate: true,
  }
);

const open = () => {
  visible.value = true;
  emit("open");
};

const close = () => {
  visible.value = false;
};

const onClose = () => {
  emit("update:modelValue", false);
  emit("close");
};

const emit = defineEmits(["update:modelValue", "close", "open"]);
</script>

<style lang="scss" scoped>
@import "am-dialog";
</style>
