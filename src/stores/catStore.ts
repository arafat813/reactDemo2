import {create} from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createSelectors } from '../utils/createSelectors';
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

type TCatStoreState = {
    cats: {
        bigCats: number;
        smallCats: number;
    };
    color: string;
    increaseBigCats: ()=> void;
    increaseSmallCats: ()=> void;
    summary: ()=>void;
}

export const useCatStore = createSelectors(create<TCatStoreState>()
(
    immer(
        devtools(
            persist(
                (set, get) => ({
                    cats: {
                        bigCats: 0,
                        smallCats: 0
                    },
                    color: '',
                    // 不使用immer
                    increaseBigCats: () =>
                        set((state) => ({
                            cats: {
                                ...state.cats,
                                bigCats: state.cats.bigCats + 1
                            },
                        })),
                    // 使用immer
                    increaseSmallCats: () =>
                        set((state) => {
                            state.cats.smallCats++
                        }),
                    summary: ()=>{
                        const total = get().cats.bigCats + get().cats.smallCats
                        return total
                    }
                }),
                {
                    name: 'catStore',
                    // 可选择存到哪里
                    storage: createJSONStorage(()=>localStorage),
                    // 只保存一部分
                    partialize: (state) => ({color: state.color})
                }
            ),
            {
                enabled: true,
                name: 'Cats'
            }
        )
    )
))