import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styles from '../assets/jss/views/home';
import classNames from 'classnames';

import {Card, CardHeader, CardBody, CardFooter} from '../components/Card';

const useStyles = makeStyles(styles);

const Home = () => {
    const classes = useStyles();

    return (
			<div
				className={classNames(
					classes.container,
					classes.main,
					classes.mainRaised
				)}
			>
				<Card>
					<CardHeader color='primary' className={classes.cardHeader}>
						<p>Hello</p>
					</CardHeader>
					<CardBody>
						<p>From</p>
					</CardBody>
					<CardFooter className={classes.cardFooter}>
						<p>Home</p>
					</CardFooter>
				</Card>
			</div>
		);
}

export default Home;