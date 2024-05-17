import React, { useEffect, useRef } from 'react'

export default function B4() {
    const inputElement=useRef<HTMLInputElement>(null);
    useEffect(()=>{
            inputElement.current?.focus();      
    },[])
    
  return (
    <div>
        <h4>BÀi 4</h4>
      <input type="text" ref={inputElement} />
    </div>
  )
}
