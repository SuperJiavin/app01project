import React, { memo } from 'react';
import StudyFooterWrap from '@/styles/StudyFooter.js';

const StudyFooter = memo(() => {
  return (
    <StudyFooterWrap>
      <div className='StudyFooterWrap'>
        <div className='FooterWrap'>
          <div className='FooterWrap_left'>
            <h1>
              <img
                src={require('@/assets/weblogo.png')}
                alt=''
              />
            </h1>
            <p>
              学成在线致力于普及中国最好的教育它与中国一流大学和机构合作提供在线课程 © 2020年XTCG Inc.保留所有权利
              -沪ICP备15025210号
            </p>
            <h3>
              <a href='javascript'>下载APP</a>
            </h3>
          </div>
          <div className='FooterWrap_right'>
            <dl>
              <dt>关于网站</dt>
              <dd>管理团队</dd>
              <dd>工作机会</dd>
              <dd>客户服务</dd>
            </dl>
            <dl>
              <dt>新手指南</dt>
              <dd>如何注册</dd>
              <dd>如何选课</dd>
              <dd>如何毕业</dd>
            </dl>
            <dl>
              <dt>合作伙伴</dt>
              <dd>官方微信</dd>
              <dd>合作机构</dd>
              <dd>网上教学</dd>
            </dl>
          </div>
        </div>
      </div>
    </StudyFooterWrap>
  );
});

export default StudyFooter;
