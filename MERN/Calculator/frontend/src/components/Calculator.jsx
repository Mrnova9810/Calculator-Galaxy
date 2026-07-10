import { useState } from "react";
import Display from "./Display";
import Button from "./button";
import Calculate from "../utils/Calculate"



function Calculator(){
    const [expression, setExpression] = useState("");

    function handleClick(symbol){
         if(symbol == "="){
            // calculate value
            setExpression( prev => Calculate(prev));
        
        }else if(symbol == "C"){ // clear
              setExpression("");
        }else if(symbol == "⟵"){
            setExpression(prev => prev.substring(0,prev.length-1));
        
        }
        else if(symbol == "--"){
             setExpression(prev => prev + "-");
        }else{
            setExpression(prev => prev + symbol);
        }
    }
   
    return( <>
        <div className="calculator">
                <p className="p1"> calculator_01 </p>
                <Display expression = {expression}> </Display>
                
                <div className="allRows">

                    <Button className ="number" symbol="7"  click ={handleClick}></Button>
                    <Button className ="number" symbol="8" click ={handleClick}></Button>
                    <Button className ="number" symbol="9" click ={handleClick}></Button>
                    <Button className="operators" symbol="%" click ={handleClick}></Button>
                    <Button className="operators" symbol="⟵" click ={handleClick}></Button>


                    <Button className ="number"  symbol="4" click ={handleClick}></Button>
                    <Button className ="number"  symbol="5" click ={handleClick}></Button>
                    <Button className ="number"  symbol="6" click ={handleClick}></Button>
                    <Button className="operators" symbol="*" click ={handleClick}></Button>
                    <Button className="operators" symbol="/" click ={handleClick}></Button>

                    <Button className ="number" symbol="1" click ={handleClick}></Button>
                    <Button className ="number" symbol="2" click ={handleClick}></Button>
                    <Button className ="number" symbol="3" click ={handleClick}></Button>
                    <Button className="operators" symbol="--" click ={handleClick}></Button>
                    <Button className="equal" symbol="=" click ={handleClick}></Button>

                    <Button className ="clear" symbol ="C" click ={handleClick}></Button>
                    <Button className ="number" symbol="0" click ={handleClick}></Button>
                    <Button className = "number" symbol="." click ={handleClick}></Button>
                    <Button className="operators" symbol="+" click ={handleClick}></Button>
                  
                </div>
        </div>
    </>)
}





export default Calculator;
