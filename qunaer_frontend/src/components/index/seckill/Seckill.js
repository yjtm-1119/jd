import React from 'react';
import './Seckill.css';
const seckillData = [
  {
    id: 1,
    url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/119111/11/13009/198157/5f17b022Ee0f34b4b/e5e24040e1ecff8b.jpg.dpg',
    oldPrice: 6699,
    newPrice: "￥2737",
  },
  {
    id: 2,
    url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/100197/2/17524/246286/5e870d7eEdca0d827/eb0bd5ebfc025873.jpg.dpg',
    oldPrice: 799,
    newPrice: "￥599",
  },
  {
    id: 3,
    url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/141619/35/3651/64053/5f1952a3E79387769/44b2087639ac3826.jpg.dpg',
    oldPrice: 1888,
    newPrice: "￥1388",
  },
  {
    id: 4,
    url: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/127576/22/7682/195072/5f179723E3dd031e9/516ffa60a99a5210.jpg.dpg',
    oldPrice: 2598,
    newPrice: "￥1199",
  },

]
function Seckill() {
  return (
    <div className="seckill">
      <div className="seckill_head">
        <div className="seckill_head_title">京东秒杀</div>
        <a href="javascript:;" className="seckill_head_link">更多秒杀
        <i className="iconfont">&#xe6ad;</i></a>
      </div>
      <div className="seckill_footer">
        {seckillData.map(item => {
          return (
            <div key={item.id} className="seckill_footer_content">
              <img src={item.url} alt="" />
              <p>{item.newPrice}</p>
              <s>{item.oldPrice}</s>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Seckill;