const fs = require("fs");
const path = require("path");
const rootpath = path.dirname(__dirname);

/**
* 文件助手: 主要用于读取当前文件下的所有目录和文件
*/
var studyNav = [];
var resourcesNav = [];
var projectNav = [];
var moneyNav = [];
var bookNav = [];
var tomorrowNav = [];



function getFileName(data, fileName) {
    let _filePath = `docs/${fileName}`;
    var rpath = path.resolve(_filePath);
    fs.readdirSync(rpath).forEach(file => {
        if (file != '.DS_Store') {
            var fullpath = rpath + "/" + file;
            var nav = { text: file.split('.')[0], link: '' };
            var fileinfo = fs.lstatSync(fullpath);
            if (fileinfo.isFile) {
                nav.link = `/${fileName}/${file}`
            }
            if (fileinfo.isDirectory()) {
                var fileList = fs.readdirSync(path.resolve(_filePath + file));
                if (fileList[0] != '.DS_Store') {
                    nav.link = `/${fileName}/${file}/${fileList[0]}`;
                }
                if (fileList.length > 1) {
                    nav.children = [];
                    fileList.forEach(file2 => {
                        if (file2 != '.DS_Store') {
                            nav.children.push({ text: file2.split('.')[0], link: `/${fileName}/${file}/${file2}` });
                        }
                    });
                } else {
                    fileList.forEach(file2 => {
                        nav.link = `/${fileName}/${file}/${file2}`;
                    });
                }
            }
            data.push(nav);
        }
    });
}
var rpath = path.resolve('docs/study');
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
                        nav.children.push({ text: file2.split('.')[0], link: `/study/${file}/${file2}` });
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

function logATag(data) {
    data.forEach((item, index) => {
        console.log(`> + <a href=".${item.link}" target="_blank">${item.text}</a>`);
        if (item.children) {
            logATag(item.children);
        }
    })
}

// logATag(studyNav);


getFileName(resourcesNav, 'resources');
getFileName(projectNav, 'project');
getFileName(moneyNav, 'money');
getFileName(bookNav, 'book');
console.log('bookNav',bookNav);
getFileName(tomorrowNav, 'tomorrow');

module.exports = {
    title: 'Walle 记记',
    description: 'walle ',
    base: '/jiji/',

    plugin: [
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
        lastUpdated: true,
        lastUpdatedText: '最后更新时间',
        editLink: false,
        contributors: false,
        sidebar: 'auto',
        sidebarDepth: 5,
        repo: 'https://github.com/WALL-E-WEB',
        displayAllHeaders: true,
        navbar: [
            { text: '首页', link: '/' },
            { text: '学习记', children: studyNav },
            { text: '项目记', children: projectNav },
            { text: '读书记', link: '/book' ,children:bookNav},
            { text: '资源记', link: '/resource', children: resourcesNav },
            { text: '明天记', link: '/tomorrow', children: tomorrowNav },
            { text: '另辟蹊径记', link: '/money',children: moneyNav},
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