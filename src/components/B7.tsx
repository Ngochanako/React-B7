import React, { useEffect, useRef, useState } from 'react'

export default function B7() {
    const [count,setCount]=useState(0);
    const prevCount=useRef(0);
    useEffect(()=>{
        prevCount.current=count;
    },[count])
    const change=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <p>Bài 7</p>
      <p>Giá trị trước:{prevCount.current}</p>
      <p>Giá trị hiện tại:{count}</p>
      <button onClick={change}>Tăng</button>
    </div>
  )
}
