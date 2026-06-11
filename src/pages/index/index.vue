<template>
<view class="page-layout">
    <view>
        <wd-input v-model="value" type="text" prefix-icon="sound" suffix-icon="send" placeholder="果切地址9.9元起" @input="handleInput" @clickprefixicon="handlePrefixClick" @clicksuffixicon="handleSuffixClick">
            <template #suffix>
                <wd-button size="small" @click="handButtonClick">搜索</wd-button>
            </template>
        </wd-input>
    </view>
    <view>
        /*
        此处为4*4的图片加文字 路由
        */
        <view v-for="(item, index) in navList" :key="index" @click="handleNavClick(item)">
            <image :src="item.icon" mode="aspectFit" />
            <text>{{ item.label }}</text>
        </view>
    </view>

    <wd-swiper :list="swiperList" :autoplay="true" :loop="true" height="300rpx">
        <template #item="{ item }">
            <image :src="item.src" mode="aspectFill" style="width: 100%; height: 100%;" />
        </template>
    </wd-swiper>
</view>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
const value = ref < string > ('')

const handleInput = (event: any) => {
    console.log(event)
}

const handlePrefixClick = (event: any) => {
    console.log(event)
}

const handleSuffixClick = (event: any) => {
    console.log(event)
}

const handButtonClick = (event: any) => {
    console.log(event)
}

const swiperList:string[]=[
  "/static/鲜花水果.jpg",
  "/static/蔬菜豆制品.jpg",
  "/static/肉禽蛋.jpg"
]

interface NavList {
    label: string,
        icon: string,
        path: string
}
const navList: NavList[] = [{
        label: '鲜花水果',
        icon: '/static/鲜花水果.jpg',
        path: 'pages/category/category'
    },
    {
        label: '蔬菜豆制品',
        icon: '/static/蔬菜豆制品.jpg',
        path: 'pages/category/category'
    },
    {
        label: '肉禽蛋',
        icon: '/static/肉禽蛋.jpg',
        path: 'pages/category/category'
    },
    {
        label: '纸品湿巾',
        icon: '/static/纸品湿巾.png',
        path: 'pages/category/category'
    },
    {
        label: '烧烤露营',
        icon: '/static/烧烤露营.jpg',
        path: 'pages/category/category'
    },
    {
        label: '乳品烘培',
        icon: '/static/乳品烘培.jpg',
        path: 'pages/category/category'
    },
    {
        label: '日用清洁',
        icon: '/static/日用清洁.jpg',
        path: 'pages/category/category'
    },
    {
        label: '粮油调味',
        icon: '/static/粮油调味.png',
        path: 'pages/category/category'
    },
    {
        label: '酒水饮料',
        icon: '/static/酒水饮料.jpg',
        path: 'pages/category/category'
    },
    {
        label: '海鲜水产',
        icon: '/static/海鲜水产.jpg',
        path: 'pages/category/category'
    },
    {
        label: '个护美妆',
        icon: '/static/个护美妆.png',
        path: 'pages/category/category'
    },
    {
        label: '冻品面点',
        icon: '/static/冻品面点.jpg',
        path: 'pages/category/category'
    },
    {
        label: '打边炉',
        icon: '/static/打边炉.png',
        path: 'pages/category/category'
    },
    {
        label: '宠物用品',
        icon: '/static/宠物用品.jpeg',
        path: 'pages/category/category'
    },
    {
        label: '冰淇淋',
        icon: '/static/冰淇淋.jpg',
        path: 'pages/category/category'
    },
    {
        label: 'logo',
        icon: '/static/logo.png',
        path: 'pages/category/category'
    },
]
const handleNavClick = (item: NavList) => {
    if (!item.path) return
    uni.navigateTo({
        url: item.path
    })
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* 

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
} */
/* 移动端全屏容器*/
.page-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    /*占满整个视口高度*/
    overflow: hidden;
    /* 防止整体页面滚动*/

    /*顶部区域 - 固定 10%*/
    &__header {
        flex: 0 0 10%;
        /* 不放大、不缩小、基准值10%*/
        background-color: #f8f9fa;
    }

    /* 中间区域 - 自动填充剩余空间 (60%)*/
    &__main {
        flex: 1 1 auto;
        /* 自动占据剩余所有空间*/
        background-color: #ffffff;
        overflow-y: auto;
        /* 内容超出时仅中间区域可滚动*/
    }

    /* 底部区域 - 固定 30%*/
    &__footer {
        flex: 0 0 30%;
        /* 不放大、不缩小、基准值30%*/
        background-color: #e9ecef;
    }
}

.grid-nav {
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 0;

    &__item {
        width: 25%;
        /* 4列：100% ÷ 4 */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 30rpx;
    }

    &__icon {
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 12rpx;
    }

    &__label {
        font-size: 24rpx;
        color: #333;
        text-align: center;
    }
}
</style>
