<template>
    <view class="page-layout">

        <wd-input class="page-layout__header" v-model="wdInputValue" type="text" prefix-icon="sound" suffix-icon="send"
            placeholder="果切地址9.9元起" @input="handleInput" @clickprefixicon="handlePrefixClick"
            @clicksuffixicon="handleSuffixClick">
            <template #suffix>
                <wd-button size="small" @click="handButtonClick">搜索</wd-button>
            </template>
        </wd-input>
        <view class="page-layout__main">
            <view class="grid-nav">
                <view class="grid-item" v-for="(item, index) in navList" :key="index" @click="handleNavClick(item)">
                    <image :src="item.icon" />
                    <span>{{ item.label }}</span>
                </view>
            </view>
        </view>
        <wd-swiper class="page-layout__footer" :list="swiperList" :autoplay="true" :loop="true">
            <template #item="{ item }">
                <image :src="item.src" mode="aspectFill" style="width: 100%; height: 100%;" />
            </template>
        </wd-swiper>
    </view>
</template>

<script setup lang="ts">
import {
    ref
} from 'vue'

const wdInputValue = ref<string>('')

const handleInput = (event: any): void => {
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

const swiperList: string[] = [
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
        background-color: #5e5959;
        overflow-y: auto;
        /*边框颜色*/

        /* 内容超出时仅中间区域可滚动*/
    }

    /* 底部区域 - 固定 30%*/
    &__footer {
        flex: 0 0 15%;
        /* 不放大、不缩小、基准值30%*/
        background-color: #e9ecef;
    }
}

.grid-nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:repeat(4,1fr) ; //4 等分
    background-color: aqua;
    gap: 8rpx;
    padding: 10rpx;
    height: 100%;//撑满父容器
}

/* 1. 单个网格项：使用 Flexbox 垂直排列 */
.grid-item {
    display: flex;
    flex-direction: column;
    /* 核心：使子元素垂直堆叠 */
    align-items: center;
    /* 核心：使图文在水平方向上居中 */
    justify-content: center;
    /* 可选：使内容在格子内垂直居中 */
    gap: 8px;
    /* 控制图片与文字之间的间距，比 margin 更简洁 */
}

/* 2. 图片样式：防止图片撑破网格 */
.grid-item image {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%; // 圆形裁剪
    object-fit: cover; //保持覆盖 裁切多余部分
    //display: block;
    object-fit: cover;
    /* 可选：保证图片裁剪效果统一 */
}

/* 3. 文字样式：保证标题居中 */
.grid-item span {
    font-size: 14px;
    text-align: center;
    line-height: 1.2;
    color: red;
}
</style>
