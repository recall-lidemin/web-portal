import { defineConfig } from 'umi'

export default defineConfig({
  proxy: {
    '/api/': {
      target: 'http://10.112.2.12:91',
      changeOrigin: true
    }
  },
  history: { type: 'hash' },
  favicon: `/web-portal/favicon.ico`,
  nodeModulesTransform: {
    type: 'none'
  },
  publicPath: '/web-portal/',
  locale: {
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true
    // baseNavigator: true
  },
  extraPostCSSPlugins: [],
  theme: {
    'primary-color': '#b71b12'
  }
  // analyze: {
  //   analyzerMode: 'server',
  //   analyzerPort: 8888,
  //   openAnalyzer: true,
  //   generateStatsFile: false,
  //   statsFilename: 'stats.json',
  //   logLevel: 'info',
  //   defaultSizes: 'parsed'
  // },
  // chunks: ['antdesigns', 'antv', 'umi'],
  // chainWebpack: function (config, { webpack }) {
  //   config.plugin("replace").use(require("webpack").ContextReplacementPlugin).tap(() => {
  //     return [/moment[/\\]locale$/, /zh-cn/];
  //   });
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         automaticNameDelimiter: '.',
  //         minSize: 30000,
  //         maxSize: 0,
  //         minChunks: 1,
  //         maxAsyncRequests: 10,
  //         maxInitialRequests: 5,
  //         cacheGroups: {
  //           antdesigns: {
  //             name: 'antdesigns',
  //             chunks: 'all',
  //             test: /(@antd|antd|@ant-design)/,
  //             priority: 10,
  //           },
  //           antv: {
  //             name: 'antv',
  //             chunks: 'all',
  //             test: /(@antv|antv)/,
  //             priority: 10,
  //           },
  //         },
  //       }
  //     }
  //   })
  // },
})
