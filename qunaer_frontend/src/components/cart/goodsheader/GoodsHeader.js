import React from 'react';
import './GoodsHeader.css';
function GoodsHeader() {
  return (
    <div className= "goodsHeader">
      <i className="iconfont iconfont1">&#xe615;</i>
      <i className="iconfont iconfont2">&#xe715;</i>
      <a href="https://www.baidu.com" className="jd_link">
        打开京东APP &gt;
      </a>
    </div>
  )
}
export default GoodsHeader