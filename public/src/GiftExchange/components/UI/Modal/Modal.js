import React, { Fragment } from 'react';

import Backdrop from './Backdrop/Backdrop';
import RegisterModal from './RegisterModal/RegisterModal';
import LoginModal from './LoginModal/LoginModal';

import style from './Modal.css';

const Modal = (props) => {
  const clickHandler = (event) => {
    window.history.back();
  };

  let modalContent = null;
  switch(props.type){
    case 'register':
    modalContent = (<RegisterModal />);
      break;
    case 'login':
      modalContent = (<LoginModal />);
      break;
  }

  return (
    <Fragment>
      <div className={style.Modal}>
        {modalContent}
      </div>
      <Backdrop clicked={(clickHandler)} />
    </Fragment>

  );
};

export default Modal;