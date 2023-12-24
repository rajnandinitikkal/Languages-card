import React from 'react';
import './MakarSankranti.css'
import I18n from '../../Views/utils/I18n';
import './MakarSankranti-bg.jpg';

export default function MakarSankranti() {
  return (
    <>
      <div class="main-container">

        <h2 id="welmsg">{I18n("welcomeMessage")}</h2>

        <h3 id="greetmsg">{I18n("greetingMessage")}</h3>

        <p id="desmsg">{I18n("normalMessage")}</p>

        {/* <h5 id="endmsg">{I18n("endMessage")}</h5> */}
      </div>

      <div class="main-container">

        <p id="desmsg">{I18n("endMessage")}</p>
      </div>

    </>
  )
}

