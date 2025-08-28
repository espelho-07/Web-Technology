import React from "react";
import B from './B.js';

function A({name , setName}) {
    return (
        <>
        <h1>Name is::{name} </h1>
        <B name = {name} setName = {setName}/>
        </>
    )
}

export default A;