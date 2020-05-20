import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Icon, {
  HomeOutlined,
  ToolOutlined,
  ShoppingOutlined,
  RocketOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import './itemSidebarStyle.scss';


export default function ItemSidebarComponent(props) {

  let [hover, setHover] = useState(false)

  const getIcon = (namePage) => {
    let iconComponent
    switch(namePage) {
      case 'Home' : {
        iconComponent = <HomeOutlined style={{ fontSize: '21px', color: hover? "green" : "red" }}/>
        break
      }
      case 'Services' : {
        iconComponent = <ToolOutlined style={{ fontSize: '21px', color: hover? "green" : "red"  }}/>
        break
      }
      case 'Products' : {
        iconComponent = <ShoppingOutlined style={{ fontSize: '21px',color: hover? "green" : "red" }}/>
        break
      }
      case 'Projects' : {
        iconComponent = <RocketOutlined style={{ fontSize: '21px', color: hover? "green" : "red"  }}/>
        break
      }
      case 'About us' : {
        iconComponent = <TeamOutlined style={{ fontSize: '21px', color: hover? "green" : "red"  }}/>
        break
      }
      default : return null
    }
    return iconComponent
  }

  const toggleHover = () => {
    setHover(!hover)
  }
  return (
    <a 
      className = "container-item-sidebar"
      onMouseEnter = {toggleHover} 
      onMouseLeave = {toggleHover} 
    >
      <div className = "container-item-sidebar-icon">
        {getIcon(props.namePage)}
      </div>
      <div className = "container-item-sidebar-text">
        <span className = "text" style = {{color: hover? "green" : "red"  }}>{props.namePage}</span>
      </div>
    </a>
  )
}

ItemSidebarComponent.defaultProps = {
  namePage: 'Hello World',
  icon : '?'
}

ItemSidebarComponent.propTypes = {
  namePage : PropTypes.string,
  icon : PropTypes.string
}
