import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import { series } from './config/series'
import { navbar } from './config/navbar'
import { bulletin } from './config/bulletin'
import { valineConfig } from './config/valineConfig'

export default defineUserConfig<DefaultThemeOptions>({
  // 首页左上角标题
  title: '八云家的记事簿',
  // 描述
  description: '用于记录自身学习笔记、常用工具、实用的网页等',
  theme: 'reco',
  base: "/Blog-StudyNotes/",
  themeConfig: {
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'Sue-52',
    authorAvatar: '/avatar.jpg',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: '/',
    lastUpdatedText: '',
    // 自动设置分类
    // autoSetCategory: true,
    // 自动将首页、分类和标签添加至头部导航条
    // autoAddCategoryToNavbar: true,
    // series 为原 sidebar
    series,
    // 顶部导航栏
    navbar,
    // 右侧公告栏
    bulletin,
    // valineConfig 配置与 1.x 一致
    valineConfig,
  },
  plugins: [
    [
      '@renovamen/vuepress-plugin-katex', {
        'throwOnError': false,
        'errorColor': '#cc0000',
      }
    ],

  ]
  // debug: true,
})
