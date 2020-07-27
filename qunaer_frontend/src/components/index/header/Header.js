import React from 'react';
import './Header.css';
const titles = ['首页', '手机', "电脑", "运动", "生鲜", "童装", "女装"]
function Header() {
  return (
    <div className="index_header">
      <div className="index_header_top">
        <span className="iconfont">&#xe600;</span>
        <span className="iconfont">&#xe63e;</span>
        <span className="iconfont">&#xe601;</span>
        <span className="iconfont">&#xe635;</span>
      </div>
      <div className="index_header_child2">
        <input type="text" className="index_header_child2_search" placeholder="美的京东超级手机日" />
        <span className="iconfont iconfont1">&#xe603;</span>
        <span className="iconfont iconfont2">&#xe633;</span>
      </div>
      <nav className="index_header_nav">
        {titles.map((item, i) => {
          return (
            <span key={i} className="index_header_nav_title">
              {item}
            </span>
          )
        })}
      </nav>
      
    </div>

  );
}

export default Header;