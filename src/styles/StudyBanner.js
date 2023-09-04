import styled from 'styled-components';

const StudyBannerWrap = styled.section`
  div[class='StudyBanner'] {
    height: 420px;
    background-color: #1c036c;
  }
  div[class='StudyBanner_bg'] {
    position: relative;
    width: 1200px;
    height: 420px;
    margin: 0 auto;
    background-image: url(${require('@/assets/images/banner.png')});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  div[class='StudyBanner_bg_div01'] {
    width: 190px;
    height: 420px;
    background-color: rgba(20, 2, 75, 0.5);
  }
  ul[class='sbg_div01_ul'] li a {
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
  }
  ul[class='sbg_div01_ul'] li {
    padding: 13px 20px;
  }
  ul[class='sbg_div01_ul'] li a {
    display: block;
  }
  ul[class='sbg_div01_ul'] li:hover a {
    color: #00b4ff;
  }
  div[class='StudyBanner_bg_div02'] {
    position: absolute;
    top: 50px;
    right: 0;
    width: 230px;
    height: 300px;
    background-color: #ffffff;
  }
  h1[class='Sbg_div02_h1'] {
    width: 230px;
    height: 45px;
    background-color: #9bceea;
    text-align: center;
    line-height: 45px;
    color: #ffffff;
  }
  ul[class='Sbg_div02_ul'] li {
    width: 230px;
    height: 60px;
    padding-top: 10px;
    border-bottom: 1px solid #eaeaea;
    text-align: center;
  }
  ul[class='Sbg_div02_ul'] li h3 {
    font-weight: normal;
    color: #4e4e4e;
  }
  ul[class='Sbg_div02_ul'] li span {
    color: #bdbdbd;
    font-size: 12px;
  }
  ul[class='Sbg_div02_ul'] li:last-child {
    display: flex;
    justify-content: center;
    border-bottom: none;
  }
  ul[class='Sbg_div02_ul'] li h1 {
    width: 200px;
    height: 45px;
    border: 1px solid #22b0ff;
    color: #22b0ff;
    text-align: center;
    line-height: 45px;
  }
  ul[class='Sbg_div02_ul'] li h1 a {
    color: #22b0ff;
  }
`;

export default StudyBannerWrap;
