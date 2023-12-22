import React from 'react';
import './Home.css'
import I18n from '../utils/I18n';

function Home() {
  return (
    <div class="main-container">
      <select id="selectmsg"
      defaultValue={localStorage.getItem("language")}
      onChange={(e)=>{
        localStorage.setItem("language", e.target.value);
        window.location.reload();
      }}>
        <option value="mr">Marathi</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
      <h2 id="welmsg">{I18n("welcomeMessage")}</h2>

      <p id="desmsg">{I18n("normalMessage")}</p>

      <h3 id="greetmsg">{I18n("greetingMessage")}</h3>

        <h5 id="endmsg">{I18n("endMessage")}</h5>
    </div>
  )
}

export default Home