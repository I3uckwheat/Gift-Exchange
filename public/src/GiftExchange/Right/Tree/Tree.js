import React from 'react';

import Classes from './Tree.css';
import TreeImg from '../../../images/tree.svg';

const Tree = () => (
  <div className={Classes.Tree}>
    <img src={TreeImg} />
  </div>
);

export default Tree;