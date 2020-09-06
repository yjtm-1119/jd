import React from 'react';
import { withRouter } from 'react-router-dom';
import './GoodsHeader.css';
function GoodsHeader(props) {
  const handleBack = () => {
    props.history.goBack();
    // console.log(1)
  }
  return (
    <div className="goodsHeader">
      <i className="iconfont iconfont1" onClick={handleBack}>&#xe615;</i>
      <i className="iconfont iconfont2">&#xe715;</i>
      <a href="https://www.baidu.com" className="jd_link">
        打开京东APP &gt;
      </a>
    </div>
  )
}
export default withRouter(GoodsHeader);