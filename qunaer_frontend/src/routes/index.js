import React from 'react';
import { Redirect } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import Find from '../components/find/Find';
import Index from '../components/index/Index';
import Mine from '../components/mine/Mine';
import Sort from '../components/sort/Sort';
import TabLayout from '../layouts/TabLayout';
import Supermarket1 from '../components/index/content/routes/Supermaeket1';


export default [
  {
    path: '/',
    component: TabLayout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={"/Index"} />
      },
      {
        path: '/index',
        component: Index,
        routes: [
          {
            path: '/index/supermarket',
            component: Supermarket1,
          },
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
        ]
      },
      {
        path: '/find',
        component: Find
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/mine',
        component: Mine
      },
      {
        path: '/sort',
        component: Sort,
      },
    ]
  }
]