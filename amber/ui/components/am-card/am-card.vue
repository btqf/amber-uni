<template>
  <view class="am-card">
    <view class="am-card__header">
      <am-text :size="props.fontSize" bold :value="props.label"></am-text>

      <view v-if="props.loading" class="am-card__loading">
        <am-loading :size="18" :loading="props.loading"></am-loading>
      </view>

      <template v-else>
        <view v-if="props.more" class="am-card__more" @tap="toMore">
          <slot name="more">
            <am-text :value="props.moreText" color="#777"></am-text>
            <text class="am-icon-arrow-right"></text>
          </slot>
        </view>
      </template>
    </view>

    <view class="am-card__container">
      <slot></slot>
    </view>

    <view v-if="$slots.footer" class="am-card__footer">
      <slot name="footer"></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
/**
 * @description 卡片
 * @property {String} label 标签内容
 * @property {Boolean} loading 是否加载中
 * @property {Number} fontSize 字体大小
 * @property {Boolean} more 是否显示查看更多
 * @property {String} moreText 更多的文本内容,默认"查看更多"
 * @event {Function} more 点击更多时触发
 */

type Props = {
  label: string;
  loading?: boolean;
  fontSize?: number;
  more?: boolean;
  moreText?: string;
};

const props = withDefaults(defineProps<Props>(), {
  label: "",
  loading: false,
  fontSize: 28,
  more: false,
  moreText: "查看更多",
});

const emit = defineEmits(["more"]);

const toMore = () => {
  emit("more");
};
</script>

<style lang="scss" scoped>
@import "am-card";
</style>
