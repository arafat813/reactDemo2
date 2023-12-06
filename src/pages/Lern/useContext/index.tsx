import AgeInfo from './age';
import SavingInfo from './SavingInfo';
import MyContentProvider from './MyContentProvider';

const ConText = () =>{
    return(
        <MyContentProvider>
            <div className="conText">
                <h1>useConText</h1>
                <br></br>
                <AgeInfo></AgeInfo>
                <br></br>
                <SavingInfo></SavingInfo>
            </div>
        </MyContentProvider>
    )
}

export default ConText