import React from 'react';
import { Redirect } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import Find from '../components/find/Find';
import Index from '../components/index/Index';
import Mine from '../components/mine/Mine';
import Sort from '../components/sort/Sort';
import TabLayout from '../layouts/TabLayout';

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
        component: Index
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