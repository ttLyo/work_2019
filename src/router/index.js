import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'


// Views - Pages
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'


/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true,name:"login" },
    {path: '/pages',redirect: '/pages/p404', name: 'Pages',
          component: {
            render (c) { return c('router-view') }
              // Full,
          },
          children: [{path: '404',  name: 'Page404', component: _import('errorPages/Page404') },
                     {path: '500',name: 'Page500',component: _import('errorPages/Page404')},
                    ]
    }


]

export default new Router({
  mode: 'hash', 
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [

 {
  path: '/',
  redirect: '/property_manage_children/loss_gain_data',
  name: '评论管理',
  component: Full,
  hidden:false,
  children: [
     {path: '/property_manage_children',name: '财务管理',redirect: '/loss_gain_data',icon:'ios-aperture',
     component: {render (c) { return c('router-view') }},
     children: [
       {path:"loss_gain_data",name:"损益数据表",component: _import('property_manage_children/loss_gain_data')},
       {path:"business_gain",name:"营业收入明细表",component: _import('property_manage_children/business_gain')},
       {path:"business_gain_market",name:"营业收入明细表-分市场",component: _import('property_manage_children/business_gain_market')},
       {path:"building_project",name:"在建工程及转固情况表",component: _import('property_manage_children/building_project')},
       {path:"net_manage_bus",name:"网络管理技术服务收支利情况表-分业务",component: _import('property_manage_children/net_manage_bus')},
       {path:"net_manage_market",name:"网络管理技术服务收支利情况表-分市场",component: _import('property_manage_children/net_manage_market')},
      //  {path:"worker_cost",name:"人工成本情况表",component: _import('property_manage_children/worker_cost')},
       {path:"market_gain_loss_bus",name:"市场营销服务收支利情况表-分业务",component: _import('property_manage_children/market_gain_loss_bus')},
       {path:"market_gain_loss_market",name:"市场营销服务收支利情况表-分市场",component: _import('property_manage_children/market_gain_loss_market')},
               ]
     },
  //  {path: '/comment',name: '工程管理',icon:'md-pricetag',component: _import('comment')},
  //  {path: '/get_data',name: '市场拓展',icon:'md-pricetag',component: _import('get_data')},
    //  {path: '/comment',name: '评论管理',icon:'md-pricetag',component: _import('comment')},
    //  {path: '/user_manage',name: '用户管理',icon:'md-contacts',component: _import('user_manage')},
    //  {path: '/get_data',name: '爬虫管理',icon:'ios-bug',component: _import('get_data')},
    //  {path: '/account_manage',name: '爬虫账户管理',icon:'ios-bug',component: _import('account_manage')},
    //  {path: '/introduction',name: '监控',icon:'md-analytics',component: _import('Introduction')},
      
    ]
  },


  { path: '*', redirect: '/pages/404', hidden: true }
  
];
