import React from 'react'
import PropTypes from 'prop-types'
import SidebarComponent from '../../components/sidebar/SidebarComponent'
import ContentContainer from '../../components/content/ContentContainer'
import {LeftOutlined} from '@ant-design/icons'

import './homeStyle.scss';

export default function HomeView(props) {

  let buttonTogglePanel = (
    <a onClick = {props.togglePanel} className = "container-toggle-panel">
      <LeftOutlined className = "icon-toggle-panel"/>
    </a>
  )

  return (
    <div className = "container-home">
      <SidebarComponent
        text = {'Hola'}
        width = {props.widthPanel}
        fontSize = {props.fontSizePanel}
        buttonTogglePanel = {buttonTogglePanel}
      />
      <ContentContainer
        text = {'Hola'}
        margin = {props.marginLeftContent}
      />
    </div>
  );
}

HomeView.defaultProps = {

}

HomeView.propTypes = {

}
