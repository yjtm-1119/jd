import React, { Suspense } from "react";
import { Redirect } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import Find from '../components/find/Find';
import Index from '../components/index/Index';
import Goodsdetail from '../components/index/goodsdetail/Goodsdetail';
import Mine from '../components/mine/Mine';
import Sort from '../components/sort/Sort';
import TabLayout from '../layouts/TabLayout';
import BlankLayout from '../layouts/BlankLayout';
import All from '../components/cart/navigation/route/all';
import Changmai from '../components/cart/navigation/route/changmai';
import Fenlei from '../components/cart/navigation/route/fenlei';
import Jiangjia from '../components/cart/navigation/route/jiangjia';
import Supermarket1 from '../components/index/content/routes/Supermaeket1';


const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}
export default [{
  component: BlankLayout,
  routes: [
    {
      path: '/',
      component: TabLayout,
      routes: [
        {
          path: '/',
          exact: true,
          render: () => <Redirect to={"/index"} />
        },
        {
          path: '/index',
          // exact: true,
          component: SuspenseComponent(Index),
          routes: [
            {
              path: '/index/goodsdetail/:id',
              component: SuspenseComponent(Goodsdetail),
            },
            {
              path: '/index/supermarket',
              component: SuspenseComponent(Supermarket1),
            },
          ]
        },
        {
          path: '/find',
          component: SuspenseComponent(Find)
        },
        {
          path: '/cart',
          exact: true,
          render: () => <Redirect to={"/cart/all"} />
        },
        {
          path: '/cart',
          component: SuspenseComponent(Cart),
          routes: [
            {
              path: '/cart/all',
              component: SuspenseComponent(All),
            },
            {
              path: '/cart/jiangjia',
              component: SuspenseComponent(Jiangjia),
            },
            {
              path: '/cart/changmai',
              component: SuspenseComponent(Changmai),
            },
            {
              path: '/cart/fenlei',
              component: SuspenseComponent(Fenlei),
            }
          ]
        },
        {
          path: '/mine',
          component: SuspenseComponent(Mine),
        },
        {
          path: '/sort',

          component: SuspenseComponent(Sort),
        }
      ]
    },

  ]
}]








// routes: [
//   {
//     path: '/index/supermarket',
//     component: Supermarket1,
//   },
//   {
//     path: '/index/electric',
//     component: Electric,
//   },
//   {
//     path: '/index/clothes',
//     component: Clothes,
//   },
//   {
//     path: '/index/fresh',
//     component: Fresh,
//   },
//   {
//     path: '/index/gohome',
//     component: Gohome,
//   },
//   {
//     path: '/index/recharge',
//     component: Recharge,
//   },
//   {
//     path: '/index/purchase',
//     component: Purchase,
//   },
//   {
//     path: '/index/coupons',
//     component: Coupons,
//   },
//   {
//     path: '/index/allowance',
//     component: Allowance,
//   },
//   {
//     path: '/index/member',
//     component: Member,
//   },
// ]