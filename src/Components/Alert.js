import React from 'react'

function Alert(props) {
    return (
<div style={{height:'40px'}}>
{props.alert && <div className={`alert alert-${props.alert.type} fade show`} style={{backgroundColor:'#4ede9b'}} role="alert">
  <strong>{props.alert.type}</strong>:{props.alert.msg}
</div>}
 </div>
       
    )
}

export default Alert
