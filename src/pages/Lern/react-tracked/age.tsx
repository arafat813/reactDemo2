import { MyContainer } from "./MyContentProvider"

const AgeInfo = () =>{
    const [state, dispatch] = MyContainer.useTracked()

    return(
        <div className="conText">
            <h1>AgeInfo</h1>
            <h3>age: {state.age}</h3>
            <button onClick={()=>{
                dispatch({
                    type: 'addAge',
                    payload: 1
                })
            }}>Happy Birthday!</button>
            <div>{Math.random()}</div>
        </div>
    )
}

export default AgeInfo