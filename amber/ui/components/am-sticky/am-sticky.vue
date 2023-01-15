<template>
	<view
		class="am-sticky"
		:class="[{ 'is-flex': props.isFlex }]"
		:style="{ zIndex, top: stickyTop }"
	>
		<slot></slot>
	</view>
</template>

<script setup lang="ts">
/**
 * @description 吸顶
 * @property {Number} zIndex 层级
 * @property {String, Number} top 距离顶部高度
 * @property {Boolean} isFlex 是否为盒子模型
 * * @property {Number} stickyTop 吸顶高度
 */
import { isNumber } from "lodash";
import { computed } from "vue";
import { useAmber } from "@/amber";

type Props = {
	zIndex?: number;
	top?: number | string;
	isFlex?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
	zIndex: 999,
	top: 0,
	isFlex: false,
});

const { statusBarHeight } = uni.getSystemInfoSync();

const { router } = useAmber();

const stickyTop = computed(() => {
	// 状态栏高度
	const top1 = `${statusBarHeight}px`;

	// 标题栏高度
	// #ifdef H5
	const top2 = "44px";
	// #endif
	// #ifndef H5
	const top2 = "0px";
	// #endif

	// 自定义高度
	const top = isNumber(props.top) ? props.top + "rpx" : props.top;

	// 计算后距离顶部高度
	const arr = [top, ...(router.info()?.isCustomNavbar ? [top1] : [top2])];
	return `calc(${arr.join(" + ")})`;
});
</script>

<style scoped></style>
