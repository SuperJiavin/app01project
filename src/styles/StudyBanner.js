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
  div[class='StudyBanner_bg_div02'] h1 {
    width: 230px;
    height: 45px;
    background-color: #9bceea;
    text-align: center;
    line-height: 45px;
    color: #ffffff;
  }
`;

export default StudyBannerWrap;
