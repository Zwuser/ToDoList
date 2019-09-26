/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 22:02:49
 * @LastEditTime: 2019-09-25 12:15:41
 * @LastEditors: Please set LastEditors
 */
import week from './components/Week.vue';
export const routes = [
    {path:'/',component:week},
    {path:'/:year/:month',name:'data',component: week}
]