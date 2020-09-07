import React, { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.cjs';
import './Goodsdetail.css';
import GoodsHeader from './goodsheader/GoodsHeader';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actionCreators';
// import { Space, Modal } from 'antd';

// import GoodsContent from './goodscontent/GoodsContent';

// const goodsDetails = [
//   {
//     id: 1,
//     title: "小熊（Bear）电炖锅 电炖盅 煲汤锅 电砂锅 紫砂锅家用电汤锅4L大容量煮粥养生锅预约全自动 DDG-D40B1",
//     price: "149.00",
//     showImgs: [
//       '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/141088/26/1776/159829/5efada3dE8c81da56/a02a680ac34db262.jpg!q80.dpg.webp',
//       '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/50689/6/9389/308453/5d6c97c1E2653632f/81bcb3fb88f5669b.jpg!q70.dpg.webp',
//       '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/116188/1/3164/130972/5ea693f6Ecbc4d217/f12608a607d3df01.jpg!q70.dpg.webp',
//       '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/72019/23/8838/182267/5d6c97c1E912bd7eb/f610c8443834f34e.jpg!q70.dpg.webp',
//       '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/65858/3/11481/295543/5d900a16E0cfd767a/3d5b91be57605067.jpg!q70.dpg.webp',
//     ]
//   }
// ]
function Goodsdetail(props) {
  // console.log(111111111)
  let urlLength = window.location.href.length;
  // console.log(window.location.href.charAt(urlLength - 1))
  let urlId = window.location.href.charAt(urlLength - 1)
  console.log(urlId)
  let urlData = JSON.parse(localStorage.getItem(`goodsId${urlId}`));
  console.log(urlData)
  const [goodsDetails, setGoodsDetails] = useState(urlData)
  const { handleClickAddGoods, datalist } = props;
  useEffect(() => {
    new Swiper('.goodsDetails', {
      loop: true,
      pagination: {
        el: '.swiper-pagination3',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            '/' +
            '<span class="' + totalClass + '"></span>';
        },
      },
    })
  })
  const handleAddToCart = () => {
    for (let i = 0; i < datalist.length; i++) {
      if (datalist[i].id === urlData.id) {
        return
      }
    }
    handleClickAddGoods(urlData)
  }
  const handleGoToCart = () => {
    handleAddToCart()
    props.history.push('/cart/all');
  }
  return (
    <div className="goodsDetails_wrapper">
      <GoodsHeader />
      <div className="goodsDetails_details">
        <div className="swiper-container goodsDetails">
          <div className="swiper-wrapper">
            {goodsDetails.goodsimg.map((pic, i) => {
              return (
                <div className="swiper-slide" key={i}>
                  <img src={pic} alt="" />
                </div>
              )
            })}
          </div>
        </div>
        {/* <div className="swiper-pagination3"></div> */}
      </div>
      {/* <GoodsContent /> */}
      <div className="goodsDetails_goodscontent">
        {/* <i className="iconfont">&#xe64a;</i> */}
        <span className="goodsDetails_goodscontent_newprice">￥{goodsDetails.newPrice}</span>
        <s className="goodsDetails_goodscontent_oldprice">￥{goodsDetails.oldPrice}</s>
        <h4 className="goodsDetails_goodscontent_title">
          {goodsDetails.content}
        </h4>
      </div>
      <div className="goodsDetails_footer">
        <div className="goodsDetails_footer_icon">
          <i className="iconfont">&#xe614;店铺</i>
          <i className="iconfont">&#xe7b0;客服</i>
          <i className="iconfont">&#xe605;购物车</i>
        </div>
        <div className="goodsDetails_footer_func">
          <div className="goodsDetails_footer_func_b1" onClick={handleAddToCart}>加入购物车</div>
          <div className="goodsDetails_footer_func_b2" onClick={handleGoToCart}>立即购买</div>
        </div>
      </div>
    </div>


  );
}
const mapStateToProps = (state) => {
  return {
    datalist: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickAddGoods(obj) {
      dispatch(actionTypes.addGoodsAction(obj))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Goodsdetail);
