import { createContainer } from 'react-tracked';
import { useImmerReducer } from 'use-immer';


const initianState = {
    age: 0,
    saving: 1000
}

type TAction = {
    type: "addAge" | "addSaving",
    payload: number
}

const reducer= (state: typeof initianState, action: TAction) =>{
    switch(action.type){
        case 'addAge':
            state.age += action.payload
            break
        case 'addSaving':
            state.saving -= action.payload
            break
        default:
            break
    }
}

// 在createContainer 中可以直接初始化 但是需要使用hook
const useValue = () =>{
    // 使用useState 数据多了可能要在每个需要的地方不停的写函数来修改， 所以可以使用useReducer
    // return useState({age: 18, saving: 3000})
    return useImmerReducer(reducer, initianState)
}

export const MyContainer = createContainer(useValue)
