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
} from '@ant-design/icons'
import './itemSidebarStyle.scss';
import Breakpoints from '../../assets/theme/breakpoints'
import MediaQuery from 'react-responsive'

// import Colors from '../../assets/theme/colors'
import './itemSidebarStyle.scss';
export default function ItemSidebarComponent(props) {

  console.log('ItemSidebarComponent/props: ', props)

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

  const ResponsiveContainer = ({children}) => {
    return(
      <>
        <MediaQuery minWidth={Breakpoints.md}>
          <Link to= {props.url} className= "link">
            <animated.div
              className = "container-item-sidebar"
              onMouseEnter = {toggleHover} 
              onMouseLeave = {toggleHover}
              style = {props.animatedWidth}
            >
              {children}
            </animated.div>
          </Link>
        </MediaQuery >
        <MediaQuery maxWidth={Breakpoints.md-1}>
          <Link to= {props.url} className= "link">
            <animated.div
              className = "container-item-sidebar"
              onMouseEnter = {toggleHover} 
              onMouseLeave = {toggleHover}
            >
              {children}
            </animated.div>
          </Link>
        </MediaQuery>
      </>
    )
  }

  const toggleHover = () => {
    //setHover(!hover)
  }

  return (
    <ResponsiveContainer animatedWidth= {props.animatedWidth}>
      <div className = "container-item-sidebar-icon">
        {getIcon(props.namePage)}
      </div>
      <div className = "container-item-sidebar-text">
        <animated.span className = "text" style = { props.animatedFontSize }>{props.namePage}</animated.span>
      </div>
    </ResponsiveContainer>
  )
}

ItemSidebarComponent.defaultProps = {
	path: '/',
};

ItemSidebarComponent.propTypes = {
	namePage: PropTypes.string,
	path: PropTypes.string,
};
