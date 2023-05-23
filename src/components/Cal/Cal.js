import {useState} from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {

  const [inputVal1, setInputVal1] = useState(0);
  const [operationValue, setOperationValue] = useState(0);
  const [currentOperation, setCurrentOperation] = useState('');

    const allBtArr = [
        
        {value : 0, btFun: () => {
          
          setInputVal1(preValue => parseInt(preValue.toString() + 0));
        }},

        {value : 1, btFun: () => {
          
          setInputVal1(preValue => parseInt(preValue.toString() + 1));
            
        }},
        {value : 2, btFun: () => {
          
          setInputVal1(preValue =>  parseInt (preValue.toString() + 2));
        }},

        {value : 3, btFun: () => {
          
          setInputVal1(
            (preValue) => parseInt (preValue.toString() + 3));
            
        }},

        {value : 4, btFun: () => {
          
          setInputVal1(preValue => parseInt (preValue.toString() + 4));
             
        }},
        {value : 5, btFun: () => {
          
          setInputVal1(preValue => parseInt (preValue.toString() + 5));
             
        }},

        {value : 6, btFun: () => {
          
          setInputVal1(preValue => parseInt (preValue.toString() + 6));
             
        }},

        {value : 7, btFun: () => {
           
          setInputVal1(preValue => parseInt (preValue.toString() + 7));
        }},

        {value : 8, btFun: () => {
          
          setInputVal1(preValue => parseInt (preValue.toString() + 8));
        }},
        {value : 9, btFun: () => {
          
          setInputVal1(preValue => parseInt (preValue.toString() + 9));
        }},
    ];

    const operationArr = [
      {
        value: '+',
        btFun: () =>{
          setCurrentOperation('+');
          setOperationValue(inputVal1);
          setOperationValue(0);
        }
      }
    ]

  return (
    <div>
      <p>This is calculator.    Enter No. {inputVal1}</p>
        <CalWrapper allBtArr = {allBtArr} operationArr = {operationArr}/>
    </div>
  );
};

export default Cal;
