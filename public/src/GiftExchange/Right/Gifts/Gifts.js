import React from 'react';

import Classes from './Gifts.css';
import giftpng from './gifts.png';

const Gifts = () => (
  <div className={Classes.Gifts} >
    <img src={giftpng} />
  </div>
);

export default Gifts;
