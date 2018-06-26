import React from 'react';

import style from './ModalCard.css';

const ModalCard = (props) => (
    <div className={style.ModalCard}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
);

export default ModalCard;
