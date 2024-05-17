import React, { useEffect, useState } from 'react'

export default function B8() {
    const [month,setMonth]=useState(0);
    const [season,setSeason]=useState('');
    let today=new Date().getMonth()+1;
    useEffect(()=>{
        if(today>=1&&today<=3){
            setSeason('Xuân');
        }else if(today<=6){
            setSeason('HẠ');
        }else if(today<=9){
            setSeason('THU');
        }else{
            setSeason("ĐÔNG")
        }
    },[])
  return (
    <div>
      <p>Bài 8</p>
      <p>Bây giờ là tháng {today}</p>
      <p>Mùa hiện tại:{season}</p>
    </div>
  )
}
