import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Below Is THe Key Difference Of React JS And The Latest And Popular Vite</h1>
    <br></br>
    <br></br>
    <center>
    <table border={2} cellSpacing={10} cellPadding={10} >
      <center>
        <tr>
          <th>Feature</th>
          <th>React JS</th>
          <th>Vite</th>
        </tr>

        <tr>
          <td>Devlopment Server</td>
          <td>Is Slow</td>
          <td>Is Fast</td>
        </tr>

        <tr>
          <td>Hot Module Reload (HMR)</td>
          <td>npm create-react-app NAME</td>
          <td>npm create vite@latest</td>
        </tr>

        <tr>
          <td>Extension</td>
          <td>.js Extension</td>
          <td>.jsx Extension</td>
        </tr>

        <tr>
          <td>Philosophy</td>
          <td>older Approach</td>
          <td>New & Modern Approach</td>
        </tr>

        <tr>
          <td>HMR</td>
          <td> Good But Slow</td>
          <td>Near Instant HMR</td>
        </tr>
      </center>
    </table>
    </center>
    </>
  )
}

export default App
