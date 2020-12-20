/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\FontEnd\\博客测试\\MyBlog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-42485c56",
    path: "/about/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-42485c56").then(next)
    },
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    path: "/views/about/",
    redirect: "/about/"
  },
  {
    name: "v-1072a816",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1072a816").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-219f4fa2",
    path: "/views/%E5%89%8D%E7%AB%AFfront-end/Vuepress%E5%9F%BA%E4%BA%8EValine%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-219f4fa2").then(next)
    },
  },
  {
    path: "/views/前端front-end/Vuepress基于Valine的评论功能.html",
    redirect: "/views/%E5%89%8D%E7%AB%AFfront-end/Vuepress%E5%9F%BA%E4%BA%8EValine%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD.html"
  },
  {
    path: "/views/前端front-end/Vuepress基于Valine的评论功能.html",
    redirect: "/views/%E5%89%8D%E7%AB%AFfront-end/Vuepress%E5%9F%BA%E4%BA%8EValine%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD.html"
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-079695c8",
    path: "/tag/Vuepress/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-079695c8").then(next)
    },
    meta: {"pid":"tags","id":"Vuepress"}
  },
  {
    path: "/tag/Vuepress/index.html",
    redirect: "/tag/Vuepress/"
  },
  {
    name: "v-0e0479b5",
    path: "/tag/教程/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-0e0479b5").then(next)
    },
    meta: {"pid":"tags","id":"教程"}
  },
  {
    path: "/tag/教程/index.html",
    redirect: "/tag/教程/"
  },
  {
    name: "v-70f580b1",
    path: "/categories/前端front-end/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-70f580b1").then(next)
    },
    meta: {"pid":"categories","id":"前端front-end"}
  },
  {
    path: "/categories/前端front-end/index.html",
    redirect: "/categories/前端front-end/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]