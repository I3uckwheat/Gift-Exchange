import React from 'react';

import Classes from './Home.css';

const Home = () => (
  <div className={Classes.Home}>
    <h3>Welcome to the gift exchange!</h3>
    <p>
      This is a "Secret Santa" style gift exchange. After signing up, you will
      be placed into the pool and assigned a partner at random when the timer is
      up. You then have 30 days to ship your item. If you do not receive your
      item, you will be placed in a secondary pool where you can try again.
      Please make this fun for all, and be respectful with the items and please be
      diligent in sending your gift on time!
    </p>
    <h3>How it works</h3>
    <ol>
      <li>Sign up with your name, address, and some information about yourself</li>
      <li>Wait for the timer to run out, (You will also receive an email)</li>
      <li>Find out something about your partner</li>
      <li>Mail them something cool!</li>
      <li>(optional, but recommended) Send the tracking number to your partner through the interface</li>
      <li>Say, "Hi!" to your partner through an email once you have both received your gift</li>
      <li>Post a picture of yourself with your gift to show the world what you received!</li>
    </ol>
  </div>
);

export default Home;
