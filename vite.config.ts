import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from 'path';
import Components from '@uni-helper/vite-plugin-uni-components';
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 注意：Components 插件要放在 uni() 插件之前
    Components({
      resolvers: [WotResolver()]
    }), 
    uni()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // ✅ 与 tsconfig 保持一致
    }
  }
});
