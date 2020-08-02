import React from 'react';
import './GoodsContent.css';
function GoodsContent() {
  return (
    <>
      <div className="goodsDetails_goodscontent">
        {/* <i className="iconfont">&#xe64a;</i> */}
        <span className="goodsDetails_goodscontent_newprice">￥199</span>
        <s className="goodsDetails_goodscontent_oldprice">￥299</s>
        <h4 className="goodsDetails_goodscontent_title">
          美的（Midea）12升智能精控恒温 断电记忆侧焰稳燃主动防漏气 双重防冻燃气热水器天然气JSQ22-HWA
      </h4>
      </div>
      <div className="goodsDetails_footer">
        <div className="goodsDetails_footer_icon">
          <i className="iconfont">&#xe614;店铺</i>
          <i className="iconfont">&#xe7b0;客服</i>
          <i className="iconfont">&#xe605;购物车</i>
        </div>
        <div className="goodsDetails_footer_func">
          <div className="goodsDetails_footer_func_b1">加入购物车</div>
          <div className="goodsDetails_footer_func_b2">立即购买</div>
        </div>
      </div>
    </>
  )
}
export default GoodsContent