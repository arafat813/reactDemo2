import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      "@":path.resolve(__dirname,'./src')//配置@别名
    }
  },
  server: {
    proxy: {
      "/api": {//接口可匹配多个域名，为/api时走这个域名
        // 当遇到 /api 路径时，将其转换成 target 的值
        // target: "http://192.168.7.65:8080/api",
        target: "http://101.132.178.171:8080/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),// 将 /api 重写
      },
      // "/api2": {
      //   target: "https://lianghj.top:8888",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ""),
      // },
    },
  }
})
