<template>
  <view class="am-toast_wrap">
    <template v-for="item in list" :key="item.id">
      <view
        v-if="!item.closed"
        class="am-toast"
        :class="[
          `am-toast--${item.type}`,
          `is-${item.position}`,
          item.visible ? 'is-show' : '',
          item.icon ? 'is-icon' : '',
        ]"
      >
        <view v-if="item.image || item.icon" class="am-toast__icon">
          <image
            v-if="item.image"
            :src="item.image.url"
            :mode="item.image.mode"
            :style="item.image.style"
          />
          <text v-else :class="item.icon"></text>
        </view>

        <slot>
          <text class="am-toast__content">{{ item.message }}</text>
        </slot>
      </view>
    </template>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 吐司提示
 * @property {Boolean} single 是否单个显示，默认false
 * @example <am-toast ref="toast"></am-toast>
 */

import { ref, defineExpose } from "vue";
import { isFunction, last, has, create } from "lodash";

type Props = {
  single?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  single: false,
});

// 列表
const list = ref<any[]>([]);

let id = 0;
const open = (d: AMToast.Options) => {
  const options: any = {
    id: id++,
    visible: false,
    closed: false,
    icon: "",
    image: null,
    message: "",
    duration: 2000,
    type: "default",
    position: "bottom",
  };

  // 合并参数
  if (has(d, "message")) {
    Object.assign(options, d);
  } else {
    options.message = String(d);
  }

  // 是否同时存在多个提示
  if (props.single) {
    list.value = [options];
  } else {
    list.value.push(options);
  }

  // 有图标默认居中显示
  if (options.image || options.icon) {
    options.position = "middle";
  }

  setTimeout(() => {
    create(last(list.value));
  }, 50);
};

// 关闭
const close = (item: any) => {
  // 清空计时器
  clearTimeout(item.timer);
  item.visible = false;
  // 关闭回调
  if (isFunction(item.onClose)) {
    item.onClose();
  }
  setTimeout(() => {
    item.closed = true;
  }, 300);
};

// 创建
const createToast = (item: any) => {
  const { duration } = item || {};
  if (duration > 0) {
    item.visible = true;
    item.timer = setTimeout(() => {
      close(item);
    }, duration);
  }
};

defineExpose({
  open,
  createToast,
});
</script>

<style lang="scss" scoped>
@import "am-toast";
</style>
