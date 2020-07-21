import React from 'react';
import XLines from '../../assets/img/x-lines-dimension';
import SpectralLines from '../../assets/img/spectrum-spectral';
import './ServiceViewStyle.scss';

const ServicesView = () => {
  const changeColor = e => {
    let lines = document.getElementsByClassName("spectral-line-1")
    let id = e.target.id
    Array.from(lines).forEach(line => {
      line.style.stroke = `url('#gradient-${id}')`
    })
  }
  return (
    <div className="container">
      <div className="container-dimension">
        <h1>Hello from Services</h1>
        <XLines/>
      </div>
      <div className="container-spectral">
        <div className="lines">
          <SpectralLines height={600}/>
        </div>
        <div className="selectable-color">
          <div id="1" className="color" onMouseEnter={changeColor}></div>
          <div id="2" className="color" onMouseEnter={changeColor}></div>
          <div id="3" className="color" onMouseEnter={changeColor}></div>
          <div id="4" className="color" onMouseEnter={changeColor}></div>
          <div id="5" className="color" onMouseEnter={changeColor}></div>
          <div id="6" className="color" onMouseEnter={changeColor}></div>
        </div>
      </div>
    </div>
  );
}

export default ServicesView;
