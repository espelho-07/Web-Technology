import React from "react";
import D from './D.js';

function C({name , setName}) {
    return (
        <>
        <h1>Name is::{name} </h1>
        <D name = {name} setName = {setName}/>
        </>
    )
}

export default C;