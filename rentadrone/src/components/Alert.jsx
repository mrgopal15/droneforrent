import React from 'react';

export default props => {
  return (
    <div className={`alert ${props.type}`}>
      <p>{props.msg}</p>
    </div>
  )
}