import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {animated} from 'react-spring'
import {
	HomeOutlined,
	ToolOutlined,
	ShoppingOutlined,
	RocketOutlined,
	TeamOutlined,
} from '@ant-design/icons';

// import Colors from '../../assets/theme/colors'
import './itemSidebarStyle.scss';
export default function ItemSidebarComponent(props) {
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
  }
  return (
    <Link to= {props.url} className= "link">
      <animated.div
        className = "container-item-sidebar"
        onMouseEnter = {toggleHover} 
        onMouseLeave = {toggleHover}
        style= {props.animatedWidth}
      >
        <div className = "container-item-sidebar-icon">
          {getIcon(props.namePage)}
        </div>
        <div className = "container-item-sidebar-text">
          <animated.span className = "text" style = { props.animatedFontSize }>{props.namePage}</animated.span>
        </div>
      </animated.div>
    </Link>
  )
}

ItemSidebarComponent.defaultProps = {
	path: '/',
};

ItemSidebarComponent.propTypes = {
	namePage: PropTypes.string,
	path: PropTypes.string,
};
