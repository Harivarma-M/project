import { useState,useEffect } from "react";
import Course from "./Course";
function List(){
    const [a,aaa]=useState([])
    useEffect(() => {
  fetch("http://localhost:3000/a")
    .then(res => res.json())
    .then(data => aaa(data))
    ;
}, []);
function handle(age){
    const t=a.filter((x)=>x.age!=age);
    aaa(t);
}

const b=a.map((x)=><Course className="one" image={x.image} age={x.age} name={x.name} delete={handle}/>);
return(
    <>
    {b}
    </>
)
}
export default List