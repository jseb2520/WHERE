import React, {useState, useRef} from 'react';
// import PropTypes from 'prop-types';
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import ContentContainer from '../../components/content/ContentContainer';

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
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a onClick={togglePanel} className='container-toggle-panel'>
			{panel ? (
				<LeftOutlined className='icon-toggle-panel' />
			) : (
				<RightOutlined className='icon-toggle-panel' />
			)}
		</a>
	);

	return (
		<div className="container-main">
      <SidebarComponent/>
			<ContentContainer className= "container-content">
				{children}
			</ContentContainer>
		</div>                                
	);
}

MainLayout.defaultProps = {};

MainLayout.propTypes = {};
