import { useEffect, useState } from 'react'
import { useBrearStore } from '../../stores/brearStore'
import { useFoodStore } from '../../stores/foodStore'
const DemoBearBox = () =>{
    const brear = useBrearStore(state => state.bears)
    const increasePopulation = useBrearStore(state => state.increasePopulation)
    const removeAllBears = useBrearStore(state => state.removeAllBears)

    // 通过food 控制bear背景颜色
    const [bgColor, setBgColor] = useState<"lightgreen"|"lightpink">('lightpink')
    // 通过这个方法会引起重渲染  所以我们要用subscribe
    // const fish = useFoodStore(state => state.fish)
    useEffect(()=>{
        const unsub = useFoodStore.subscribe((state, prevState)=>{
            console.log(state, prevState)
            if(state.fish >= 5){
                setBgColor('lightgreen')
            }else{
                setBgColor('lightpink')
            }
        });
        
        return unsub
        
    },[])
    
    return(
        <div className="box" style={{backgroundColor: bgColor}}>
            <h1>Bear Box</h1>
            <div>{brear}</div>
            {Math.random()}
            <div>
                <button onClick={increasePopulation}>add Brear</button>
                <button onClick={removeAllBears}>remove</button>
            </div>
        </div>
    )
}

export default DemoBearBox