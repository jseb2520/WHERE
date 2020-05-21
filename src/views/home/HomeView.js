import React from 'react'
import PropTypes from 'prop-types'
import SidebarComponent from '../../components/sidebar/SidebarComponent'
import ContentContainer from '../../components/content/ContentContainer'
import './homeStyle.scss';

export default function HomeView(props) {

  return (
    <div className = "container-home">
      <SidebarComponent
        text = {'Hola'}
      />
      <ContentContainer
        text = {'Hola'}
      />
    </div>
  );
}

HomeView.defaultProps = {

}

HomeView.propTypes = {

}
