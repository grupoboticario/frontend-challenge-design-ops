import produce from 'immer'
import create from 'zustand'

const initialState = {
  open: false,
  locale: {
    identifier: '',
    language: '',
    region: '',
  },
  defaultPage: 1,
  defaultPageSize: 10,
  searchForKeyword: '',
}

export const useStore = create((set: any) => {
  const setState = (fn: any) => set(produce(fn))

  return {
    state: {
      ...initialState,
    },
    actions: {
      toggle() {
        setState(({ state }: any) => {
          state.open = !state.open
        })
      },
      setLocale(locale: string | undefined) {
        setState(({ state }: any) => {
          const language = locale?.split('-')[0].toLowerCase()
          const region = locale?.split('-')[1].toLowerCase()

          state.locale.identifier = locale
          state.locale.language = language
          state.locale.region = region
        })
      },
      setSearchForKeyword(query: string | undefined) {
        setState(({ state }: any) => {
          state.search = query
        })
      },
    },
  }
})
