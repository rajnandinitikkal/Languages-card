import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import bestwish1 from './best wishes 1.avif';
import bestwish2 from './best wishes 2.avif';
import bestwish3 from './best wishes 3.avif';
import bestwish4 from './best wishes 4.avif';
// import bestwishesimg from './Best wishes.webp';
import "flickity/css/flickity.css";
const Flickity = require('react-flickity-component');
// import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 2
}
export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1 class="bestwishes">Best Wishes 🎊</h1>
        <h3 class="bestwishes">Best and good wishes on your special moments ...</h3>
      </div>

      <Flickity
      className={'carousel'} 
      elementType={'div'} 
      options={flickityOptions}
      disableImagesLoaded={false} 
      reloadOnUpdate 
      static 
    >
      <img style={{ marginLeft: 5, marginRight: 5 }} src={bestwish1} alt="img1"></img>
      <img style={{ marginLeft: 5, marginRight: 5 }} src={bestwish2} alt="img2"></img>
      <img style={{ marginLeft: 5, marginRight: 5 }} src={bestwish3} alt="img3"></img>
      <img style={{ marginLeft: 5, marginRight: 5 }} src={bestwish4} alt="img4"></img>
      {/* <img style={{ marginLeft: 5, marginRight: 5 }} src={bestwishesimg} alt='bestwishes'></img> */}
    </Flickity>

 
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
