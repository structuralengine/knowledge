const fs = require('fs');
const path = require('path');

var dirpath = "./docs"
var dirs = fs.readdirSync(dirpath).filter((f) => {
  return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()
})
var sidebarArray = ["/"].concat(dirs.map((dir) => {
  return {
    title: dir,
    collapsable: true,
    children: fs.readdirSync(dirpath + "/" + dir).map((childDir) => {
      return dirpath + "/" + dir + "/" + childDir
    })
  }
}))


module.exports = {
    title: '土木とプログラミング',
    lang: 'ja',
    description: '土木をプログラミングで解く.',
    config: (md) => {
        md.options.linkify = true
    },
    themeConfig: {    
        nav: [
            { text: 'note', link: 'https://note.com/sasaco_corp'},
            { text: 'twitter', link: 'https://twitter.com/sasaco_corp' },
            { text: 'YouTube', link: 'https://www.youtube.com/channel/UCHt4hzVJd95-m-f0r8YSCSA' },
        ],
        sidebar: sidebarArray
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ],
    dest: 'docs/',
    base: '/',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }
}