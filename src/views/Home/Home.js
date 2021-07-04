import React from 'react';
import './home.css';
import Parent from "../../services/CheersParent.js";

const Home = props => {
  return (
    <div>
      <div class="info">
      <h1>Step-Brothers</h1>
    </div>

    <div onmouseover="mouseOver(this)">
      <img id="pic" src="./home_bar.jpg" class="align-center medium" />
    </div>

    <div>
      <h2 class="subtitle" id="slogan">
        Your kinda place — where bottoms up is always the way to go! Cheers!
      </h2>
      <Parent />
      <hr />
    </div>
    <main>
      <article>
        Location
        <p class="description">
          1233 N Eddy St. Suite 168<br />
          South Bend, IN 46617
        </p>
      </article>
      <article>
        Opening Hours
        <p class="description">
          <b>Sun - Thurs:</b> 12pm to 1am<br />
          <b>Fri & Sat:</b> 12pm to 3am
        </p>
      </article>
      <article>
        Contact Information
        <p class="description">
          +1 (574) 890 6672<br />
          enquiries@step-brothers.com
        </p>
      </article>
    </main>
    </div>
  );
};

export default Home;