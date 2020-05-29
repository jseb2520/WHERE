import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {animated} from 'react-spring';
import {
	HomeOutlined,
	ToolOutlined,
	ShoppingOutlined,
	RocketOutlined,
	TeamOutlined,
} from '@ant-design/icons';

// import Colors from '../../assets/theme/colors'
import './itemSidebarStyle.scss';

function ItemSidebarComponent(props) {
	const {history} = props;

	// let [hover, setHover] = useState(false)

	const getIcon = (namePage) => {
		let iconComponent;
		switch (namePage) {
			case 'Home': {
				iconComponent = <HomeOutlined className='icon-item-sidebar' />;
				break;
			}
			case 'Services': {
				iconComponent = <ToolOutlined className='icon-item-sidebar' />;
				break;
			}
			case 'Products': {
				iconComponent = <ShoppingOutlined className='icon-item-sidebar' />;
				break;
			}
			case 'Projects': {
				iconComponent = <RocketOutlined className='icon-item-sidebar' />;
				break;
			}
			case 'About us': {
				iconComponent = <TeamOutlined className='icon-item-sidebar' />;
				break;
			}
			default:
				return null;
		}
		return iconComponent;
	};

	const toggleHover = () => {
		//setHover(!hover)
	};
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a
			className='container-item-sidebar'
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			onClick={() => history.push(props.path)}
		>
			<div className='container-item-sidebar-icon'>
				{getIcon(props.namePage)}
			</div>
			<div className='container-item-sidebar-text'>
				<animated.span className='text' style={{fontSize: props.fontSize}}>
					{props.namePage}
				</animated.span>
			</div>
		</a>
	);
}

ItemSidebarComponent.defaultProps = {
	path: '/',
};

ItemSidebarComponent.propTypes = {
	namePage: PropTypes.string,
	path: PropTypes.string,
};

export default withRouter(ItemSidebarComponent);
