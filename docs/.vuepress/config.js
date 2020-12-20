const themeConfig = require('./config/theme/index.js')
const navConf = require('./config/nav/index')
const sidebarConf = require('./config/sidebar/index')
const pluginsConf = require('./config/plugins/index')
module.exports = {
    title: "JNUJun2019",
    description: '路漫漫其修远兮，吾将上下而求索',
    // dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["meta", { name: "robots", content: "all"}],
        ["meta", { name: "author", content: "HJG"}],
        ['meta', { name: 'keywords', content: 'hjg,前端,后台,vue,blog,vuepress-blog' }],
    ],
    theme: 'reco',
    base:'/blog/',
    themeConfig: {
        type: 'blog',
        smoothScroll: true,
        // 博客设置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            }
        },
        valineConfig: {
            appId: 'A9tLRTsEpIuTIVQapnEGWesu-gzGzoHsz',// your appId
            appKey: 'P4YaFoAHSpPHc6c9zdMu6zt1', // your appKey
            recordIP:true,
            placeholder:'填写邮箱地址可以及时收到回复噢...',
            visitor:true,
        },
        authorAvatar: '/avatar.png',
        // 最后更新时间
        lastUpdated: '上次更新时间', // string | boolean
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        docsBranch: 'source',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页！',
        // 作者
        author: 'HJG',
        // 项目开始时间
        startYear: '2020',
        nav: navConf,
        // sidebar: sidebarConf,
        // logo: '/head.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        sidebar: 'auto',
        // 备案
        // record: '粤ICP备xxxxxxx号-1',
        // recordLink: 'http://www.beian.miit.gov.cn/',
        // cyberSecurityRecord: '粤公网安备 xxxxxxx号',
        // cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=xxxxxxxxxxxxxx',
        friendLink: [
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: '1156743527@qq.com',
                link: 'https://www.recoluan.com'
            },
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            }
        ]
    },
    markdown: {
        lineNumbers: true
    },
    plugins: pluginsConf
}
