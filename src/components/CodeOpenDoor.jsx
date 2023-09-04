import React, { memo } from 'react';
import CodeOpenDoorWrap from '@/styles/CodeOpenDoor.js';

const CodeOpenDoor = memo(() => {
  return (
    <CodeOpenDoorWrap>
      <div className='CodeOpenDoorWrap'>
        <h3>精品推荐</h3>
        <div className='CodeOpenDoorWrap_div'>
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
      <div className='CodeOpenDoorWrap-01'>
        <div className='C01_left'>
          <img
            src={require('@/assets/images/rcopen_03.png')}
            alt=''
          />
        </div>
        <div className='C01_right'>
          <div className='C01_right_top'>
            <img
              src={require('@/assets/images/remd.png')}
              alt=''
            />
          </div>
          <div className='C01_right_bottom'>
            <ul className='Crb_ul'>
              <li>
                <img
                  src={require('@/assets/images/php03.jpg')}
                  alt=''
                />
                <p>Cocos2d-x 引擎源码中的纹理优化</p>
                <p>
                  <span>高级</span> • 1125人在学习
                </p>
              </li>
              <li>
                <img
                  src={require('@/assets/images/php03.jpg')}
                  alt=''
                />
                <p>Cocos2d-x 引擎源码中的纹理优化</p>
                <p>
                  <span>高级</span> • 1125人在学习
                </p>
              </li>
              <li>
                <img
                  src={require('@/assets/images/php03.jpg')}
                  alt=''
                />
                <p>Cocos2d-x 引擎源码中的纹理优化</p>
                <p>
                  <span>高级</span> • 1125人在学习
                </p>
              </li>
              <li>
                <img
                  src={require('@/assets/images/php03.jpg')}
                  alt=''
                />
                <p>Cocos2d-x 引擎源码中的纹理优化</p>
                <p>
                  <span>高级</span> • 1125人在学习
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CodeOpenDoorWrap>
  );
});

export default CodeOpenDoor;
