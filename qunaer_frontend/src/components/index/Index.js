import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './header/Header';
import Content from './content/Content';
import Seckill from './seckill/Seckill';
import AdvSwiper from './swiper/Swiper';
import Fyrecommend from './fyrecommend/Fyrecomend';
import './Index.css';
function Index(props) {
  // console.log(props)
  return (
    <div className="index_page">
      <Header />
      <div className="index_page_body">
        <AdvSwiper />
        <Content />
        <Seckill />
        <Fyrecommend />
      </div>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default Index;