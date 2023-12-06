import Bear from './Bear'
import Cats from './Cats'
import CatsController from './CatsController';
import FoodBox from './Food';

const Demo = () =>{
    return(
        <div className="box">
            <h1>Demo</h1>
            <hr></hr>
            <Bear></Bear>
            <hr></hr>
            <Cats></Cats>
            <hr></hr>
            <CatsController></CatsController>
            <hr></hr>
            <FoodBox></FoodBox>

        </div>
    )
}

export default Demo