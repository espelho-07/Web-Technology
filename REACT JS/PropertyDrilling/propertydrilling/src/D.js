import React from "react";
import E from './E.js';

function D({name , setName}) {
    return (
        <>
        <h1>Name is::{name} </h1>
        <E name = {name} setName = {setName}/>
        </>
    )
}

export default D;