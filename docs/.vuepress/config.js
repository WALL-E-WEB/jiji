const fs = require("fs");
const path = require("path");
const rootpath = path.dirname(__dirname);

/**
* 文件助手: 主要用于读取当前文件下的所有目录和文件
*/
var studyNav = [];
var rpath = path.resolve('docs/study');
console.log(path.resolve('docs/study'));
fs.readdirSync(path.resolve('docs/study')).forEach(file => {
    if (file != '.DS_Store') {
        var fullpath = rpath + "/" + file;
        var nav = { text: file, link: '' };
        var fileinfo = fs.lstatSync(fullpath);
        if (fileinfo.isFile) {

            nav.link = `/study/${file}`
        }
        if (fileinfo.isDirectory()) {
            var fileList = fs.readdirSync(path.resolve('docs/study/' + file));
            if (fileList[0] != '.DS_Store') {
                nav.link = `/study/${file}/${fileList[0]}`;
            }
            if (fileList.length > 1) {
                nav.children = [];
                fileList.forEach(file2 => {
                    if (file2 != '.DS_Store') {
                        nav.children.push({ text: file2, link: `/study/${file}/${file2}` });
                    }
                });
            } else {
                fileList.forEach(file2 => {

                    nav.link = `/study/${file}/${file2}`;

                });
            }


        }
        studyNav.push(nav);
    }
});


studyNav = studyNav.sort((a, b) => (+a.text.split('.')[0]) > (+b.text.split('.')[0]) ? 1 : -1);

console.log(studyNav);
module.exports = {
    base:'/jiji/',
    plugin:[
        // require('../utils/side.js'),
        {
            name: 'root-component-setup',
            clientAppRootComponentFiles: path.resolve(__dirname, './RootComponent.vue'),
          }
    ],
    configureWebpack: {
        resolve: {
          alias: {
            '@img': 'public/images'
          }
        }
      },
    // build: {
    //     assetsPublicPath: './jiji/'
    // },
    head: [
        [
            'link',
            { type: 'text/css', rel: 'stylesheet', href: '/jiji/css/sidebar.css' }
        ],
        [
            'script',
            { type: 'text/javascript', src: '/jiji/js/side.js' }
        ]
    ],
    // plugin: [require('jquery')],
    themeConfig: {
        sidebar: 'auto',
        sidebarDepth: 5,
        repo: 'https://github.com/WALL-E-WEB/everyday',
        displayAllHeaders: false,
        nav: [
            { text: 'dd', link: '/home' }
        ],
        navbar: [
            { text: '首页', link: '/' },
            { text: '学习记', children: studyNav },
            { text: '项目记', link: '/prod' },
            { text: '读书记', link: '/book' },
            { text: '资源记', link: '/resource' },
            { text: '另辟蹊径记', link: '/money' },
        ],
    },
    markdown: {

        html: true,
        xhtmlOut: true,
        breaks: true,
        breaks: true,
        lineNumbers: true,
        toc: {
            includeLevel: [1, 2, 3, 4]
        },
        extractHeaders: {
            level: [2, 3, 4, 5]
        },

        includeLevel: [1, 2, 3],

    },
    toc: false,
}