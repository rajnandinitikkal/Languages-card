import React from 'react';
import I18n from '../../Views/utils/I18n';
import './Holi.css';
import Navbar from '../../Views/Navbar/Navbar'

export default function Holi() {
    return (
      <>
      <Navbar/>
        <div className="main-container">
  
          <h2 id="welmsg">{I18n("welcomeMessage")}</h2>
  
          <h3 id="greetmsg">{I18n("greetingMessage")}</h3>
  
          <p id="desmsg">{I18n("holiWishes")}</p>
        </div>
  
        <div className="main-container">
  
          <p id="desmsg">{I18n("holiMessage")}</p>
        </div>
  
      </>
    )
  }
  
  