import React, { useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
const FyList = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  /* overflow: scroll; */
  background-color: rgb(245, 245, 245);
  .index-fylist-top {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 16px;
      font-weight: 700;
    }
    .iconfont1 {
      color: red;
    }
    .iconfont2 {
      color: blue;
    }
  }
  .index-fylist-goods {
    position: relative;
    width: 100%;
    height: 560px;
    .index-fylist-good {
      position: relative;
      width: 44%;
      height: 230px;
      left: 15px;
      margin-right: 15px;
      margin-top: 10px;
      float: left;
      border-radius: 10px;
      background-color: white;
      img {
        border-radius: 10px;
      }
      p {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: -o-ellipsis-lastline;
      }
      span {
        font-size: 16px;
        font-weight: 700;
        color: red;
      }
      .iconfont3 {
        position: absolute;
        right: 2px;
        top: 2px;
        color: 	rgb(208,208,208);
      }
      .iconfont4 {
        font-size: 18px;
        position: absolute;
        right: 8px;
        bottom: 2px;
      }
    }
  }
`

function Fyrecommend(props) {

  const [fylist, setfylist] = useState([]);
  useEffect(() => {
    fetch('http://localhost/index/fylist')
      .then(data => data.json())
      .then(data => {
        setfylist(data.fylist)
      })
  }, [])
  const enterDetail = (id) => {
    console.log(props)
    props.history.push(`/index/goodsdetails/${id}`)
  }
  return (
    < FyList >
      <div className="index-fylist-top">
        <i className="iconfont iconfont1">&#xe609;</i>
        <span>为你推荐</span>
        <i className="iconfont iconfont2">&#xe608;</i>
      </div>
      <div className="index-fylist-goods">
        {
          fylist.map((item, index) => {
            return (
              // <Link to="/index/goodsdetail" replace key={index}
              // }
              // >
              <div className="index-fylist-good" onClick={() => enterDetail(item.id)} key={index}>
                <i className="iconfont iconfont3">&#xe62b;</i>
                <img src={item.goodsimg} alt="" width={165} height={165}></img>
                <p>{item.content}</p>
                <span>{item.price}</span>
                <i className="iconfont iconfont4">&#xe664;</i>
              </div>
              // </Link>
            )
          })
        }
      </div>
    </FyList >
  )
}
// const mapStateToProps = () => {
//   console.log(2222);
// }
export default withRouter(Fyrecommend);
// export default connect(mapStateToProps)(React.memo(Fyrecommend));