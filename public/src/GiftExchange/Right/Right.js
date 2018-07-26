import React from 'react';

import Classes from './Right.css';

import Timer from './Timer/Timer';
import Tree from './Tree/Tree';

const Right = props => (
  <div className={Classes.Right}>
    <Timer user={props.user} />
    <Tree />
  </div>
);

export default Right;
