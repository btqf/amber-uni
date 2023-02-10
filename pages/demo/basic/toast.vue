<template>
  <am-page :padding="20">
    <am-toast ref="Toast"></am-toast>

    <am-card label="基础用法">
      <am-button @tap="open()">默认</am-button>
    </am-card>

    <am-card label="不同位置">
      <am-button @tap="open()">默认</am-button>
      <am-button @tap="open({ position: 'top' })">顶部位置</am-button>
      <am-button @tap="open({ position: 'middle' })">中间位置</am-button>
      <am-button @tap="open({ position: 'bottom' })">底部位置</am-button>
    </am-card>

    <am-card label="不同类型">
      <am-button @tap="open({ type: 'primary' })">主要</am-button>
      <am-button @tap="open({ type: 'success' })">成功</am-button>
      <am-button @tap="open({ type: 'error' })">失败</am-button>
      <am-button @tap="open({ type: 'warning' })">警告</am-button>
      <am-button @tap="open({ type: 'info' })">信息</am-button>
    </am-card>

    <am-card label="其他">
      <am-button @tap="open({ icon: 'cl-icon-good-fill' })">带图标</am-button>
      <am-button
        @tap="
          open({
            image: {
              url: '../static/avatar.png',
              style: {
                height: '120rpx',
                width: '120rpx',
              },
            },
          })
        "
        >带图片</am-button
      >
    </am-card>
  </am-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const Toast = ref<AMToast.Ref>();

function open(data?: any) {
  Toast.value?.open({
    message: "Toast 提示",
    ...data,
  });
}
</script>
