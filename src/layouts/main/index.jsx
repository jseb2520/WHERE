import React, {useState, useRef} from 'react';
// import PropTypes from 'prop-types';
import {useSpring, useChain} from 'react-spring';
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import ContentContainer from '../../components/content/ContentContainer';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

import './mainStyle.scss';

export default function MainLayout({children}) {

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

	let buttonTogglePanel = (
		<a onClick={togglePanel} className='container-toggle-panel' href='#pablo'>
			{panel ? (
				<LeftOutlined className='icon-toggle-panel' />
			) : (
				<RightOutlined className='icon-toggle-panel' />
			)}
		</a>
	);

	return (
		<div className='container-main'>
			<SidebarComponent
				width={animatePanel.width}
				fontSize={animateTextPanel.fontSize}
				buttonTogglePanel={buttonTogglePanel}
			/>
			<ContentContainer margin={animatePanel.marginLeft}>
				{children}
			</ContentContainer>
		</div>
	);
}

MainLayout.defaultProps = {};

MainLayout.propTypes = {};
