import { defineConfig } from 'umi'

const REACT_APP_ENV = process.env.REACT_APP_ENV

const BASE_PATH = {
  dev: '/',
  staging: '/web-portal/',
  testing: '/dist/',
  production: '/'
}[REACT_APP_ENV]

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  proxy: {
    '/api/': {
      target: 'http://localhost',
      changeOrigin: true
    }
  },
  antd: {},
  dva: {
    immer: true
  },
  ssr: {
    mode: 'stream'
  },
  publicPath: BASE_PATH,
  base: BASE_PATH,
  favicon: `${BASE_PATH}favicon.ico`,
  locale: false,
  theme: {
    'primary-color': '#b71b12'
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index'
  },
  chunks: process.env.REACT_APP_ENV !== 'dev' ? ['umi'] : ['umi'],
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
            automaticNameDelimiter: '.'
          }
        }
      })
    })
  }
})
