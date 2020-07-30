import React from 'react';
// import PropTypes from 'prop-types';
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import ContentContainer from '../../components/content/ContentContainer';

import './mainStyle.scss';

export default function MainLayout({children}) {
	return (
		<div className='container-main'>
			<SidebarComponent />
			<ContentContainer className='container-content'>
				{children}
			</ContentContainer>
		</div>
	);
}

MainLayout.defaultProps = {};

MainLayout.propTypes = {};
