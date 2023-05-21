/*
const fs = require('fs');
const path = require('path');

var dirpath = "./src"
var dirs = fs.readdirSync(dirpath).filter((f) => {
  if(fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()){
    if(f.charAt(0) != '.') return true
  }
  return false
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
*/

module.exports = {
    title: '土木とプログラミング',
    lang: 'ja',
    description: '土木をプログラミングで解く.',
    themeConfig: {    
        nav: [
            { text: 'note', link: 'https://note.com/sasaco_corp'},
            { text: 'twitter', link: 'https://twitter.com/sasaco_corp' },
            { text: 'YouTube', link: 'https://www.youtube.com/channel/UCHt4hzVJd95-m-f0r8YSCSA' },
        ],
        sidebar: "auto",
        sidebarDepth: 2,
        displayAllHeaders: true,
    },
    plugins: [
      '@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      },
      '@vuepress/blog',
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
    ],
    dest: 'docs/',
    base: '/'
}