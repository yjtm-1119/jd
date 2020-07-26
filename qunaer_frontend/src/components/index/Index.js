import React from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Seckill from './seckill/Seckill';
import { Route } from 'react-router-dom';
import Supermarket1 from './content/routes/Supermaeket1';
import AdvSwiper from './swiper/Swiper';


import './Index.css';
function Index() {
  return (
    <div className="index_page">
      <Header />
      <div className="index_page_body">
        <AdvSwiper />
        <Content />
        <Seckill />
      </div>

    </div>
  );
}

export default Index;