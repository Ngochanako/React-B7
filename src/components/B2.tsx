import React, { useEffect, useState } from 'react'

export default function B2() {
    const [cnt,setCnt]=useState<number>(0);
    useEffect(()=>{
        document.title=`Click ${cnt} lần`
    })
    let handle=()=>{
        setCnt(cnt+1);
    }
  return (
    <div>
        <h4>Bài 2</h4>
      <button onClick={handle}>Click {cnt} lần</button>
    </div>
  )
}
