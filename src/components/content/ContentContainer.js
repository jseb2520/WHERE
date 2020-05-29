import React from 'react';
// import PropTypes from 'prop-types';
import ContentComponent from './ContentComponent';

export default function ContentContainer({children}) {
  //Here all methods and state
	return <ContentComponent>{children}</ContentComponent>;
}

ContentContainer.defaultProps = {};

ContentContainer.propTypes = {};
