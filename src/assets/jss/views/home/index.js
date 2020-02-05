import {container, title} from '../../common/index';

const homePageStyle = {
	container: {
		zIndex: '12',
		color: '#FFFFFF',
		...container,
	},
	title: {
		...title,
		display: 'inline-block',
		position: 'relative',
		marginTop: '30px',
		minHeight: '32px',
		color: '#FFFFFF',
		textDecoration: 'none',
	},
	subtitle: {
		fontSize: '1.313rem',
		maxWidth: '500px',
		margin: '10px auto 0',
	},
	main: {
		background: '#FFFFFF',
		position: 'relative',
		zIndex: '3',
	},
	mainRaised: {
		margin: '-60px 30px 0px',
		borderRadius: '6px',
		boxShadow:
			'0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
	},
	cardHeader: {
		width: 'auto',
		textAlign: 'center',
		marginLeft: '20px',
		marginRight: '20px',
		marginTop: '-40px',
		padding: '20px 0',
		marginBottom: '15px',
	},
	cardFooter: {
		paddingTop: '0rem',
		border: '0',
		borderRadius: '6px',
		justifyContent: 'center !important',
	},
};

export default homePageStyle;
