import React, { useEffect, useState } from 'react'

export default function B5() {
    const [today,setTime]=useState<Date>(new Date());
    useEffect(()=>{
        const intervalID=setInterval(()=>{
            setTime(new Date());
        },1000)
        return () => clearInterval(intervalID);
    },[]);
        let hour=today.getHours();
        let minute=today.getMinutes();
        let second=today.getSeconds();
    
  return (
    <div>
      <h4>Bài 5</h4>
      <p>Thòi gian hiện tại: {hour}:{minute}:{second}</p>
    </div>
  )
}

