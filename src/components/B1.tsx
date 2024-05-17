import React, { useEffect, useState } from 'react'

export default function B1() {
  const [text,setText]=useState<string>('');
  useEffect(()=>{
    document.title=text;
  },[text])
  let handle=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value);
  }
  return (
    <div>
        <h4>Bài 1</h4>
      <input type="text" onChange={handle} />
    </div>
  )
}
