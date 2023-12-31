import React from 'react';
import I18n from '../../Views/utils/I18n';
import './Christmas.css';
import Navbar from '../../Views/Navbar/Navbar';

export default function Christmas() {
    return (
      <>
      <Navbar/>
        <div className="main-container">
  
          <h2 id="welmsg">{I18n("welcomeMessage")}</h2>
  
          <h3 id="greetmsg">{I18n("greetingMessage")}</h3>
  
          <p id="desmsg">{I18n("normalMessage")}</p>
        </div>
  
        <div className="main-container">
  
          <p id="desmsg">{I18n("endMessage")}</p>
        </div>
  
      </>
    )
  }
  
  