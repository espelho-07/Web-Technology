import React from "react";

function Propstrial(props) {
    function func() {
        alert("Its Function Called u did it")
    }
    return (
        <>
            <div>
                <h1>
                    Trying Props
                </h1>
                <h2>Say Hello To {props.msg}</h2>
                <h2>lucky noo never {props.name}</h2>
                <button onClick={func}>
                    click here for suprise
                </button>
                <button onClick={() => {
                    alert("Its Function Called By Arrrow Function u did it")
                }}>
                    click
                </button>
                {props.isdisplay && <h1>Yaa Its True</h1>}
            </div>
        </>
    )


}

export default Propstrial;