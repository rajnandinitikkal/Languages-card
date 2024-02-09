import React from 'react';
import I18n from '../../Views/utils/I18n';
import './Diwali.css';
import Navbar from '../../Views/Navbar/Navbar';

export default function Diwali() {
    return (
      <>
      <Navbar/>
      <div class="Diwaliname">
        <h1>Happy Diwali 🎇🪔</h1>
      </div>
        <div className="main-container">
  
          <h2 id="welmsg">{I18n("welcomeMessage")}</h2>
          <h3 id="greetmsg">{I18n("greetingMessage")}</h3>
          <p id="desmsg">{I18n("diwaliWishes")}</p>
  
        </div>
  
        <div className="main-container">
          <p id="desmsg">{I18n("diwaliMessage")}</p>
        </div>
  
      </>
    )
  }
  
  