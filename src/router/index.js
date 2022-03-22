/**
 * @author: zhumei
 * @description: 路由配置文件
 */
import Vue from "vue";
// 使用插件 VueRouter
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 引用路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 配置路由
export default new VueRouter({
    // 配置路由
    routes:[//此处的方法名，记住这里是routes,不是routers，没有r，要是写成routers，控制台不会报错，就是渲染不出组件来
        {
            path:"/home",
            component:Home,
            meta:{
                show:true,
                title:"首页"
            }
        },
        {
            name:"search",
            // path:"/search",
            path:"/search/:searchText?",
            component:Search,
            meta:{
                show:true,
                title:"搜索🔍"
            },
            // 路由组件传参
            // 1.布尔值写法，只能是params
            // props:true,
            // 2.对象写法，只能是params
            // props:{props1:'对象传值props1',props2:'对象传值props2'},
            // 3.函数式写法，可以传递params参数、query参数，通过props传递给路由组件
            props:($route) => {
                return {searchText:$route.params.searchText,data:$route.query.data }
            },
        },
        {
            path:"/login",
            component:Login,
            meta:{
                show:false,
                title:"登录"
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                show:false,
                title:"注册"
            }
        },
        // 重定向：当访问/ 立马访问首页
        {
            path:'*',
            redirect:"/home",
        }
    ]

})