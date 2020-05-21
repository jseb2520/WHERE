import React from 'react'
import PropTypes from 'prop-types';
import {animated} from 'react-spring'
import './contentStyle.scss';

export default function ContentComponent(props) {
  return (
    <animated.div className = "container-content" style = {{marginLeft: props.margin}}>
      {props.text}
    </animated.div>
  )
}

ContentComponent.defaultProps = {
  text: 'Hello World',
}

ContentComponent.propTypes = {
  text : PropTypes.string,
  number : PropTypes.number
}
