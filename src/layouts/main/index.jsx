import React, {useState, useRef} from 'react';
// import PropTypes from 'prop-types';
import {useSpring, useChain} from 'react-spring';
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import ContentContainer from '../../components/content/ContentContainer';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

import './mainStyle.scss';

export default function MainLayout({children}) {
	let [panel, setPanel] = useState(true);
	const animatePanelRef = useRef();
	const animatePanel = useSpring({
		config: {duration: 250, ease: 'expIn'},
		ref: animatePanelRef,
		width: panel ? 180 : 42,
		marginLeft: panel ? 180 : 42,
	});
	const animateTextPanelRef = useRef();

	const animateTextPanel = useSpring({
		config: {duration: 300, ease: 'expIn'},
		ref: animateTextPanelRef,
		fontSize: panel ? 21 : 0,
	});

	useChain(
		panel
			? [animatePanelRef, animateTextPanelRef]
			: [animateTextPanelRef, animatePanelRef]
	);
	const togglePanel = () => {
		console.log('panel hided: ', panel);
		setPanel(!panel);
	};

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
