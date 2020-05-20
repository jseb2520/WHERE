import React from 'react'
import PropTypes from 'prop-types';
import './contentStyle.scss';

export default function ContentComponent(props) {
  return (
    <div className = "container-content">
      {props.text}
    </div>
  )
}

ContentComponent.defaultProps = {
  text: 'Hello World',
}

ContentComponent.propTypes = {
  text : PropTypes.string,
  number : PropTypes.number
}
