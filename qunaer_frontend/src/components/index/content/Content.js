import './Content.css';
import React, { useEffect, useCallback } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.cjs';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Supermarket1 from './routes/Supermaeket1';
const contentAppTitles = [
  [{
    id: 1,
    url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp",
    title: '京东超市',

  },
  {
    id: 2,
    url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp",
    title: '数码电器'
  },
  {
    id: 3,
    url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp",
    title: '京东服饰'
  },
  {
    id: 4,
    url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp",
    title: '免费水果'
  },
  {
    id: 5,
    url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp",
    title: '京东到家'
  },
  {
    id: 6,
    url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp",
    title: '充值缴费'
  },
  {
    id: 7,
    url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png.webp",
    title: '领京豆'
  },
  {
    id: 8,
    url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp",
    title: '券后9.9'
  },
  {
    id: 9,
    url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png.webp",
    title: '零津贴'
  },
  {
    id: 10,
    url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp",
    title: '会员'
  }],
  [
    {
      id: 11,
      url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/142596/7/1864/4759/5efbf5a9E60c62b8a/49cdd24cb2bfecf5.png.webp",
      title: '京东国际'
    },
    {
      id: 12,
      url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125193/15/5993/3443/5efbf5dbEa3327124/a4282d5cb2879c8b.png.webp",
      title: '京东拍卖'
    },
    {
      id: 13,
      url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/133947/24/3428/4213/5efbf625E7e1b4e98/95fda84d8748f88d.png.webp",
      title: '唯品会'
    },
    {
      id: 14,
      url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/145692/9/1817/4493/5efbf652E61c4f3ec/722840c121d67fc6.png.webp",
      title: '玩3C'
    },
    {
      id: 15,
      url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/118396/30/11271/2692/5efbf680Eb3a3cf32/c3e85c4d99746400.png.webp",
      title: '沃尔玛'
    },
    {
      id: 16,
      url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/123571/19/6008/3747/5efbf6b2E03153a36/9ddc9036ba1c11a1.png.webp",
      title: '美妆馆'
    },
    {
      id: 17,
      url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/115003/18/11199/3519/5efbf6eaEe59cb7f6/dab44230606cd112.png.webp",
      title: '京东旅行'
    },
    {
      id: 18,
      url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/142258/17/1800/4509/5efbf70aEb23e164e/61aaea8fe5221081.png.webp",
      title: '拍拍二手'
    },
    {
      id: 19,
      url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116056/30/11288/4223/5efbf753Ee7cf2cd7/3977b5fe42b136e4.png.webp",
      title: '物流查询'
    },
    {
      id: 20,
      url: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/112559/35/11283/3523/5efbf774E285d108b/c0fa626df4979a21.png.webp",
      title: '全部'
    },
  ]

]
function Content(props) {
  useEffect(() => {
    new Swiper('.icon', {
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
      loop: true,
    });
  }, [])
  const ToNewPage = useCallback(() => {
    // dispatch(push("/path/newpath'", {Supermarket1}));
    console.log(1111)
  }, [])
  return (
    <div className="index_content">
      <div className="swiper-container icon">
        <div className="swiper-wrapper ">
          {
            contentAppTitles.map((Item, i) => {
              return (
                <div className="swiper-slide" key={i}>
                  {
                    Item.map((item) => {
                      return (
                        <div key={item.id} className="index_content_item"
                          onClick={ToNewPage}
                        >
                          {/* <Link to="/index/:pagename"> */}
                          <Link to="/index/supermarket1" replace >
                            <img src={item.url} alt="" />
                            <p>{item.title}</p>
                          </Link>
                          <Route path="/index/supermarket1" component={Supermarket1}></Route>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="swiper-pagination2"></div>

    </div>
  );
}

export default Content;