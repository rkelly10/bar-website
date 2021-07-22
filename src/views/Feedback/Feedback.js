import React from 'react';
import './feedback.css';

import * as Env from "../../environments";
import Parse from "parse";
import FeedbackForm from '../../components/Main/FeedbackForm';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const Feedback = props => {


  return (
    <div className="info">
      <h1>Step-Brothers</h1>
      <h2 className="subtitle">Give Us Some Feedback</h2>

      <p>
        <br />
        Here at Step-Brothers we value hearing about our customers experience.
        <br />
        <br />
        If you have something you want us to know, please leave a review below!
        <br />
        <br />
      </p>

      <FeedbackForm />
      
    </div>
  );
};

export default Feedback;