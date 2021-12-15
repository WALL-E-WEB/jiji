


module.exports = {
    head: [
        [
            'link',
            { type: 'text/css',rel:'stylesheet', href: '/css/sidebar.css' }
        ],
        [
            'script',
            { type: 'text/javascript', src: '/js/side.js' }
        ]
    ],
    // plugin: [require('jquery')],
    themeConfig: {
        sidebar: 'auto',
        sidebarDepth: 5,
        displayAllHeaders: false,
        nav: [
            { text: 'dd', link: '/home' }
        ],
        navbar: [
            // NavbarItem
            { text: '首页', link: '/' },
            // NavbarGroup
            {
                text: '学习记',
                children: [
                    { text: '1.HTML', link: '/study/html/html.md' },
                    { text: '2.CSS', link: '/css' },
                    { text: '3.JS', link: '/study/js/javascript.md' },
                    { text: '4.ES6', link: '/es6' },
                    { text: '5.JQuery', link: '/jQuery' },
                    { text: '6.Ajax/Fetch', link: '/fetch' },
                    { text: '7.Git', link: '/git' },
                    { text: '8.Canvas', link: '/canvas' },
                    { text: '9.Node', link: '/node' },
                    {
                        text: '10.Vue', children: [{ text: 'vue 2x', link: '/vue2' }, { text: 'vue 3x', link: '/vue3' },]
                    },
                    { text: '11.React', link: '/react' },
                    { text: '12.Webpack', link: '/webpack' },
                    { text: '13.TypeScript', link: '/typeScript' },

                    { text: '14.设计模式', link: '/webpack' },
                    { text: '15.移动端', link: '/webpack' },
                    { text: '16.前端性能', link: '/webpack' },
                    { text: '17.ESLint', link: '/flutter' },
                    { text: '18.Jest', link: '/jest' },
                    { text: '19.Dart/Flutter', link: '/flutter' },
                    { text: '20.Android', link: '/android' },
                    { text: '21.Ios', link: '/ios' },


                ],
            },
            { text: '项目记', link: '/prod' },
            { text: '读书记', link: '/book' },
            { text: '资源记', link: '/resource' },
            { text: '另辟蹊径记', link: '/money' },
        ],
    },
    markdown: {
        

        lineNumbers: true,

        extractHeaders:{
            level:[2,3,4,5]
        },
        
        includeLevel: [1, 2, 3],

        },
        toc:false,
    }