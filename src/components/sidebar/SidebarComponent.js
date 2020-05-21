import React from 'react'
import PropTypes from 'prop-types';
import './sidebarStyle.scss';
import ItemSidebarComponent from '../itemSidebar/ItemSidebarComponent'


export default function SidebarComponent(props) {

  const links = [
    {
      namePage : 'Home',
    },
    {
      namePage : 'Services',
    },
    {
      namePage : 'Projects',
    },
    {
      namePage : 'About us',
    }
  ]

  return (
    <div className = "container-sidebar">
      <div className = "container-links">
      {
        links.map(link => {
          return (
            <ItemSidebarComponent
              namePage = {link.namePage}
              icon = {link.icon}
            />
          )
        })
      }
      </div>
    </div>
  )
}

SidebarComponent.defaultProps = {
  text: 'Hello World',
}

SidebarComponent.propTypes = {
  text : PropTypes.string,
  number : PropTypes.number
}
