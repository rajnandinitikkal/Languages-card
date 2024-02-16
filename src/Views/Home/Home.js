import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1 class="bestwishes">Best Wishes 🎊</h1>
        <h3 class="bestwishes">Best wishes and Good Luck Messages for All Occasions ...</h3>
      </div>

      <div class="cards">
        <div class="item">
          <h3 class="goodwishes"> How to wish someone "Good Luck"</h3>
          <div class="goodwishesquotes">
            <p>1. "May you get all your wishes but one, so you always have something to strive for."</p>
            <p>2. "The universe works in crazy ways. Your good luck will come in waves, and so does your bad, so you have to take the good with the bad and press forward."</p>
          </div>
        </div>
        <div class="item">
          <h3 class="bestwishes">Best Wishes</h3>
        </div>
      </div>
    </>
  )
}
