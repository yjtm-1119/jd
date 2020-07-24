import React from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Seckill from './seckill/Seckill';

import './Index.css';
function Index() {
  return (
    <div >
      <Header />
      <Content />
      <Seckill />
    </div>
  );
}

export default Index;