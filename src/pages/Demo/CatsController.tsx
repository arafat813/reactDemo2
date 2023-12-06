import { useCatStore } from '../../stores/catStore'
import {shallow} from 'zustand/shallow'
const CatsController = () =>{
    // selecttor导入
    // const increaseBigCats = useCatStore.use.increaseBigCats()
    // const increaseSmallCats = useCatStore.use.increaseSmallCats()
    // 统一导入 第一种
    // const {increaseBigCats, increaseSmallCats} = useCatStore(
    //     (state) => ({
    //         increaseBigCats: state.increaseBigCats,
    //         increaseSmallCats: state.increaseSmallCats,
    //     }),
    //     // 去判断第一层object是否相等 ，  不相等就重新渲染， 相等就不需要渲染  所以要加shallow
    //     shallow
    // )
    // 统一导入 第二种
    const [increaseBigCats, increaseSmallCats] = useCatStore(
        (state) => [state.increaseBigCats, state.increaseSmallCats],
        // 去判断第一层object是否相等 ，  不相等就重新渲染， 相等就不需要渲染  所以要加shallow
        shallow
    )

    return(
        <div className="box">
            <h1>CatsController</h1>
            <p>{Math.random()}</p>
            <div>
                <button onClick={increaseBigCats}>increaseBigCats</button>
                <button onClick={increaseSmallCats}>increaseSmallCats</button>
            </div>
        </div>
    )
}

export default CatsController