import  React from  'react';
import  './Navigation.css'
import {  NavLink, Route } from 'react-router-dom';
import  All from './route/all';
import  Changmai from './route/changmai';
import  Feilei  from './route/fenlei';
import  Jiangjia from './route/jiangjia';

function  Navigation(){
    return (
        <div className="navigation">
         <div className="cart_tab_nav">
          <ul>
            
             <li><NavLink to="/cart/all" activeClassName="selected">全部</NavLink></li>
             <li><NavLink to="/cart/jiangjia" activeClassName="selected">降价</NavLink></li>
             <li><NavLink to="/cart/changmai" activeClassName="selected">常买</NavLink></li>
             <li><NavLink to="/cart/fenlei" activeClassName="selected">分类</NavLink></li>
          </ul>
         </div>
         {/* <div className="cart_list"> */}
            <div className="cart_list_goods">
                {/* <Route path="/cart"  component={All}/> */}
                <Route path="/cart/all"  component={All}/>
                <Route path="/cart/jiangjia"  component={Jiangjia}/>
                <Route path="/cart/changmai"  component={Changmai}/>
                <Route path="/cart/fenlei"  component={Feilei}/>
            </div>    
        {/* </div>    */}
        </div> 
    )
}

export default Navigation;