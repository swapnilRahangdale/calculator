import Button from "../../common/Button";
import './CalWrapper.css'

const CalWrapper = (props) => {

   
    const {allBtArr, operationArr} = props;

    const allBttton = allBtArr ? allBtArr.map((btObj) =>{
        return <Button key = {btObj.value} btName = {btObj.value} btFun = {btObj.btFun}/>
    }): [];

    const allOperationBt = operationArr ? operationArr.map((btObj) =>{
      return <Button key = {btObj.value} btName = {btObj.value} btFun = {btObj.btFun}/>
  }): [];




    console.log("allBttton",allBttton)
  return (
    <div className = "main-cal">

      <div className = "bt-name">
      {allBttton}
      </div>
      <div className = "op-name">     
       {allOperationBt}
      </div>

    </div>
  );
};

export default CalWrapper;
