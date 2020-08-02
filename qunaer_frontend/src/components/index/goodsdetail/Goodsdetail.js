import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.cjs';
import './Goodsdetail.css';
import GoodsHeader from './goodsheader/GoodsHeader';
import GoodsContent from './goodscontent/GoodsContent';
const goodsDetails = [
  {
    id: 1,
    title: "小熊（Bear）电炖锅 电炖盅 煲汤锅 电砂锅 紫砂锅家用电汤锅4L大容量煮粥养生锅预约全自动 DDG-D40B1",
    price: "149.00",
    showImgs: [
      '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/141088/26/1776/159829/5efada3dE8c81da56/a02a680ac34db262.jpg!q80.dpg.webp',
      '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/50689/6/9389/308453/5d6c97c1E2653632f/81bcb3fb88f5669b.jpg!q70.dpg.webp',
      '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/116188/1/3164/130972/5ea693f6Ecbc4d217/f12608a607d3df01.jpg!q70.dpg.webp',
      '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/72019/23/8838/182267/5d6c97c1E912bd7eb/f610c8443834f34e.jpg!q70.dpg.webp',
      '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/65858/3/11481/295543/5d900a16E0cfd767a/3d5b91be57605067.jpg!q70.dpg.webp',
    ]
  }
]
function Goodsdetail() {
  console.log(111111111)
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
  return (
    <div className="goodsDetails_wrapper">
      <GoodsHeader />
      <div className="goodsDetails_details">
        <div className="swiper-container goodsDetails">
          <div className="swiper-wrapper">
            {goodsDetails[0].showImgs.map((pic, i) => {
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
      <GoodsContent />
    </div>

  );
}

export default Goodsdetail;