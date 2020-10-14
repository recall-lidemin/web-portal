import { defineConfig } from 'umi'

const REACT_APP_ENV = process.env.REACT_APP_ENV

const BASE_PATH = {
  dev: '/',
  staging: '/web-portal/',
  testing: '/web-portal/',
  production: '/web-portal/'
}[REACT_APP_ENV]

export default defineConfig({
  proxy: {
    '/api/': {
      target: 'http://localhost',
      changeOrigin: true
    }
  },
  ssr: {
    mode: 'stream'
  },
  antd: {},
  nodeModulesTransform: {
    type: 'none'
  },
  publicPath: BASE_PATH,
  base: BASE_PATH,
  favicon: `${BASE_PATH}favicon.png`,
  locale: false,
  extraPostCSSPlugins: [],
  theme: {
    'primary-color': '#b71b12'
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index'
  },
  chunks: process.env.REACT_APP_ENV !== 'dev' ? ['vendors', 'umi'] : ['umi'],
  chainWebpack: function(config, { webpack }) {
    // 当前环境为 发布阶段
    config.when(process.env.REACT_APP_ENV !== 'dev', (config) => {
      console.log('当前环境非开发环境')
      config.merge({
        optimization: {
          minimize: true,
          splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 3,
            automaticNameDelimiter: '.',
            cacheGroups: {
              vendor: {
                name: 'vendors',
                test({ resource }: any) {
                  return /[\\/]node_modules[\\/]/.test(resource)
                },
                priority: 10
              }
            }
          }
        }
      })
    })
    // 当前环境为 开发阶段
    config.when(process.env.REACT_APP_ENV === 'dev', (config) => {
      console.log('当前环境为 开发环境')
    })
  },
  manifest: {
    basePath: '/'
  }
})
