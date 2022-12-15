import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import PiniaAutoRefs from 'pinia-auto-refs';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        'pinia',
        {
          '@/helper/pinia-auto-refs': ['useStore'],
        },
      ],
      eslintrc: {
        enabled: true,
      },
    }),
    PiniaAutoRefs(),
    vue(),
  ],
});
