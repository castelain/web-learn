import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Shopcart from '@/components/Shopcart/Shopcart'
import Search from '@/components/Search/Search'
import NewsList from '@/components/News/News-List'
import NewsDetail from '@/components/News/News-Detail'
import PictureList from '@/components/Picture/Picture-List'
import PictureDetail from '@/components/Picture/Picture-Detail'
import ProductList from '@/components/Product/Product-List'
import ProductDetail from '@/components/Product/Product-Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    {
      path: '/news/detail/:id',
      name: 'news.detail',
      component: NewsDetail
    },
    {
      path: '/picture/list',
      name: 'picture.list',
      component: PictureList
    },
    {
      path: '/picture/detail',
      name: 'picture.detail',
      component: PictureDetail
    },
    {
      path: '/product/list',
      name: 'product.list',
      component: ProductList
    },
    {
      path: '/product/detail',
      name: 'product.detail',
      component: ProductDetail
    }
  ]
})
