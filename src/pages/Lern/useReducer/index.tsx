
import { useReducer } from 'react';

const initianState = {
    name: 'Conny',
    score: 0
}

type TAction ={
    type: 'increment' | 'decrement',
    payload: number
}

const reducer = (state: typeof initianState, action: TAction) =>{
    switch(action.type){
        case 'increment':
            return {...state, score: state.score + 1}
        case 'decrement':
            return {...state, score: state.score - 1}
        default:
            return state
    }
}

const Reducer = () =>{
    const [state, disparch] = useReducer(reducer, initianState)

    return(
        <div className="Reducer">
            <h1>Reducer</h1>
            <br></br>
            <h3>{state.name}</h3>
            <button onClick={() =>{ disparch({type: 'increment', payload: 1}) }}>👍</button>
            <span>&nbsp;&nbsp;{state.score}&nbsp;&nbsp;</span>
            <button style={{transform: 'rotate(180deg)'}} onClick={() =>{ disparch({type: 'decrement', payload: 1}) }}>👍</button>
        </div>
    )
}

export default Reducer