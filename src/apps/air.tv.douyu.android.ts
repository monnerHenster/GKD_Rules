import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'air.tv.douyu.android',
  name: '斗鱼',
  groups: [
    {
      key: 1,
      name: '[ChangeMe]规则名称-2025-08-04 16:22:55',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.douyu.module.home.pages.main.MainActivity',
          matches: '[vid="ac9"]',
          snapshotUrls: 'https://i.gkd.li/i/21573461',
        },
      ],
    },
    
    {
      key: 2,
      name: '[ChangeMe]规则名称-2025-08-05 22:00:37',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.douyu.module.home.pages.main.MainActivity',
          matches: '[vid="ahb"]',
          snapshotUrls: 'https://i.gkd.li/i/21601453',
        },
      ],
    },
  ],
});
