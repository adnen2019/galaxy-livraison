import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function PublicRouter({children,role,...rest}) {
if(role==""){
  return (
    <Route {...rest} >{children}</Route>
    )
  }
  else
  return <Redirect to="/sender/dashboard"/>
}


export default PublicRouter