import React from 'react';

import Classes from './Right.css';

import Timer from './Timer/Timer';
import Tree from './Tree/Tree';
import Gifts from './Gifts/Gifts';

const Right = props => (
  <div className={Classes.Right}>
    <Timer user={props.user} />
    <Tree />
  </div>
);

export default Right;
