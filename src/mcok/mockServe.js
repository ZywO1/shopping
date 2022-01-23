import Mock from 'mockjs'

import banner from './banner.json'
import floor from './floor.json'

//mock方法两个参数，一个请求地址，一个是请求数据
//模拟首页轮播图数据
Mock.mock("/mock/banner",{code:200,data:banner})
//模拟Floorshuju
Mock.mock("/mock/floor",{code:200,data:floor})