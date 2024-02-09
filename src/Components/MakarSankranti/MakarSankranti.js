import React from 'react';
import './MakarSankranti.css'
import I18n from '../../Views/utils/I18n';
import './MakarSankranti-bg.jpg';
import Navbar from '../../Views/Navbar/Navbar';

export default function MakarSankranti() {
  return (
    <>
    <Navbar/>
    <div class="makarsankrantiname">
      <h1>Happy MakarSankranti 🪁</h1>
    </div>
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

