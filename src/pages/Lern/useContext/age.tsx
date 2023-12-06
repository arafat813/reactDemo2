import { useInfoContext } from "./MyContentProvider"

const AgeInfo = () =>{
    const {age, addAge} = useInfoContext()
    
    return(
        <div className="conText">
            <h1>AgeInfo</h1>
            <h3>age: {age}</h3>
            <button onClick={addAge}>Happy Birthday!</button>
            <div>{Math.random()}</div>
        </div>
    )
}

export default AgeInfo