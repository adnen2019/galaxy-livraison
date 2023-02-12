import React from 'react'
import { useHistory } from 'react-router-dom'
import img from "../../assets/images/delivery.png"
import logo from "../../assets/images/logo.png"
export default function Home() {
  const history=useHistory()
  return (
    <div className='row mt-5 align-items-center' >
      <div className='text-center col-md-6 col-sm-12' >
      <img height={"180"} src={logo} />
      <br/>
      <button onClick={()=>{history.push("/signIn")}} className='btn btn-primary btn-lg rounded-pill' >Login</button>
      </div>
      <div className=' col-md-6 col-sm-12'>
      <img className='w-75' src={img} />

      </div>
    </div>
  )
}
