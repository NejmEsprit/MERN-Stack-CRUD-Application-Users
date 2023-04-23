import React from 'react'

function Alert({message, show}) {
  return (
    <div>
    <div class="alert alert-info" role="alert" style={{display:show ?"block": "none"}}>
      {message}
    </div>
    </div>
  )
}

export default Alert