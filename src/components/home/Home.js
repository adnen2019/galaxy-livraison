import React from 'react'
import { useHistory } from 'react-router-dom'
import img from "../../assets/images/delivery.png"
import logo from "../../assets/images/logo.png"
export default function Home() {
  const history=useHistory()
  return (
    <div className='d-flex justify-content-center mt-5 align-items-center' >
      <div className='text-center' >
      <img height={"180"} src={logo} />
      <br/>
      <button onClick={()=>{history.push("/signIn")}} className='btn btn-primary btn-lg rounded-pill' >Login</button>
      </div>
      <img height={"400"} src={img} />
    </div>
  )
}
