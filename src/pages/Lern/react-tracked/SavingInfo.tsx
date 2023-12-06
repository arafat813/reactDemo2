import { MyContainer } from "./MyContentProvider"


const SavingInfo = () =>{
    const [state, dispatch] = MyContainer.useTracked()

    return(
        <div className="conText">
            <h1>SavingInfo</h1>
            <h3>saving: {state.saving}</h3>
            <button onClick={()=>[
                dispatch({
                    type: 'addSaving',
                    payload: 1000
                })
            ]}>add Saving!</button>
            <div>{Math.random()}</div>
            
        </div>
    )
}

export default SavingInfo