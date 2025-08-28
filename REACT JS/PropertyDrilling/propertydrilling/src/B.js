import React from "react";
import C from './C.js'

function B({ name, setName }) {
    function name1() {
        setName(document.getElementById('text').value);

    }

    return (
        <>
            <input type="text" id="text"></input>
            <button onClick={name1}>updtae</button>
            <h1>Name is::{name} </h1>
            <C name={name} setName={setName} />
        </>
    )
}

export default B;