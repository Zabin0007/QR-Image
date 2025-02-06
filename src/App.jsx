
import { useState } from 'react'
import image from '../public/chair.jpg'
function App() {

  const[result,setResult]=useState(6)

  return (
    <>
      <center>
        <h3>Find This...!</h3>
        <img src={image} width={'300px'} height={'auto'} alt="" />
        <br />
        <h2>{result}</h2>
      </center>
    </>
  )
}

export default App
