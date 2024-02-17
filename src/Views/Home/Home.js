import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import bestwishesimg from './Best wishes.webp';

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1 class="bestwishes">Best Wishes 🎊</h1>
        <h3 class="bestwishes">Best and good wishes on your special moments ...</h3>
      </div>

      <img src={bestwishesimg} alt='bestwishes' id="bestwishesimage"></img>
 
      <h2 class="goodwishes"> How to wish someone "Good Luck 🤞"</h2>
         
          <div class="goodwishesquotes">
            <p>"May you get all your wishes but one, so you always have something to strive for."</p>
          </div>

          <div class="goodwishesquotes">
          <p >"The universe works in crazy ways. Your good luck will come in waves, and so does your bad, so you have to take the good with the bad and press forward."</p>
          </div>
         
          <div class="goodwishesquotes">
          <p>"If we had one wish for you on this special day, it would be: May the best of your past be the worst of your future."</p>
          </div>
           
            <div class="goodwishesquotes">
            <p>"Good luck is a residue of preparation."</p>
            </div>
            
            <div class="goodwishesquotes">
            <p>"Keep your best wishes close to your heart and watch what happens." </p>
            </div>
           
            <div class="goodwishesquotes">
            <p>“May the forces of evil become confused on the way to your house.” </p>
            </div>
            
      
        <div class="birthdaywishes">
          <h2>How to wish someone "Happy Birthday 🎂"</h2>
          
        </div>
  
      </>
  );
}
