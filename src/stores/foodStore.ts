import {create} from 'zustand'
import {persist,devtools} from 'zustand/middleware'


const initialFoodValue = {
    fish: 0
}

export const useFoodStore = create<typeof initialFoodValue>()(
    devtools(
        persist(
            ()=> initialFoodValue,
            {
                name: 'Food'
            }
        ),{
            name: 'Food'
        }

    )
)

// 使用getState 和 setState 将action从state中移出来
export const addOneFish = () => 
    useFoodStore.setState ((state) => ({fish: state.fish + 1}));

export const removeOneFish = () => 
    useFoodStore.setState ((state) => ({fish: state.fish - 1}))

export const removeAllFish = () => useFoodStore.setState({fish: 0})