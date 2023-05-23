import Button from "../../common/Button";

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
    <div>    
      
      {allBttton}
      {allOperationBt}
      
    </div>
  );
};

export default CalWrapper;
