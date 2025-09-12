import React,{useEffect, useState} from "react";

export default function Api(){
    const [mockapi,setMockapi] = useState([]);
    const apiUrl = "https://68c3c64e81ff90c8e619f352.mockapi.io/students"
    useEffect(()=>{
        fetch(apiUrl).then(res => res.json()).then(res => setMockapi(res))
    },[])
    return(
        <>
            {
                mockapi.map(e => (
                    <>
                        <table cellSpacing={100}>
                          <tbody>
                          <tr>
                            <th>
                                {e.id}
                            </th>
                            <td>
                              <img src={e.avatar} style={{height: "100px", width: "100px"}} />
                            </td>
                            <td>
                              {e.name}
                            </td>
                            <td>
                                {e.age}
                            </td>
                            <td>
                                {e.adreess}
                            </td>
                            <td>
                                <button onClick={}>Edit</button>
                            </td>
                            <td>
                                <button onClick={}>Delete</button>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <br />
                    </>
                ))
            }
        </>
    )
}