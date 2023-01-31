<template>
  <view class="am-confirm">
    <am-dialog v-model="visible" :title="conf.title" :width="conf.width" @close="onClose">
      <slot>
        <view class="am-confirm__message">{{ conf.message }}</view>
      </slot>

      <template #footer>
        <view class="am-confirm__footer">
          <view v-if="conf.showCancelButton" class="am-confirm__footer-item">
            <am-button
              plain
              fill
              :height="70"
              :border="false"
              :border-radius="0"
              @tap="close('cancel')"
            >
              {{ conf.cancelButtonText }}</am-button
            >
          </view>

          <view v-if="conf.showConfirmButton" class="am-confirm__footer-item">
            <am-button
              plain
              fill
              :height="70"
              type="text"
              :border="false"
              :loading="loading"
              :border-radius="0"
              @tap="close('confirm')"
            >
              {{ conf.confirmButtonText }}
            </am-button>
          </view>
        </view>
      </template>
    </am-dialog>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 确认框
 */

import { nextTick, ref, reactive } from "vue";

// 是否可见
const visible = ref<boolean>(false);
// 是否已关闭
const closed = ref<boolean>(false);
// 是否加载中
const loading = ref<boolean>(false);
// 配置
const conf = reactive<AMConfirm.Options>({
  title: "",
  message: "",
  width: "500rpx",
  showCancelButton: true,
  cancelButtonText: "取消",
  showConfirmButton: true,
  confirmButtonText: "确认",
  closeOnClickModal: true,
});
// 计时器
let timer: any = null;

const open = (options: AMConfirm.Options) => {
  visible.value = true;
  closed.value = false;
  // 设置选项
  nextTick(() => {
    Object.assign(
      conf,
      {
        width: "500rpx",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        closeOnClickModal: true,
      },
      options
    );
    clearTimeout(timer);
    // 是否定时关闭
    if (conf.duration) {
      timer = setTimeout(() => {
        close("close");
      }, conf.duration);
    }
  });
};

const close = (action: AMConfirm.Action = "close") => {
  // 完成
  function done() {
    if (conf.callback) {
      conf.callback(action);
    }
    nextTick(() => {
      visible.value = false;
      closed.value = true;
      hideLoading();
    });
  }
  // 加载中
  function showLoading() {
    loading.value = true;
  }
  // 关闭加载
  function hideLoading() {
    loading.value = false;
  }
  if (conf.beforeClose) {
    conf.beforeClose(action, { done, showLoading, hideLoading });
  } else {
    done();
  }
};

// 监听关闭
const onClose = (action: AMConfirm.Action) {
  if (!closed.value) {
    close(action);
  }
}
</script>

<style lang="scss" scoped>
@import "am-confirm";
</style>
