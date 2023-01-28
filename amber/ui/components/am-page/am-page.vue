<template>
  <view class="am-page" :style="{ padding: parseRpx(props.padding) }">
    <!-- 遮罩层 -->
    <am-loading-mask fullscreen :loading="loader.loading" :text="loader.text"></am-loading-mask>
    <!-- 提示 -->
    <am-toast></am-toast>
    <!-- 确认框 -->
    <am-confirm></am-confirm>
    <!-- 状态栏 -->
    <am-sticky v-if="statusBar"></am-sticky>
    <!-- 内容插槽 -->
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { parseRpx } from "@/amber/utils";
import { useAmber } from "@/amber";
const { router } = useAmber();

type Props = {
  padding?: string | number;
  statusBar?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  padding: 0,
  statusBar: true,
});

// 是否显示导航栏
const statusBar = router.info()?.isCustomNavbar ? props.statusBar : false;

//加载器
const loader = {
  loading: false,
  text: "加载中",
};
</script>

<style scoped></style>
