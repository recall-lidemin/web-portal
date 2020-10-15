import { Subscription } from 'umi'

export interface GlobalModelType {
  namespace: 'global'
  state: Record<string, any>
  effects: {}
  reducers: {}
  subscriptions: { setup: Subscription }
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    isLogin: false
  },

  effects: {},

  reducers: {},

  subscriptions: {
    setup({ history, dispatch }): void {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(({ pathname, search }): void => {
        // if (typeof window.ga !== 'undefined') {
        //   // window.ga('send', 'pageview', pathname + search);
        // }
      })
    }
  }
}

export default GlobalModel
