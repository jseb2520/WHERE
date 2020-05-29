import React from 'react';
// import PropTypes from 'prop-types';
import {animated} from 'react-spring';
import './sidebarStyle.scss';
import ItemSidebarComponent from '../itemSidebar/ItemSidebarComponent';

export default function SidebarComponent(props) {
	const links = [
		{
			namePage: 'Home',
			path: '/',
		},
		{
			namePage: 'Services',
			path: '/services',
		},
		{
			namePage: 'Products',
			path: '/products',
		},
		{
			namePage: 'Projects',
			path: '/projects',
		},
		{
			namePage: 'About us',
			path: '/about',
		},
	];

	return (
		<animated.div className='container-sidebar' style={{width: props.width}}>
			{props.buttonTogglePanel}
			<div className='container-links'>
				{links.map((link, i) => {
					return (
						<ItemSidebarComponent
							key={i}
							fontSize={props.fontSize}
							namePage={link.namePage}
							icon={link.icon}
							path={link.path}
						/>
					);
				})}
			</div>
		</animated.div>
	);
}

SidebarComponent.defaultProps = {};

SidebarComponent.propTypes = {};
