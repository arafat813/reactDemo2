import { useCatStore } from '../../stores/catStore'
const DemoCatsBox = () =>{
    const smallCats = useCatStore(state => state.cats.smallCats)
    const bigCats = useCatStore(state => state.cats.bigCats)
    const increaseBigCats = useCatStore(state => state.increaseBigCats)
    const increaseSmallCats = useCatStore(state => state.increaseSmallCats)
    const summary = useCatStore(state => state.summary)

    // 上述获取可能会很麻烦  我们可能会想着简化代码
    // 但是这适用于会用到 store里所有方法的方式
    // const {
    //     cats: {
    //         bigCats,
    //         smallCats
    //     },
    //     increaseBigCats,
    //     increaseSmallCats,
    //     summary,
    // } = useCatStore()

    // 如果我们的一个组件只需要用到bigCats  其他组件修改smallcats 此组件也会重新渲染
    // 这会导致不必要的重新渲染,影响性能
    // const {cats:{bigCats}} = useCatStore()

    // 所以我们要使用selector

    return(
        <div className="box">
            <h1>Cat Box</h1>
            <div>big cats: {bigCats}</div>
            <div>small cats: {smallCats}</div>
            <div>
                <button onClick={increaseBigCats}>add bigCats</button>
                <button onClick={increaseSmallCats}>add smallCats</button>
                <button onClick={()=>{
                    console.log(summary())
                }}>summary</button>
            </div>
        </div>
    )
}

export default DemoCatsBox