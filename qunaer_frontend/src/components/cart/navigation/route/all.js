import React, { useState, useRef,useEffect } from 'react';
import { connect } from 'react-redux';
import './router.css'

function All(props) {
  // state = {
  // datalist: [
  //   {
  //     "imgUrl": "https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/124219/3/2745/287769/5ec89338E784d08be/9920af8a6161b93c.jpg!q70.dpg.webp",
  //     "name": "平行宇宙其徐如林 玻璃瓶装汽水 低糖无脂松针风味饮料 255ml*6瓶整箱装",
  //     "price": "58.8",
  //     "checked": false,
  //     "count": 1,
  //   },
  //   {
  //     "imgUrl": "https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/143534/40/3859/39101/5f1e7416Ebebfc413/27a7a28ba592a73b.jpg!q70.dpg.webp",
  //     "name": "SK-II男士焕活保湿洗面奶120g（SK2洁面乳 补水保湿 控油洁面 深层清洁 护肤品 化妆品)",
  //     "price": "440",
  //     "checked": false,
  //     "count": 1,
  //   },
  // ],
  //   all: false,
  //   sumprice: 0,
  //   one: false,
  //   sumcount: 0
  // }
  const [datalist, setDatalist] = useState([]);
  const [all, setAll] = useState(false);
  const [sumprice, setSumprice] = useState(0);
  const [one, setOne] = useState(false);
  const [sumcount, setSumcount] = useState(0);
  const myUi = useRef();
  const myText = useRef();


  const handleChange = (index) => {

    var list = [...datalist]
    list[index].checked = !list[index].checked


    var every = list.every((item, index) => {
      return item.checked == true;
    })

    // 单选框中如果有一个是 checked的是true就可以
    var some = list.some((item, index) => {
      return list[index].checked
    })
    setDatalist(list);
    setAll(every);
    setOne(some)
    SumPrice()
  }

  // 全选
  const handleAll = () => {
    var list = [...datalist]
    var all = all
    all = !all //onchange事件发生，就是对当前的状态进行取反
    for (var i = 0; i < list.length; i++) {
      list[i].checked = all // 全选框的状态直接影响所有的单选框，就把全选框的状态赋给所有的单选框即可
    }
    setAll(all);
    setOne(all);
    SumPrice()
  }


  const handleAdd = (index) => {
    // 设定的value= {datalist[index].count}
    var list = [...datalist]
    list[index].count++;

    setDatalist(list)
    SumPrice()

  }

  const handleMinus = (index) => {
    // 设定的value= {datalist[index].count}
    var list = [...datalist];
    list[index].count--
    list[index].count = list[index].count < 1 ? 1 : list[index].count;
    setDatalist(list)
    SumPrice()
  }

  const SumPrice = () => {
    var sum = 0
    var count = 0;
    var list = [...datalist]
    for (var i = 0; i < list.length; i++) {
      if (list[i].checked === true) {
        console.log(list);
        sum += list[i].newPrice * list[i].count
        count += list[i].count
      }
    }
    setSumprice(sum);
    setSumcount(count);
  }

  const { dataList } = props
  useEffect(() => {
    setDatalist(dataList)
  }, [])
  return (
    <>
      <div className="style_cartlistItem">
        <ul className="shopList" ref={myUi}>
          {
            datalist.map((item, index) => {

              return (
                <li key={index}>
                  <input type="checkbox" className="style.checkbtn + ' ' + style.UnChecked" ref={myText} onChange={() => { handleChange(index) }} checked={item.checked} value="" />
                  <div className="style_shopImg">
                    <div className="style_shopImgShow">
                      <img src={item.mainImg} alt="" />
                    </div>
                  </div>
                  <div className="style_shopInfo">
                    <div className="style_shopTitle">{item.content}</div>
                    <div className="style_shopPrice">
                      <span>￥{item.newPrice}</span>

                      <div className="style_shopSelect">
                        <button className="style_minus" onClick={() => { handleMinus(index) }}>-</button>
                        <input type="text" value={datalist[index].count || ''} />
                        <button className="style_add" onClick={() => { handleAdd(index) }}>+</button>
                      </div>
                    </div>
                  </div>

                </li>
              )


            })

          }

        </ul>
      </div>

      <div className="style_sum">
        <input type="checkbox" onChange={() => { handleAll() }} checked={all} value="" />
        <div className="style_totalPrice">
          <span >合计</span>
          <span>￥{sumprice}</span>
        </div>
        <div className="jiesuan" >结算
                  <span>({sumcount})</span>
        </div>
      </div>
    </>

  );


}
const mapStateToProps = (state) => {
  return {
    dataList: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(All);

// export default All