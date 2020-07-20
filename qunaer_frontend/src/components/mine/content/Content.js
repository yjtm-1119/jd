import React from 'react';
import './Content.css';
function Content() {
  return (
    <div className="wrapper2">
      <div className="tab1">
        <div>
          <img src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png" alt="" />
          <p>待付款</p>
        </div>
        <div>
          <img src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png" alt="" />
          <p>待收货</p>
        </div>
        <div>
          <img src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png" alt="" />
          <p>退换/售后</p>
        </div>
        <div>
          <img src="https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png" alt="" />
          <p>我的订单</p>
        </div>
      </div>
      <div className="tab2">
        <div className="tab2_left">
          <div>
            <div>107</div>
            <p>京豆</p>
          </div>
          <div>
            <div>21</div>
            <p>优惠券</p>
          </div>
          <div>
            <div>0.00</div>
            <p>白条</p>
          </div>
          <div>
            <div>0.00</div>
            <p>金条借款</p>
          </div>
        </div>
        <div className="tab2_right">
          <img src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png" alt="" />
          <div>我的钱包</div>
        </div>
      </div>
      <div className="tab3">
        <div className="tab3_header">
          <span className="tab3_header_games">游戏与互动</span>
          <span className="tab3_header_more"></span>
        </div>
        <div className="tab3_footer">
          <div className="tab3_footer_1">
            <i className="iconfont">&#xe619;</i>
            <p>京东农场</p>
            <p>免费领水果</p>
          </div>
          <div className="tab3_footer_2">
            <i className="iconfont" >&#xe619;</i>
            <p>京东农场</p>
            <p>免费领水果</p>
          </div>
          <div className="tab3_footer_3"> 
            <i className="iconfont">&#xe619;</i>
            <p>京东农场</p>
            <p>免费领水果</p>
          </div>
          <div className="tab3_footer_4">
            <i className="iconfont">&#xe619;</i>
            <p>京东农场</p>
            <p>免费领水果</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Content