import React from 'react';
import '../Navigation.css';
import  Slog from './shangdian.png';
import  Clog from './weixuanzhong.png';
import  Alog from './jia.png';
import  Rlog from './jian.png';
function Jiangjia(){
   return(
    
       <div className="cart_list_goods">
           <div className="goods_header">
            <div className="opt"><img src={Clog} alt=""/></div>
           <div className="shop_logo"> <img src={Slog} alt=""/></div>
          <div className="title_online">
              平行宇宙旗舰店&gt;
          </div>
          
               
           </div>
           <div className="goods_bottom">
             
                <div className="opt"><img src={Clog} alt=""/></div>
              
              <div className="t2">
                  <img  src=" https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/124219/3/2745/287769/5ec89338E784d08be/9920af8a6161b93c.jpg!q70.dpg.webp" alt=""/>
              </div>
               <div className="t3">
                     <div className="t3_name">
                        <span>平行宇宙其徐如林 玻璃瓶装汽水 低糖无脂松针风味饮料 255ml*6瓶整箱装</span> 
                      </div>
                      <div className="t3_price_line">
                          <div className="price">￥58.80</div>
                          <div className="num_i"> 
                              <div className="num_i_jian"><img src={Rlog} alt=""/></div>
                              <div className="num_i_input">1</div>
                              <div className="num_i_jia"><img src={Alog} alt=""/></div>
                            </div>
                      </div> 
                      <div className="zengpin">
                       赠品&times;1   平行宇宙  随身镭射袋&times;1
               </div>
               </div>
               
             </div>
       </div>
   
   )

}

export default  Jiangjia;