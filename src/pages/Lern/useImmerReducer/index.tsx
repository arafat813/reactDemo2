
// npm i immer use-immer
import {useImmerReducer} from 'use-immer'

const initianState = {
    name: 'Conny',
    score: 0
}

type TAction ={
    type: 'increment' | 'decrement',
    payload: number
}


// 里面不能直接使用异步函数  可以通过在外面调用
const reducer = (state: typeof initianState, action: TAction) =>{
    switch(action.type){
        case 'increment':
            state.score += action.payload
            break
        case 'decrement':
            state.score -= action.payload
            break
        default:
            break
    }
    localStorage.setItem("state", JSON.stringify(state))
}

const initialAction = (initState: typeof initianState) =>{
    const res = localStorage.getItem("state")

    if(!!res){
        return JSON.parse(res)
    }

    return initState
}

const ImmerReducer = () =>{
    // useImmerReducer 有第三个参数 可以初始化参数
    const [state, disparch] = useImmerReducer(reducer, initianState, initialAction)

    return(
        <div className="ImmerReducer">
            <h1>ImmerReducer</h1>
            <br></br>
            <h3>{state.name}</h3>
            <button onClick={() =>{ disparch({type: 'increment', payload: 1}) }}>👍</button>
            <span>&nbsp;&nbsp;{state.score}&nbsp;&nbsp;</span>
            <button style={{transform: 'rotate(180deg)'}} onClick={() =>{ disparch({type: 'decrement', payload: 1}) }}>👍</button>
        </div>
    )
}

export default ImmerReducer