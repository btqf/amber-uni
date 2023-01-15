<template>
	<view class="am-page" :style="{ padding: parseRpx(padding) }">
		<!-- 遮罩层 -->
		<!-- 提示 -->
		<!-- 确认框 -->
		<!-- 状态栏 -->
		<am-sticky></am-sticky>
		<!-- 内容插槽 -->
		<slot></slot>
	</view>
</template>

<script setup lang="ts">
import { parseRpx } from "@/amber/utils";
</script>

<style scoped></style>
