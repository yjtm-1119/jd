import styled from 'styled-components';
export const Tab = styled.div`
  position:fixed;
  left: 0px;
  bottom: 0px;
  width:100%;
  z-index: 9999;
  height:58px;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  background:#FFFFFF;
  a {
    flex:1;
    padding:2px 0;
    font-size:14px;
    img{
          width:100%;

        }
    &.selected{
      span{
        border-bottom:5px solid #f1f1f1;
        /* padding:3px 0 ; */
      }
        
  }
}
`
export const TabItem = styled.div`
  height:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`