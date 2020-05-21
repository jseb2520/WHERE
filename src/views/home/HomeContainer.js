import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types';
import {useSpring, useChain} from 'react-spring'
import HomeView from './HomeView'

export default function HomeContainer(props) {

  const MIN_FONT = 0
  const MAX_FONT = 21
  const MAX_WIDTH_PANEL = 180
  const MIN_WIDTH_PANEL = 50
  const ANIMATE_TEXT_DURATION = 250
  const ANIMATE_PANEL_DURATION = 150

  let [panel, setPanel] = useState(true)
  const animatePanelRef = useRef()
  const animatePanel = useSpring({ 
    config: { duration: ANIMATE_PANEL_DURATION, ease: 'expOut' },
    ref: animatePanelRef,
    width: panel ? MAX_WIDTH_PANEL : MIN_WIDTH_PANEL,
    marginLeft: panel ? MAX_WIDTH_PANEL : MIN_WIDTH_PANEL,
  })
  const animateTextPanelRef = useRef()

  const animateTextPanel = useSpring({
    config: { duration: ANIMATE_TEXT_DURATION, ease: 'expIn' },
    ref: animateTextPanelRef,
    fontSize : panel ? MAX_FONT : MIN_FONT
  })

  useChain(panel ? [animatePanelRef, animateTextPanelRef ]: [animateTextPanelRef, animatePanelRef])
  const togglePanel = () => {
    console.log('panel hided: ', panel)
    setPanel(!panel)
  }

  return (
    <HomeView
      widthPanel = {animatePanel.width}
      marginLeftContent = {animatePanel.marginLeft}
      fontSizePanel = {animateTextPanel.fontSize}
      panel = {panel}
      togglePanel = {togglePanel}
    />
  )
}



