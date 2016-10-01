import React, {PropTypes} from 'react';

const puke = (obj) => {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <div>Loading</div>
  : <div>Confirm Battle: {puke(props)}</div>
}

export default ConfirmBattle;
