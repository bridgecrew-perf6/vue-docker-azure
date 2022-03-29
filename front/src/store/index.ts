import { inject } from 'vue'
import { defineStore } from 'pinia'

export type RootState = {
  layout: ''
  members: []
}

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () => ({
    layout: 'Default',
    loadingData: false,
    loadingPage: false,
    members: [],
  }),
  actions: {
    changeLayout(layoutTo) {
      this.layout = layoutTo
    },
    changeLoadingpageStatus(status) {
      this.loadingPage = status
    },
    changeLoadingdataStatus(status) {
      // if (!this.loadingData) return
      this.loadingData = status
    },
    async login() {
      try {
        const memInfo = { memid: '', mempw: '' }
        this.test()
        // const users = await this.api({
        //   method: 'get',
        //   url: '/api/member',
        //   params: memInfo,
        //   data: {},
        // })
        // if (users) return true
      } catch (e) {
        console.warn(e)
      }
    },
  },
  getters: {
    doubleCount: (state) => state.members.length * 2,
  },
})
