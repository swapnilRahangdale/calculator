
import './Button.css';

const Button = (props) => {

    const {btName,btFun} = props;

    return(
        <div id = "btn">
           <button className ="bt-cal" onClick={btFun}>
           {btName}
           </button>
           
        </div>
    )

};

export default Button;