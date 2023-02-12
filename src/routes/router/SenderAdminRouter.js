import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function SenderAdminRouter({children,role,isAdmin,...rest}) {
  let content=""
  if(role=="sender"&&isAdmin){
    content=children
  }
  else
  content=<Redirect to="/signIn"/>
  
  return (
    <Route {...rest} >{content}</Route>
  )
}


export default SenderAdminRouter
