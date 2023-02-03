<template>
  <view class="am-page" :style="{ padding: parseRpx(props.padding) }">
    <!-- 遮罩层 -->
    <am-loading-mask fullscreen :loading="loader.loading" :text="loader.text"></am-loading-mask>
    <!-- 提示 -->
    <am-toast :ref="setRefs('toast')"></am-toast>
    <!-- 确认框 -->
    <am-confirm :ref="setRefs('confirm')"></am-confirm>
    <!-- 状态栏 -->
    <am-sticky v-if="statusBar">
      <am-status-bar></am-status-bar>
    </am-sticky>
    <!-- 内容插槽 -->
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { getCurrentInstance, reactive } from "vue";
import { parseRpx } from "@/amber/utils";
import { useAmber } from "@/amber";

const { refs, setRefs, router } = useAmber();

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
const loader = reactive<any>({
  loading: false,
  text: "加载中",
});

// 组件作用域
const { proxy }: any = getCurrentInstance();

// 显示加载框
const showLoading = (text: string) => {
  loader.loading = true;
  loader.text = text;
};

// 隐藏加载框
const hideLoading = () => {
  loader.loading = false;
};

// 提示框
const showToast = (options: AMToast.Options) => {
  refs.value.toast?.open(options);
};

// 确认框
const showConfirm = (options: AMConfirm.Options) => {
  refs.value.confirm?.open(options);
};

// 提示框
const showTips = (message: string, callback?: () => void) => {
  refs.value.confirm?.open({
    title: "温馨提示",
    message,
    showCancelButton: false,
    callback,
  } as ClConfirm.Options);
};

// 追加方法
proxy.$root.$am_page = {
  showLoading,
  hideLoading,
  showToast,
  showConfirm,
  showTips,
};
</script>

<style scoped></style>
