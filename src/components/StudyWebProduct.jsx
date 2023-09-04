import React, { memo } from 'react';
import StudyWebProductWrap from '@/styles/StudyWebProduct.js';

const StudyWebProduct = memo(() => {
  return (
    <StudyWebProductWrap>
      <div className='StudyWebProductWrap'>
        <div className='StudyWebProductWrap_top'>
          <h3>前端开发工程师</h3>
          <div className='StudyWebProductWrap_top_div'>
            <ul>
              <li>热门</li>
              <li>初级</li>
              <li>中级</li>
              <li>高级</li>
            </ul>
          </div>
          <h5>
            <a href='javascript:;'>查看全部</a>
          </h5>
        </div>
        <div className='StudyWebProductWrap_bottom'>
          <ul className='SPW_bottom_ul'>
            <li>
              <img
                src={require('@/assets/images/micro.png')}
                alt=''
              />
              <p>微软人工智能-数据分析平台</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/micro.png')}
                alt=''
              />
              <p>微软人工智能-数据分析平台</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/micro.png')}
                alt=''
              />
              <p>微软人工智能-数据分析平台</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/micro.png')}
                alt=''
              />
              <p>微软人工智能-数据分析平台</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/micro.png')}
                alt=''
              />
              <p>微软人工智能-数据分析平台</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
          </ul>
        </div>
      </div>
    </StudyWebProductWrap>
  );
});

export default StudyWebProduct;
