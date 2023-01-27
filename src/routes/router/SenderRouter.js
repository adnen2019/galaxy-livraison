import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function SenderRouter({children,role,...rest}) {
  let content=""
  if(role=="sender"){
    content=children
  }
  else
  content=<Redirect to="/signIn"/>
  
  return (
    <Route {...rest} >{content}</Route>
  )
}


export default SenderRouter
