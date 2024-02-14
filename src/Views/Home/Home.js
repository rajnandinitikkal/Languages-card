import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';

export default function Home() {
  return (
   <>
   <Navbar/>
   <div>
    <h1 class="bestwishes">Best Wishes 🎊</h1>
    <h3 class="bestwishes">Best wishes and Good Luck Messages for All Occasions ...</h3>
    </div>

    <div class="cards">
      <div class="item">1</div>
      <div class="item">1</div>
    </div>
   </>
  )
}
