import React, { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import './Swiper.css'
import 'swiper/swiper-bundle.cjs';

var swiperPics = [
  {
    key: 1,
    url: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/125401/12/7801/109614/5f1a5b44E33ab494b/63f3fa5f58544fe4.jpg!cr_1125x445_0_171!q70.jpg.dpg"
  },
  {
    key: 2,
    url: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/113893/13/13130/133685/5f19355eE4a053457/877711a2501affad.jpg!cr_1125x445_0_171!q70.jpg.dpg"
  },
  {
    key: 3,
    url: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/99529/13/16689/118706/5e7eb3cbE3b418c68/438749ebdeb064a4.jpg!cr_1125x445_0_171!q70.jpg.dpg"
  },
  {
    key: 4,
    url: "//imgcps.jd.com/ling4/71651175347/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5c122d3d82acdd181d182930/66fe0209/cr_1125x445_0_171/s1125x690/q70.jpg"
  },
  {
    key: 5,
    url: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/113710/33/12814/133695/5f17a600E0015291f/eaf5c5a5bd500b1d.jpg!cr_1125x445_0_171!q70.jpg.dpg"
  },
  {
    key: 6,
    url: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/123624/24/2195/99979/5ec3a165E12b276e2/2e5b8a2606fbabfe.jpg!q70.jpg.dpg"
  },
  {
    key: 7,
    url: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145081/3/3623/147529/5f18125cEe80aac1b/88cb4a04d598d641.jpg!cr_1125x445_0_171!q70.jpg.dpg"
  },
  {
    key: 8,
    url: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/122347/12/7406/42588/5f111339Ed21e4d02/050d43fa22b48138.jpg!cr_1125x445_0_171!q70.jpg.dpg"
  },

]
function AdvSwiper() {
  useEffect(() => {
    new Swiper('.banner', {
      autoplay: {//自动切换
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      pagination: {//分页器
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      loop: true,//循环
    });
  }, [])
  return (
    <div className="swiper-container banner">
      <div className="swiper-wrapper">
        {swiperPics.map((item, i) => {
          return (
            <div className="swiper-slide" key={item.key}>
              <img src={item.url} alt="" />
            </div>
          )
        })}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  )
}
export default AdvSwiper;