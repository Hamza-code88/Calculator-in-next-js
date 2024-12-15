'use client';
import { useState } from "react";
import Buttons from "./components/Buttons";
import Output from "./components/Output";

export default function Home() {
 const [currentInput, setCurrentInput] = useState('')
 const [result, setResult] = useState('')


 const handleClick = (value) =>{
  if(value === '='){
    setResult(eval(currentInput))
    setCurrentInput('')
  }else if(value === 'C'){
    setCurrentInput('')
    setResult('')

  }else{
    setCurrentInput(currentInput + value)
  }
 }

  return (
    // es project ma main ne "eval"  k bary ma jana ye js ka ak setbuilt in function ha ye hamry string k value ko be matimatically solve karta ha 

    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-96 bg-white rounded-lg shadow-lg p-6">
        <Output display={currentInput || result}/>
       <div className="grid grid-cols-4 gap-3 mt-4">
        {['1','2','3','+','4','5','6','-','7','8','9','*','0','C','=','/'].map((btnvalue)=> (
          <Buttons key={btnvalue} value={btnvalue} onClick={handleClick} />
             
          
        ))}

       </div>
        
      </div>
    </div>
  );
}
