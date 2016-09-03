import React, {PropTypes} from 'react';

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <div>Loading</div>
    : <div>Confirm Battle</div>
}

export default ConfirmBattle;
