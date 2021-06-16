import React from 'react';
import './About.css'

function About() {
  
  return (
    <div className="About">
      <header className="App-header"></header>
      <h3>What is Shero Project?</h3>
      <body>
      <p className="About1">The purpose of the shero project is to create a fun and interactive way to learn more about the (she)roes who have impacted the 🌎 around us.</p>
       <p>Shero is all about this idea 💡:  </p>
      <h3>"Inspiring people, empower people"</h3>
      <p>Shero will grow as more series are added to inform users about all kinds of people who have and are impacting the world in a positive way.</p>
      <h3>What's Next?</h3>
      <ul>
      <li>modify card flipping so a card is picked from a deck one at a time</li>
      <li>new deck featuring "Tech Heroes"</li>
      <li>Shero will become an extension of the "UpLift Project" </li>
      </ul>
      </body>
    </div>
  );
}

export default About;
