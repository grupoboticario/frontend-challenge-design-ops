import produce from 'immer'
import create from 'zustand'

const initialState = {
  open: false,
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
    },
  }
})
