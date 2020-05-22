import React from 'react';
import PropTypes from 'prop-types';
import {animated} from 'react-spring';
import './contentStyle.scss';

export default function ContentComponent({margin, children}) {
	return <animated.div className='container-content' style={{marginLeft: margin}}>{children}</animated.div>;
}

ContentComponent.defaultProps = {};

ContentComponent.propTypes = {
	text: PropTypes.string,
	number: PropTypes.number,
};
