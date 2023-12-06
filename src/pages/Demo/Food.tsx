import { useFoodStore, addOneFish, removeAllFish, removeOneFish } from '../../stores/foodStore'
const FoodBox = () =>{
    const fish = useFoodStore(state => state.fish)

    // 使用setState 和 getState( getState不会导致重渲染 ， 不是reactive)
    const add5Fish = (()=>{
        useFoodStore.setState(state => ({
            fish: state.fish + 5
        }))
    })
    // const fish = useFoodStore.getState().fish

    return(
        <div className="box">
            <h1>fish Box</h1>
            <div>{fish}</div>
            <div>
                <button onClick={addOneFish}>add Fish</button>
                <button onClick={add5Fish}>add 5 Fish</button>
                <button onClick={removeOneFish}>remove one </button>
                <button onClick={removeAllFish}>remove all </button>
            </div>
        </div>
    )
}

export default FoodBox