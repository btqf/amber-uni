<template>
  <am-page :padding="20">
    <am-card label="尺寸">
      <am-icon name="like"></am-icon>
      <am-icon name="like" :size="40"></am-icon>
      <am-icon name="like" :size="50"></am-icon>
    </am-card>

    <am-card label="颜色">
      <am-icon name="like" color="primary"></am-icon>
      <am-icon name="like" color="red"></am-icon>
      <am-icon name="like" color="green"></am-icon>
    </am-card>

    <!-- <am-card label="所有图标">
      <am-grid :column="4">
        <am-grid-item v-for="item in list" :key="item">
          <view class="item" @tap="copy(item)">
            <am-icon :name="item" :size="40"></am-icon>
            <am-text :value="item" align="center" :margin="[10, 0, 0, 0]"></am-text>
          </view>
        </am-grid-item>
      </am-grid>
    </am-card> -->
  </am-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const list = ref<string[]>([
  "share",
  "link",
  "back",
  "enter",
  "top",
  "upgrade",
  "rise",
  "decline",
  "active",
  "shrink",
  "cropper",
  "fullscreen",
  "enlarge",
  "chart-bar",
  "chart-pie",
  "my",
  "eye-open",
  "eye-close",
  "cloud-download",
  "cloud-upload",
  "like",
  "like-fill",
  "arrow-double-left",
  "arrow-double-right",
  "arrow-bottom",
  "arrow-top",
  "arrow-left",
  "arrow-right",
  "set",
  "stop",
  "play",
  "more",
  "back-top",
  "map",
  "keyboard-9",
  "keyboard-26",
  "calendar",
  "customer-service",
  "edit",
  "scan",
  "pay",
  "image",
  "warning-border",
  "time",
  "meh",
  "cry",
  "smile",
  "refresh",
  "help-border",
  "caret-bottom",
  "caret-top",
  "notification",
  "toast-success",
  "toast-waiting",
  "toast-warning",
  "toast-error",
  "plus",
  "plus-border",
  "minus",
  "minus-border",
  "check",
  "check-border",
  "close",
  "close-border",
  "search",
  "clock-fill",
  "favor-fill",
  "help-fill",
  "history-fill",
  "smile-fill",
  "success-fill",
  "map-fill",
  "prompt-fill",
  "meh-fill",
  "cry-fill",
  "delete-fill",
  "amount-fill",
  "wallet-fill",
  "doc-fill",
  "good-fill",
  "camera-fill",
  "mail-fill",
  "bank-card-fill",
  "relay-fill",
  "comment-fill",
  "notification-fill",
]);

function copy(name: string) {
  uni.setClipboardData({
    data: name,
  });
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150rpx;
  padding-top: 20rpx;
}
</style>
