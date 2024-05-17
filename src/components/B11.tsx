import React, { useEffect, useState } from 'react'

export default function B11() {
    const [file,setFile]=useState<File|null>(null);
    const [imgUrl,setImgUrl]=useState<string>("");
    //lấy giá trị trong ô input
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {files}=event.target;
        const selectedFiles=files as FileList;
        if(selectedFiles){
            setFile(selectedFiles[0].name);
        }
    }
    useEffect(()=>{
       if(!file){
        return;
       }
       const reader=new FileReader();
       reader.onload=()=>{
        setImgUrl(reader.result as string);
       }
       reader.readAsDataURL(file);
    },[file])
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <img src="" alt="" />
    </div>
  )
}
