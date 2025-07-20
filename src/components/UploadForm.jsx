import React, { useState } from 'react';
import Header from "./Header";

const UploadForm = () => {

  const [data,setData ] = useState();


  const handleChange =(e)=> {
    setData(e.target.files[0])
  }

    const handleUpload =()=> {
      const formData = new FormData();
      formData.append('file',data)
    fetch("http://localhost:5186/api/Archive/upload",{
      method:"post",
      body:formData
    })
  }

  return (
<>
<Header/>

<div className='flex justify-center items-center m-3'>
<input type="file" onChange={handleChange}/>
<button className="bg-red-500 p-4" onClick={handleUpload}> رفع</button>

</div>

    </>
  );
};

export default UploadForm;