const {
  override,
  overrideDevServer,
  disableEsLint,
  fixBabelImports,
  addWebpackAlias,
  addWebpackPlugin,
  // addBabelPlugin,
  // addBabelPlugins,
  addBundleVisualizer,
  watchAll,
} = require('customize-cra');

const CompressionWebpackPlugin = require("compression-webpack-plugin"); // gzip压缩
const TerserPlugin = require('terser-webpack-plugin'); // js压缩
const StyleLintPlugin = require('stylelint-webpack-plugin');

const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

// 处理webpack配置
function doWebpackConfig (config) {
  const isProduction = process.env.NODE_ENV === 'production';
  config.optimization.minimize = isProduction;
  config.optimization.minimizer = [
    // 压缩es6
    new TerserPlugin({
      parallel: true, // 并行压缩
      cache: true, // 缓存
      sourceMap: false,
      terserOptions: {
        minify: TerserPlugin.uglifyJsMinify,
        warnings: false,
        ie8: false,
        // extractComments: false,
        format: {
          comments: false, // 删除注释
        },
        compress: {
          warnings: false, // 删除没有用到的代码时不输出警告
          pure_funcs: ['console.log'],
          drop_console: true, // 移除console
          drop_debugger: true, // 移除debugger
        },
      },
    }),
  ];

  if (isProduction) {
    config.plugins = [
      ...config.plugins,
      // 下面是下载的插件的配置
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8
      }),
    ];
  }
  
  return config;
}

module.exports = {
  webpack: override(
    disableEsLint(),
    addWebpackAlias({
      '@': resolve('./src'),
      '@cps': resolve('./src/components'),
    }),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }),
    addWebpackPlugin(
      new StyleLintPlugin({
        files: ['**/*.{css,sss,less,scss,sass}'],
        fix: true
      }),
    ),
    (config) => doWebpackConfig(config),
    process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),
  ),
  devServer: overrideDevServer(
    config => {
      return {
        ...config,
        proxy: {
          '/api': {
            target: process.env.BASE_URL,
            changeOrigin: true,
          },
        }
      }
    },
    watchAll(),
  )
};