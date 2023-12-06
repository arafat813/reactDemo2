import {create} from 'zustand'

type TBearsStoreState = {
    bears: number;
    increasePopulation: ()=> void;
    removeAllBears: ()=> void;
}

export const useBrearStore = create<TBearsStoreState>()((set) => ({
    bears: 0,
    increasePopulation: ()=>
        set((state)=>({
            bears: state.bears + 1
        })),
    removeAllBears: ()=>{
        set({bears: 0})
    }
}))