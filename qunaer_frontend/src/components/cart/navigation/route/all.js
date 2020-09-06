import  React, {Component} from  'react';
import './router.css'

class All extends Component{
    state={
        datalist: [
            {
              "imgUrl": "https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/124219/3/2745/287769/5ec89338E784d08be/9920af8a6161b93c.jpg!q70.dpg.webp",
              "name": "平行宇宙其徐如林 玻璃瓶装汽水 低糖无脂松针风味饮料 255ml*6瓶整箱装",
              "price": "58.8",
              "checked": false,
              "count": 1,
            },
            {
              "imgUrl": "https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/143534/40/3859/39101/5f1e7416Ebebfc413/27a7a28ba592a73b.jpg!q70.dpg.webp",
              "name": "SK-II男士焕活保湿洗面奶120g（SK2洁面乳 补水保湿 控油洁面 深层清洁 护肤品 化妆品)",
              "price": "440",
              "checked": false,
              "count": 1,
            },
          ],
          all: false,
          sumprice: 0,
          one: false,
          sumcount: 0
    }

    render(){
        return(
            <>
            <div className="style_cartlistItem">
               <ul className="shopList" ref="myul">
                 {
               this.state.datalist.map((item, index) => {
                  
                  return (
                    <li key={index}>
                      <input type="checkbox"  className="style.checkbtn + ' ' + style.UnChecked" ref="mytext" onChange={() => {this.handleChange(index) }} checked={item.checked} value="" />
                      <div className="style_shopImg">
                        <div className="style_shopImgShow">
                          <img src={item.imgUrl} alt="" />
                        </div>
                      </div>
                      <div className="style_shopInfo">
                        <div className="style_shopTitle">{item.name}</div>
                        <div className="style_shopPrice">
                          <span>￥{item.price}</span>
    
                          <div className="style_shopSelect">
                            <button className="style_minus" onClick={() => {this.handleMinus(index) }}>-</button>
                            <input type="text" value={this.state.datalist[index].count || ''} />
                            <button className="style_add" onClick={() => {this.handleAdd(index) }}>+</button>
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
          <input type="checkbox" onChange={() => { this.handleAll() }} checked={this.state.all} value="" />
          <div className="style_totalPrice">
            <span >合计</span>
            <span>￥{this.state.sumprice}</span>
          </div>
          <div className="jiesuan" >结算
                  <span>({this.state.sumcount})</span>
           </div>
        </div>
    </>    
      
        );
    }
    handleChange(index){

      var list = [...this.state.datalist]
      list[index].checked = !list[index].checked
      
      
      var every=list.every((item,index)=>{
      return item.checked==true;
      })

      // 单选框中如果有一个是 checked的是true就可以
      var some = list.some((item,index)=>{
          return list[index].checked
      })
      
     
      this.setState({
          datalist :list,
          all : every,
          one : some  //设定结算框的样式是哪个，根据list[index].checked
      })
      
      this.SumPrice()

  }

  // 全选
  handleAll(){
    var list = [...this.state.datalist]
    var all = this.state.all
    all = ! all //onchange事件发生，就是对当前的状态进行取反
    for(var i = 0 ; i < list.length ;i++){
        list[i].checked = all // 全选框的状态直接影响所有的单选框，就把全选框的状态赋给所有的单选框即可
    }      

    this.setState({
        all : all,
        one : all //全选的状态直接影响结算框的样式
    })
    this.SumPrice()
}


  handleAdd(index){
      // 设定的value= {this.state.datalist[index].count}
      var list = [...this.state.datalist]
      list[index].count++;
      
      this.setState({
          datalist : list,
      })
     
      this.SumPrice()
     
  }

  handleMinus(index){
      // 设定的value= {this.state.datalist[index].count}
      var list = [...this.state.datalist];
      list[index].count--
      list[index].count=list[index].count<1?1:list[index].count; 
      this.setState({
          datalist : list
      })

      this.SumPrice()
  }

  SumPrice(){
      var sum=0
      var count = 0;
      var list = [...this.state.datalist]
      for(var i =0; i< list.length ;i++){
          if(list[i].checked=== true){
              sum += list[i].price *list[i].count
              count += list[i].count
          }
      }
      
      this.setState({
          sumprice : sum,
          sumcount : count //结算个数
      })
  }

 
   
}
export default All;