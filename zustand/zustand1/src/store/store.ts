import {create} from 'zustand'
import { persist } from 'zustand/middleware'


type CounterStoreState = {
  count: number;
//   count2?: number;
  increment: ()=>void;
  decrement: ()=>void;
  reset: ()=>void;
}

export const useCounterStore = create<CounterStoreState>()(persist(
    (set)=>({
        count:0,
        // count2: 10,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }), 
}),
{  name: 'counter-storage', // localStorage
}   


))
