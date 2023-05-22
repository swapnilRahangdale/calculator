import Button from "../../common/Button";

const CalWrapper = (props) => {

   
    const {allBtArr} = props;

    const allBttton = allBtArr.map((btObj) =>{

        return <Button btName = {btObj.value} btFun = {btObj.btFun}/>;

    });

    console.log("allBttton",allBttton)
  return (
    <div>    
      
      {allBttton}
    </div>
  );
};

export default CalWrapper;
