#  星巴克

> A Vue.js project

## Build Setup
     axios node-sass sass-loader vuex mockjs   cnpm i
``` bash

  src/api    接口 封装 
             getUser 是否登录 
             getLogin 登录验证
             getList  数据
             getDetails 详情
             upload   上传图片
             apply  提交

  src/components    展示组件
             application   用户创建
             details    详情页
             el-alert  弹出框
             header   头部
             home  首页
             list  渲染的列表
             order 排序
             over  加班/休假 tab切换
             tab  待处理  已发起 已处理 tab 的切换

  src/directives    指令
  src/fonts         icon 图标         
  src/plugins       插件
  src/router        路由 
  src/scss          封装的 common minix
  src/ store        vuex
  src/utils         工具
                    Alert 弹窗 封装
                    flexble 自适应
                    request axios 二次封装

   src/views       容器组件
             login  登录
             APP.vue   根组件
             main.js   入口文件         

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

                     