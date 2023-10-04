import React, { memo } from 'react';
import StudyHeaderWrap from '@/styles/StudyHeader.js';
import axios from 'axios';

const StudyHeader = memo(() => {
  const btnClick = () => {
    const token = 'qwerabsdefghijk';
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8080/api/getbook',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <StudyHeaderWrap>
      <div className='section'>
        <div className='section_header'>
          <div className='sh_logo'></div>
          <div className='sh_nav'>
            <ul className='sh_nav_ul'>
              <li>
                <a href='javascript:;'>首页</a>
              </li>
              <li>
                <a href='javascript:;'>课程</a>
              </li>
              <li>
                <a href='javascript:;'>职业规划</a>
              </li>
            </ul>
          </div>
          <div className='sh_input'>
            <input
              type='text'
              placeholder='请输入关键字'
            />
            <button onClick={(e) => btnClick()}>按钮</button>
          </div>
          <div className='sh_login'>
            <img
              src={require('@/assets/images/login.png')}
              alt=''
            />
          </div>
        </div>
      </div>
    </StudyHeaderWrap>
  );
});

export default StudyHeader;
