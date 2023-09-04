import React, { memo } from 'react';
import StudyBannerWrap from '@/styles/StudyBanner.js';

const StudyBanner = memo(() => {
  return (
    <StudyBannerWrap>
      <div className='StudyBanner'>
        <div className='StudyBanner_bg'>
          <div className='StudyBanner_bg_div01'>
            <ul className='sbg_div01_ul'>
              <li>
                <a href='javascript:;'>前端开发</a>
              </li>
              <li>
                <a href='javascript:;'>后端开发</a>
              </li>
              <li>
                <a href='javascript:;'>移动开发</a>
              </li>
              <li>
                <a href='javascript:;'>人工智能</a>
              </li>
              <li>
                <a href='javascript:;'>商业预测</a>
              </li>
              <li>
                <a href='javascript:;'>大数据</a>
              </li>
              <li>
                <a href='javascript:;'>运维测试</a>
              </li>
              <li>
                <a href='javascript:;'>UI设计</a>
              </li>
              <li>
                <a href='javascript:;'>产品</a>
              </li>
            </ul>
          </div>
          <div className='StudyBanner_bg_div02'>
            <h1>我的课程表</h1>
          </div>
        </div>
      </div>
    </StudyBannerWrap>
  );
});

export default StudyBanner;
