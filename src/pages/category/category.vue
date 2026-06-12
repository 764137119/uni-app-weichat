<template>
    <view class="content">

        <wd-search class="content__search" v-model="searchModelValue" @search="handleSearch" @clear="handleClear"
            @cancel="handleCancel" @change="handleChange" />
        <view class="category">
            <scroll-view class="category__header" scroll-x enable-flex>
                <view class="category__header-inner">
                    <view class="category-tab" v-for="(item, index) in primaryCategories">
                        <image class="category-tab__icon" :src="item.icon" />
                        <text class="category-tab__label">{{ item.name }}</text>
                    </view>
                </view>
            </scroll-view>
            <view class="category__main">
                <scroll-view class="category__sub" scroll-y>
                    <view v-for="item in secondaryCategories">{{ item.name }}</view>
                </scroll-view>
                <scroll-view class="category__products" scroll-y>
                    <view v-for="product in products">商品卡</view>
                </scroll-view>
            </view>
        </view>
    </view>

</template>

<script setup lang="ts">
import { ref } from 'vue'
// 一级分类——接口
interface PrimaryCategory {
    id: number;
    name: string;
    icon: string;        // 图标路径（对应 src/static/ 下的图片）
    children: SecondaryCategory[];
}

// 二级分类——接口
interface SecondaryCategory {
    id: number;
    name: string;
}

// 商品——接口（供右侧网格展示）
interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
}
const primaryCategories: PrimaryCategory[] = [
    { id: 1, name: '蔬菜豆制品', icon: '/static/蔬菜豆制品.jpg', children: [] },
    { id: 2, name: '鲜花水果', icon: '/static/鲜花水果.jpg', children: [] },
    { id: 3, name: '肉禽蛋', icon: '/static/肉禽蛋.jpg', children: [] },
    { id: 4, name: '烧烤露营', icon: '/static/烧烤露营.jpg', children: [] },
    { id: 5, name: '乳品烘培', icon: '/static/乳品烘培.png', children: [] },
    { id: 6, name: '粮油调味', icon: '/static/粮油调味.png', children: [] },
]
const secondaryCategories: SecondaryCategory[] = [
    { id: 1, name: '为你推荐' },
    { id: 2, name: '有机/安心' },
    { id: 3, name: '会员折扣' },
    { id: 4, name: '超低折扣' },
    { id: 5, name: '净菜/沙拉' },
    { id: 6, name: '叶菜/花菜' },
    { id: 7, name: '番茄/茄瓜' },
    { id: 8, name: '土豆/根茎' },
    { id: 9, name: '香菇/菌菇' },
]
const products: Product[] = []

const searchModelValue = ref<string>('')
const handleSearch = (vale: string) => {
    console.log('SEARCH')
}

const handleClear = (vale: string) => {
    console.log('clear')
}

const handleCancel = (vale: string) => {
    console.log('cancel')
}

const handleChange = (vale: string) => {
    console.log('change')
}

</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    /*占满整个视口高度*/
    overflow: hidden;

    //background-color: rgb(58, 58, 118);
    &__search {
        flex: 0 0 10%;
        /* 不放大、不缩小、基准值10%*/
        //background-color: #f8f9fa;
    }

    &__other {
        flex: 0 0 100%;
        //background-color: darkorange;
    }
}

.category {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;

    &__header {
        height: 80px;
        white-space: nowrap;
        
        &-inner {
            display: flex;
            flex-direction: row;
        }
    }

    &__main {
        flex: 1;
        display: flex;
        // background-color: bisque;

    }

    &__sub {
        width: 20%;
        overflow-y: auto;
        //background-color: rgb(44, 71, 71);
    }

    &__products {
        width: 80%;
        overflow-y: auto;
    }
}

.category-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    /* 横向滚动时保持宽度 */
    width: 120rpx;
    padding: 10rpx 0;

    &__icon {
        width: 80rpx;
        height: 80rpx;
        /* 明确宽高，不用百分比 */
        border-radius: 50%; // 圆形裁剪
        object-fit: cover; //保持覆盖 裁切多余部分
        // 或用 width: 80rpx; aspect-ratio: 1;
    }

    &__label {
        font-size: 24rpx;
        margin-top: 8rpx;
    }
}
</style>