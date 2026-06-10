<!-- components/TabNavButtons.vue -->
<template>
  <view class="tab-nav-buttons">
    <view
      v-for="(item, index) in navList"
      :key="index"
      class="tab-nav-btn"
      @click="handleClick(item)"
    >
      <image
        class="tab-nav-btn__icon"
        :src="isActive(item.pagePath) ? item.selectedIconPath : item.iconPath"
        mode="aspectFit"
      />
      <text
        class="tab-nav-btn__text"
        :class="{ 'tab-nav-btn__text--active': isActive(item.pagePath) }"
      >
        {{ item.text }}
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app' // 注意：onShow 需从 uni-app 导入
import{ref} from 'vue'
import { TAB_NAV_LIST, type TabNavItem } from '@/constants/nav'

const navList = TAB_NAV_LIST
const currentPath = ref('')

// 获取当前页面路径，用于高亮判断
const updateCurrentPath = () => {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1] as any
  currentPath.value = '/' + currentPage.route
}

onShow(() => {
  updateCurrentPath()
})

const isActive = (path: string) => currentPath.value === path

const handleClick = (item: TabNavItem) => {
  if (isActive(item.pagePath)) return // 已在当前页，不重复跳转
  uni.switchTab({ url: item.pagePath })
}
</script>

<style scoped lang="scss">
.tab-nav-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20rpx 0;
  background-color: #ffffff;
}

.tab-nav-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;

  &__icon {
    width: 48rpx;
    height: 48rpx;
  }

  &__text {
    font-size: 22rpx;
    color: #999999; /* 对应 tabBar.color */

    &--active {
      color: #e8495a; /* 对应 tabBar.selectedColor */
    }
  }
}
</style>