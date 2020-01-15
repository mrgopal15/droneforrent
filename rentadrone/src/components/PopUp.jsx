import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default props => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
      open={props.open}
      message={<span id="message-id"><i className="material-icons">info</i> {props.msg}</span>}
    />
  )
}