import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import JSX from '@vitejs/plugin-vue-jsx';
import { NaiveUiResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [JSX(), vue(), Components({ resolvers: [NaiveUiResolver(), ElementPlusResolver()] })],
});
