import { defineStore } from 'pinia'

export const useScope_1_2_store = defineStore({
  id: 'scope_1_2_store',
  state: (): any => ({
    dataSet: {
      table: [],
      scope_1_2_data: [],
      emitBySite_data: [],
    },
    tableData: [],
  }),

  actions: {
    async loadData(payload, sch_year, sch_month) {
      try {
        const scope_1_2_data = [
            {
              item: '2021년',
              scope1: 780,
              scope2: 520,
            },
            {
              item: '1월',
              scope1: 580,
              scope2: 390,
            },
            {
              item: '2월',
              scope1: 220,
              scope2: 770,
            },
            {
              item: '3월',
              scope1: 320,
              scope2: 570,
            },
            {
              item: '4월',
              scope1: 620,
              scope2: 370,
            },
            {
              item: '5월',
              scope1: 820,
              scope2: 870,
            },
            {
              item: '6월',
              scope1: 730,
              scope2: 760,
            },
            {
              item: '7월',
              scope1: 620,
              scope2: 770,
            },
            {
              item: '8월',
              scope1: 320,
              scope2: 670,
            },
            {
              item: '9월',
              scope1: 520,
              scope2: 670,
            },
            {
              item: '10월',
              scope1: 620,
              scope2: 770,
            },
            {
              item: '11월',
              scope1: 820,
              scope2: 570,
            },
            {
              item: '12월',
              scope1: 1120,
              scope2: 370,
            },
          ],
          emitBySite_data = [
            {
              Country: '현대',
              Import: 500,
            },
            {
              Country: '아반떼',
              Export: 100,
            },
            {
              Country: '쏘나타',
              Export: 200,
            },
            {
              Country: '그랜저',
              Export: 200,
            },
            {
              Country: '기아',
              Import: 400,
            },
            {
              Country: 'K3',
              Export: 100,
            },
            {
              Country: 'K5',
              Export: 200,
            },
            {
              Country: 'K7',
              Export: 100,
              col: 'blue',
            },
            {
              Country: '쉐보레',
              Import: 200,
            },
            {
              Country: '말리부',
              Export: 100,
            },
            {
              Country: '기타',
              Export: 100,
            },
          ]

        if (payload) {
          if (this.dataSet[payload].length < eval(payload).length) {
            this.dataSet[payload] = this.dataSet[payload].concat(eval(payload))
          }
        }
      } catch (e) {
        console.warn(e)
      }
    },
  },
})
