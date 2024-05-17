import React, { useEffect, useState } from 'react'

export default function B9() {
    const [time,setTime]=useState(0);
    useEffect(()=>{
        let interval=setInterval(()=>{
            setTime(prev=>prev+1);
        },1000)
        return ()=>clearInterval(interval);
    },[])
  return (
    <div>
      <p>Bài 9</p>
      <p>Thời gian đã trôi qua:{time}</p>
    </div>
  )
}
