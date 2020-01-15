import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

export default props => {
  return (
    <Tooltip title={props.title} placement="top" onClick={props.droneList.bind(this, props.id)}>
      <div className="station" id={props.id}></div>
    </Tooltip>
  )
}