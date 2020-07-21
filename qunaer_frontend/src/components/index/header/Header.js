import React from 'react';
import Jd from './iconfont/京东.png';
import Calendar from './iconfont/日历.png';
import Message from './iconfont/消息.png';
import Sweep from './iconfont/扫.png';
import Search from './iconfont/搜索.png';
import Camera from './iconfont/相机.png'

import './Header.css';
function Header() {
  return (
    <div className="index_header">
      <div>
        <img src={Jd} alt="" />
        <img src={Calendar} alt="" />
        <img src={Message} alt="" />
        <img src={Sweep} alt="" />
      </div>
      <div className="index_header_child2">
        <img src={Search} alt="" className="index_header_img1"/>
        <input type="text" className="index_header_search" placeholder="小米手机" />
        <img src={Camera} alt="" className="index_header_img2"/>
      </div>

    </div>
  );
}

export default Header;