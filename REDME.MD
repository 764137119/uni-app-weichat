## uni-app 跨平台应用搭建顺序

### 1、使用脚手架
### 1.1 uni-app Vue3 + TS + Vite（推荐）
#### 第一步、npx degit dcloudio/uni-preset-vue#vite-ts my-mp-project
#### 第二步、cd my-mp-project
#### 第三步、pnpm install
#### 第四步、pnpm dev:mp-weixin
##### 执行完成第四步会有 说明提示 使用微信开发者工具代开什么目录。
#### 第五步、使用微信开发者工具打开上一步骤输出的制定目录

## 引入Ui组件

## 选型建议
在 uni-app 项目中添加 Wot Design Uni 非常简单，它原生支持 TypeScript 和 Vue3，且完美适配 easycom 自动导入。以下是完整的接入步骤：

### 1. 安装依赖

在项目根目录执行以下命令（推荐使用 pnpm）：

```bash
pnpm add wot-design-uni
# 或使用 npm / yarn
# npm install wot-design-uni
# yarn add wot-design-uni
# pnpm update wot-design-uni
#pnpm add sass@1.78.0 -D
```
完全理解！如果你使用的是 VS Code 等纯代码编辑器，没有安装 HBuilderX，那么我们就**彻底放弃 `uni_modules` 的方式，全程使用 `npm/pnpm` 命令行来配置**。

其实，Wot Design Uni 官方同样支持纯 npm 安装，并且提供了基于 Vite 的自动导入插件，这种方式在现代前端工程化中非常流行。

请严格按照以下 **3 个步骤** 操作，即可让你的新项目完美运行：

### 第一步：安装组件库与 Vite 自动导入插件

在终端中执行以下命令，安装组件库以及 uni-helper 提供的自动引入插件：

```bash
pnpm add wot-design-uni
pnpm add @uni-helper/vite-plugin-uni-components -D
```

### 第二步：配置 Vite 自动解析组件

打开项目根目录下的 `vite.config.ts` 文件，添加 `WotResolver` 配置。这样你在写页面时，直接写 `<wd-button>` 等标签即可，无需手动 import：

```typescript
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Components from '@uni-helper/vite-plugin-uni-components';
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers';

export default defineConfig({
  plugins: [
    // 注意：Components 插件要放在 uni() 插件之前
    Components({
      resolvers: [WotResolver()]
    }), 
    uni()
  ],
});
```

### 第三步：配置 easycom（双保险）

打开 `src/pages.json`，添加 easycom 配置，确保在小程序端也能正确识别组件：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^wd-(.*)": "wot-design-uni/components/wd-$1/wd-$1.vue"
    }
  },
  "pages": [
    // 你的页面配置...
  ]
}
```

---

### 🧹 最后：清理缓存并运行

配置完成后，清理一下之前的编译缓存，重新启动项目：

```bash
rm -rf node_modules/.vite dist/dev/mp-weixin
pnpm run dev:mp-weixin
```

按照这个纯命令行的流程配置，你的新项目就能完美、无报错地跑起 Wot Design Uni 了！如果还有任何报错，随时发给我。