import React from 'react';

import style from './Backdrop.css';

const Backdrop = (props) => {
  function clickHandler(event) {
    event.stopPropagation();
    props.clicked();
  };

  return (
    <div onClick={clickHandler} className={style.Backdrop}>
      {props.children}
    </div>
  );
 };

export default Backdrop;
