import AgeInfo from './age';
import SavingInfo from './SavingInfo';
import { MyContainer } from './MyContentProvider';

const RactTracked = () =>{
    return(
        <MyContainer.Provider>
            <div className="conText">
                <h1>react-Tracked</h1>
                <br></br>
                <AgeInfo></AgeInfo>
                <br></br>
                <SavingInfo></SavingInfo>
            </div>
        </MyContainer.Provider>
    )
}

export default RactTracked