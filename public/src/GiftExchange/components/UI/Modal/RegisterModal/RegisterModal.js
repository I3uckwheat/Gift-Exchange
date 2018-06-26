import React from 'react';

import ModalCard from '../ModalCard/ModalCard';

const RegisterModal = (props) => (
  <ModalCard title={'Register'}>
    <p>Tthis is teh register Modal </p>
    <input type='text' />
    <button>Submit</button>
  </ModalCard>
);

export default RegisterModal;
