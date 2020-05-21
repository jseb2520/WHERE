import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types';
import {useSpring, useChain} from 'react-spring'
import HomeView from './HomeView'

export default function HomeContainer(props) {

  let [panel, setPanel] = useState(true)
  const animatePanelRef = useRef()
  const animatePanel = useSpring({ 
    config: { duration: 250, ease: 'expIn' },
    ref: animatePanelRef,
    width: panel ? 180 : 42,
    marginLeft: panel ? 180 : 42,
  })
  const animateTextPanelRef = useRef()

  const animateTextPanel = useSpring({
    config: { duration: 300, ease: 'expIn' },
    ref: animateTextPanelRef,
    fontSize : panel ? 21 : 0 
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



