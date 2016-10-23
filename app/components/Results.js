import React, { PropTypes } from 'react'

const puke = (obj) => {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
};

const Results = (props) => {
  return (
    <div> Results: {puke(props)} </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results
