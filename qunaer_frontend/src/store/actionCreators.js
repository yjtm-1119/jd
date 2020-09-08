import { ADD_GOODS,PAY_MONEY} from './actionTypes'

export const addGoodsAction = (obj) => ({
  type:ADD_GOODS,
  obj
})
export const payMoney = () => ({
  type: PAY_MONEY,
})
