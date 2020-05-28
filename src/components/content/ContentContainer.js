import React from 'react';
// import PropTypes from 'prop-types';
import ContentComponent from './ContentComponent';

export default function ContentContainer({margin, children}) {
  //Here all methods and state
	return <ContentComponent margin={margin}>{children}</ContentComponent>;
}

ContentContainer.defaultProps = {};

ContentContainer.propTypes = {};
