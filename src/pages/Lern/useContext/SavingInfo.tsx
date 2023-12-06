import { useInfoContext } from "./MyContentProvider"


const SavingInfo = () =>{
    const {saving, addSaving} = useInfoContext()
    
    return(
        <div className="conText">
            <h1>SavingInfo</h1>
            <h3>saving: {saving}</h3>
            <button onClick={addSaving}>add Saving!</button>
            <div>{Math.random()}</div>
            
        </div>
    )
}

export default SavingInfo