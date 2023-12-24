import React from 'react';
import I18n from '../../Views/utils/I18n';
import './Christmas.css';

export default function Christmas() {
    return (
      <>
        <div class="main-container">
  
          <h2 id="welmsg">{I18n("welcomeMessage")}</h2>
  
          <h3 id="greetmsg">{I18n("greetingMessage")}</h3>
  
          <p id="desmsg">{I18n("normalMessage")}</p>
        </div>
  
        <div class="main-container">
  
          <p id="desmsg">{I18n("endMessage")}</p>
        </div>
  
      </>
    )
  }
  
  