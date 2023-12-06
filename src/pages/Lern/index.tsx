import ConText from "./useContext"
import ImmerReducer from "./useImmerReducer"
import Reducer from "./useReducer"
import RactTracked from './react-tracked/index'

const Demo = () =>{
    return(
        <div className="box">
            <ConText></ConText>
            <hr></hr>
            <Reducer></Reducer>
            <hr></hr>
            <ImmerReducer></ImmerReducer>
            <hr></hr>
            <RactTracked></RactTracked>
        </div>
    )
}

export default Demo