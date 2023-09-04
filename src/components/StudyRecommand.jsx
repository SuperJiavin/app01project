import React, { memo } from 'react';
import StudyRecommandWrap from '@/styles/StudyRecommand.js';

const StudyRecommand = memo(() => {
  return (
    <StudyRecommandWrap>
      <div className='StudyRecommand'>
        <div className='StudyRecommandWrap'>
          <h3>精品推荐</h3>
          <h5>
            <a href='javascript:;'>查看全部</a>
          </h5>
        </div>
        <div className='StudyRecommandWrap_list'>
          <ul className='Sl_ul'>
            <li>
              <img
                src={require('@/assets/images/recommond.png')}
                alt=''
              />
              <p>Android Hybrid APP开发实战 H5+原生！</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/recommond.png')}
                alt=''
              />
              <p>Android Hybrid APP开发实战 H5+原生！</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/recommond.png')}
                alt=''
              />
              <p>Android Hybrid APP开发实战 H5+原生！</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/recommond.png')}
                alt=''
              />
              <p>Android Hybrid APP开发实战 H5+原生！</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/recommond.png')}
                alt=''
              />
              <p>Android Hybrid APP开发实战 H5+原生！</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/recommond.png')}
                alt=''
              />
              <p>Android Hybrid APP开发实战 H5+原生！</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/recommond.png')}
                alt=''
              />
              <p>Android Hybrid APP开发实战 H5+原生！</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/recommond.png')}
                alt=''
              />
              <p>Android Hybrid APP开发实战 H5+原生！</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/recommond.png')}
                alt=''
              />
              <p>Android Hybrid APP开发实战 H5+原生！</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
            <li>
              <img
                src={require('@/assets/images/recommond.png')}
                alt=''
              />
              <p>Android Hybrid APP开发实战 H5+原生！</p>
              <p>
                <span>高级</span> • 1125人在学习
              </p>
            </li>
          </ul>
        </div>
      </div>
    </StudyRecommandWrap>
  );
});

export default StudyRecommand;
