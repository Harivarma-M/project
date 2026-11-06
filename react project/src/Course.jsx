import { useState } from "react";
function Course(props){
    const [pus,am]=useState(false)
    const [d,z]=useState(props.age)
    function buys(aa){
        z(d-aa);
        am(true);
    }
    return(
   <div className={props.className}>
    <img src={props.image}></img>
    <p>{d}</p>
    <p>{props.name}</p>
    <button onClick={()=>buys(1)}>buy</button>
    <button onClick={()=>props.delete(props.age)}>Delete</button>
    <p>{pus ? "hello":"worlds"}</p>
   </div>
    );
}
export default Course