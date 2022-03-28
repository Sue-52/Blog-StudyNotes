module.exports = {
  "title": "Blog-StudyNotes",
  "description": "日常学习笔记- HTML5、CSS3、JavaScript、React、Node等知识笔记",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  // 主题设置
  "theme": "reco",
  // 博客主题配置
  "themeConfig": {
    // 顶部导航栏配置
    "nav": [
      // 首页
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      // 时间线
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // 文档列表
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      // 关于
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    // 侧边栏
    "sidebar": {
      // 分级 示例
      // "/docs/theme-reco/": [
      //   {
      //     title: "theme-reco",
      //     children: [""]
      //   }
      // ],
      "/docs/01.HTML5/": [
        "",
        "01.jichu",
      ]
    },
    "type": "blog",
    "blogConfig": {
      // 默认文案 “分类”
      "category": {
        "location": 5,
        "text": "Category"
      },
      // 默认文案 “标签”
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "Sue-52",
        "desc": "My Github address",
        "email": "1219243947@qq.com",
        "link": "https://github.com/Sue-52"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    // 博客 logo
    "logo": "/logo.png",
    // 搜索栏
    "search": true,
    // 搜索最长提示
    "searchMaxSuggestions": 10,
    // 过去更新时间
    "lastUpdated": "Last Updated",
    // 作者
    "author": "八云家的记事簿",
    // 作者头像
    "authorAvatar": "/avatar.jpg",
    // 备案
    "record": "八云家的记事簿",
    // 开始时间
    "startYear": "2022",
    docsDir: "/",
  },
  "markdown": {
    "lineNumbers": true
  }
}