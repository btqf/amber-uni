<template>
  <am-page>
    <view class="page-my">
      <view class="container">
        <am-list :radius="8">
          <am-list-item label="设置" @tap="toPage('/pages/user/set')"></am-list-item>
        </am-list>
      </view>
    </view>
  </am-page>
</template>

<script setup lang="ts">
import { onPullDownRefresh, onShow } from "@dcloudio/uni-app";
import { useAmber, useStore } from "@/amber";

const { router } = useAmber();
const { user } = useStore();

function refresh() {
  // if (!user.token) {
  // 	return router.login();
  // }
  // user.get();
}
function toPage(path: string) {
  router.push(path);
}
onPullDownRefresh(async () => {
  refresh();
  uni.stopPullDownRefresh();
});
onShow(() => {
  refresh();
});
</script>

<style lang="scss" scoped>
.page-my {
  .container {
    padding: 20rpx;
  }
}
</style>
