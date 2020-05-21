import React from 'react'
import PropTypes from 'prop-types';
import {animated} from 'react-spring'
import './sidebarStyle.scss';
import ItemSidebarComponent from '../itemSidebar/ItemSidebarComponent'


export default function SidebarComponent(props) {
  console.log(props.width)

  const links = [
    {
      namePage : 'Home',
    },
    {
      namePage : 'Services',
    },
    {
      namePage : 'Products',
    },
    {
      namePage : 'Projects',
    },
    {
      namePage : 'About us',
    }
  ]

  return (
    <animated.div className = "container-sidebar" style={{width: props.width}}>
      {props.buttonTogglePanel}
      <div className = "container-links">
      {
        links.map(link => {
          return (
            <ItemSidebarComponent
              fontSize = {props.fontSize}
              namePage = {link.namePage}
              icon = {link.icon}
            />
          )
        })
      }
      </div>
    </animated.div>
  )
}

SidebarComponent.defaultProps = {
  text: 'Hello World',
}

SidebarComponent.propTypes = {
  text : PropTypes.string,
  number : PropTypes.number
}
