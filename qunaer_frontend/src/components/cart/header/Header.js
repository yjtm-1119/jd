import React from 'react';
import './Header.css';
import Ding from  './dingwei.png';
import Ming from './gengduo.png';

function Header(){
    return(
 
         <div className="cart_header">
              <div className="coushu"></div>
              <div className="cart_title">
                  <span>购物车</span>
                  <img src={Ding} alt=""/>
              </div>
              <div className="cart_right">
                <div  className="cart_enit">
                    <span>编辑</span>
                    <img src={Ming} alt=""/>
                </div>
             
              </div>
         </div>

  
    )

}
export default Header;