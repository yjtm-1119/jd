import React from 'react';
import './GoodsContent.css';
function GoodsContent() {
  return (
    <div className="cart_goodscontent">
      <i className="iconfont">&#xe64a;</i>
      <p className="cart_goodscontent_newprice"></p>
      <s className="cart_goodscontent_oldprice"></s>
    </div>
  )
}
export default GoodsContent