import React from 'react'
import file from "./exemple.xlsx"
export default function DownloadExample() {
  return (
    <div className='d-flex justify-content-end' >
       <a href={file} download> <button  className='btn btn-primary m-2' >Télécharger exemple</button></a>
    </div>
  )
}
