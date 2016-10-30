import React, {PropTypes} from 'react'
import styles from '../styles'

const MainWrapper = (props) => {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  )
}

export default MainWrapper
