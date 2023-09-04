import React, { memo } from 'react';
import StudyNavWrap from '@/styles/StudyNav.js';

const StudyNav = memo(() => {
  return (
    <StudyNavWrap>
      <div className='StudyNavWrap'>
        <div className='StudyNavWrap_ul'>
          <ul className='S_ul'>
            <li>
              <h3>精品推荐</h3>
            </li>
            <li></li>
            <li>jquery</li>
            <li></li>
            <li>mysql</li>
            <li></li>
            <li>javaweb</li>
            <li></li>
            <li>javascript</li>
            <li></li>
            <li>javaweb</li>
            <li></li>
            <li>javascript</li>
          </ul>
        </div>
        <div className='StudyNavWrap_div'>
          <h4>
            <a href='javascript'>修改兴趣</a>
          </h4>
        </div>
      </div>
    </StudyNavWrap>
  );
});

export default StudyNav;
