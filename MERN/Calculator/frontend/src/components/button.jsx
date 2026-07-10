
 
function Button(props){

    return( <>
       <button className={props.className}
        onClick={() => props.click(props.symbol)}
       > {props.symbol} </button>
    </>)
}


export default Button;