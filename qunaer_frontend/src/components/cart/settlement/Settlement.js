import React from 'react';
import './Settlement.css';
import Clog from './weixuanzhong.png';
function Settlement() {
    return (
        <div className="settlement">
            <div className="all_selected">
                <div className="opt">
                    <input type="checkbox" />
                </div>
                <span>全选</span>   
            </div>
            <div className="all_pay">总计：￥58.80</div>
            <div className="settlement_right">
                去结算
                <span className="se">(1件)</span>
            </div>

        </div>
    )
}

export default Settlement;