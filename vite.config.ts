import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
const componentDirs = fs.readdirSync('./src/components').filter((dir) => 
  fs.statSync(path.join('./src/components', dir)).isDirectory() && dir.startsWith('UI')
);

const components = componentDirs.reduce<{ [key: string]: string }>((obj, dir) => {
  const componentName = dir;
  obj[componentName] = `src/components/${dir}/${dir}.vue`;
  return obj;
}, {});

components['index'] = 'src/components/index.ts';

export default defineConfig({
  build: {
    target: 'es2022',
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      name: 'is-components-new',
      entry: components,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        entryFileNames: `[name]/[name].js`,
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },

  plugins: [
    vue(),
    svgLoader(),
    dts({
      cleanVueFileName: true,
      entryRoot: './src/components',
      exclude: ['**/*.stories.ts', '**/*.css'],
      outDir: 'dist',
    }),
    {
      name: 'add-css-link',
      apply: 'build',
      writeBundle(option, bundle) {
        const cssFiles = Object.keys(bundle)
          .filter((file) => file.endsWith('.css'))
          .map((file) => file.replace('.css', ''));

        for (const file of cssFiles) {
          const filePath = path.resolve('', 'dist', `${file}.js`);
          if (fs.existsSync(filePath)) {
            const cssImport = `import "./${file}.css";`;
            const data = fs.readFileSync(filePath, { encoding: 'utf8' });
            fs.writeFileSync(filePath, `${cssImport}\n${data}`);
          }
        }
      },
    },

    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/*.scss',
          dest: 'styles',
        },
      ],
    }),
  ],

  optimizeDeps: {
    include: ['vue'],
  },
});