import React from 'react';

import Classes from './Right.css';

import Timer from './Timer/Timer';
import Tree from './Tree/Tree';

const Right = (props) => (
  <div className={Classes.Right}>
    <Timer />
    <Tree />
  </div>
);

export default Right;
