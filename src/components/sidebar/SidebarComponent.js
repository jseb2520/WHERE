/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {animated} from 'react-spring'
import './sidebarStyle.scss';
import ItemSidebarComponent from '../itemSidebar/ItemSidebarComponent'
import {useSpring, useChain} from 'react-spring';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

export default function SidebarComponent(props) {
  const MIN_FONT = 0
  const MAX_FONT = 21
  const MAX_WIDTH_PANEL = 180
  const MIN_WIDTH_PANEL = 50
  const ANIMATE_TEXT_DURATION = 250
  const ANIMATE_PANEL_DURATION = 150

  let [panel, setPanel] = useState(true)
  const $animatePanelRef = useRef()
  const animatedWidth= useSpring({ 
    config: { duration: ANIMATE_PANEL_DURATION, ease: 'expOut' },
    ref: $animatePanelRef,
    width: panel ? MAX_WIDTH_PANEL :  MIN_WIDTH_PANEL,
    from: {width : panel ? MIN_WIDTH_PANEL :  MAX_WIDTH_PANEL}
  })


  const $animateTextPanelRef = useRef()
  const animatedFontSize = useSpring({
    config: { duration: ANIMATE_TEXT_DURATION, ease: 'expIn' },
    ref: $animateTextPanelRef,
    fontSize : panel ? MAX_FONT : MIN_FONT,
    from : {fontSize : panel ? MIN_FONT :  MAX_FONT }
  })

  useChain( panel ? 
    [$animatePanelRef, $animateTextPanelRef ] : 
    [$animateTextPanelRef, $animatePanelRef]
  )

  const togglePanel = () => {
    setPanel(!panel)
  }

  const links = [
    {
      namePage : 'Home',
      url: '/'
    },
    {
      namePage : 'Services',
      url: '/services'
    },
    {
      namePage : 'Products',
      url: '/products'
    },
    {
      namePage : 'Projects',
      url: '/projects'
    },
    {
      namePage : 'About us',
      url: '/about'
    }
  ]

  return (
    <animated.div className='container-sidebar'>
      <a onClick={togglePanel} className="container-toggle-panel">
        {panel ? (
          <LeftOutlined className="icon-toggle-panel" />
        ) : (
          <RightOutlined className="icon-toggle-panel" />
        )}
      </a>
      <div className = "container-links">
      {
        links.map((link,i) => {
          return (
            <ItemSidebarComponent
              key={i}
              animatedFontSize = {animatedFontSize}
              animatedWidth = {animatedWidth}
              namePage = {link.namePage}
              url= {link.url}
              icon = {link.icon}
            />
          )
        })
      }
      </div>
    </animated.div>
  )
}

SidebarComponent.defaultProps = {};

SidebarComponent.propTypes = {};
