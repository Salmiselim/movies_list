import React from 'react'

import { useNavigate } from 'react-router-dom';
function NotFound() {
    const navigate=useNavigate()
  return (
    <div>oups! something went wrong 
        <button onClick={()=>navigate('/')}>back home</button>
    </div>
  )
}

export default NotFound