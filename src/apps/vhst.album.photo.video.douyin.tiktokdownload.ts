import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'vhst.album.photo.video.douyin.tiktokdownload',
  name: 'Douyin - TikTok Downloader No Logo',
  groups: [
    {
      key: 1,
      name: '[ChangeMe]规则名称-2025-07-16 10:47:52',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches: '@Button < View <2 View <2 View < View < View < View < WebView < WebView < FrameLayout <2 RelativeLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/21246397',
        },
      ],
    },
  ],
});
