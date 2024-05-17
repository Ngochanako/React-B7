import React, { useEffect, useState } from 'react'

export default function B3() {
    const [active,setActive]=useState<string>('Trang chủ');
    let handle=(e:React.MouseEvent<HTMLLIElement>)=>{
        let value=e.currentTarget.dataset.value;
        if(value){setActive(value)};
    }
  return (
    <div>
        <h4>Bài 3</h4>
      <ul className='B3'>
        <li onClick={handle} style={{color:active==='Trang chủ'?'red':'black'}} data-value='Trang chủ'>Trang chủ</li>
        <li onClick={handle} style={{color:active==='Sản phẩm'?'red':'black'}} data-value='Sản phẩm'>Sản phẩm</li>
        <li onClick={handle} style={{color:active==='Giới thiệu'?'red':'black'}} data-value='Giới thiệu'>Giới thiệu </li>
        <li onClick={handle} style={{color:active==='Liên hệ'?'red':'black'}} data-value='Liên hệ'>Liên hệ</li>
      </ul>
    </div>
  )
}
