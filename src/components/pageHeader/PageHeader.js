import React from 'react';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Parallax} from 'react-scroll-parallax';

import styles from './PageHeader.scss';
const PageHeader = (props) => {
	return (
		<Container maxWidth='xl' className={styles.bannerContainer}>
			<Parallax x={[-50, -30]} className={styles.parallax}>
                <img src={props.src} alt='' className={styles.parallaxImage}/>
            </Parallax>
		</Container>
	);
};

export default PageHeader;
