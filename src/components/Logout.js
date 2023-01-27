import React from 'react'
const Logout = () => {
    localStorage.clear();
    sessionStorage.clear()
    window.location.replace('/');
    return (
        <div>
        </div>
    )
}

export default Logout