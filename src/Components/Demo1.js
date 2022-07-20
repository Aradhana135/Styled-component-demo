import React, { useState } from 'react'
import BoilingTemp from './BoilingTemp'
import styled from "styled-components";
const Demo1 = () => {
//     const scaleName= {
//         c: 'Celsius',
//         f: 'Fahrenheit'
//       };
      const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%); 
    padding: 12px 0; 
    width: 200px; 
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
`
    const[temperature,setTemperature]=useState()
    const [isTemp, setIsTemp] = useState(false)
    const handleChange=(e)=>
    {
      setTemperature(e.target.value)
      setIsTemp(false)
    }
    console.log(temperature);
  return (
    <>
    <label>Enter Temparature in celcius:
    <input type="text" value={temperature} onChange={handleChange}/>
    </label>
    <Button  onClick={()=>{setIsTemp(true)}} >Submit</Button>
    {isTemp && <BoilingTemp celsius={parseFloat(temperature)}/>}
    </>
  )
}

export default Demo1