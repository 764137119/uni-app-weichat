// constants/nav.ts
export interface TabNavItem {
  pagePath: string;
  iconPath: string;
  selectedIconPath: string;
  text: string;
}

// ✅ 与 pages.json 中 tabBar.list 保持完全一致
export const TAB_NAV_LIST: TabNavItem[] = [
  {
    pagePath: '/pages/index/index',
    iconPath: '/static/tab/home-active.png',
    selectedIconPath: '/static/tab/home-active.png',
    text: '首页',
  },
  {
    pagePath: '/pages/category/category',
    iconPath: '/static/tab/category-active.png',
    selectedIconPath: '/static/tab/category-active.png',
    text: '分类',
  },
  {
    pagePath: '/pages/order/order',
    iconPath: '/static/tab/order-active.png',
    selectedIconPath: '/static/tab/order-active.png',
    text: '订单',
  },
  {
    pagePath: '/pages/mine/mine',
    iconPath: '/static/tab/mine-active.jpg',
    selectedIconPath: '/static/tab/mine-active.jpg',
    text: '我的',
  },
]