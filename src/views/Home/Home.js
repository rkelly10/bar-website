import React from 'react';
import './home.css';
import FeedbackList from '../../components/Main/FeedbackList';
import Parent from "../../services/CheersParent.js";
import bar from './home_bar.jpg'; 

const Home = props => {
  
  return (
    <div className="info">
      <div className="info">
      <h1>Step-Brothers</h1>
    </div>

    <div >
      <img src={bar} className="align-center medium" />
    </div>

    <div>
      <h2 className="subtitle" id="slogan">
        Your kinda place — where bottoms up is always the way to go! Cheers!
      </h2>
      <Parent />
      <hr />
      <FeedbackList/>
    </div>
    <main >
      <article>
        Location
        <p className="description">
          1233 N Eddy St. Suite 168<br />
          South Bend, IN 46617
        </p>
      </article>
      <article>
        Opening Hours
        <p className="description">
          <b>Sun - Thurs:</b> 12pm to 1am<br />
          <b>Fri & Sat:</b> 12pm to 3am
        </p>
      </article>
      <article>
        Contact Information
        <p className="description">
          +1 (574) 890 6672<br />
          enquiries@step-brothers.com
        </p>
      </article>
    </main>
    </div>
  );
};

export default Home;