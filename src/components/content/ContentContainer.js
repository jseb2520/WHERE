import React from 'react'
import PropTypes from 'prop-types'
import ContentComponent from './ContentComponent'

export default function ContentContainer(props) {
  //Here all methods and state
  return (
    <ContentComponent
      margin = {props.margin}
    />
  )
}

ContentContainer.defaultProps = {

}

ContentContainer.propTypes = {

}