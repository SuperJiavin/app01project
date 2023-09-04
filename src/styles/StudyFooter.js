import styled from 'styled-components';

const StudyFooterWrap = styled.section`
  div[class='StudyFooterWrap'] {
    margin-top: 40px;
    height: 260px;
    background-color: #ffffff;
  }
  div[class='FooterWrap'] {
    display: flex;
    width: 1200px;
    height: 260px;
    margin: 0 auto;
  }
  div[class='FooterWrap_left'] {
    width: 470px;
    height: 260px;
    padding: 35px 0;
  }
  div[class='FooterWrap_left'] h1 {
    width: 200px;
    height: 45px;
  }
  div[class='FooterWrap_left'] p {
    font-size: 12px;
    margin: 15px 0;
  }
  div[class='FooterWrap_left'] h3 {
    width: 130px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 2px solid #00a4ff;
  }
  div[class='FooterWrap_left'] h3 a {
    color: #00a4ff;
  }
  div[class='FooterWrap_right'] {
    display: flex;
    justify-content: space-between;
    width: 730px;
    height: 260px;
  }
  div[class='FooterWrap_right'] dl {
    width: 160px;
    height: 170px;
    margin-left: 75px;
    margin-top: 30px;
    text-align: center;
  }
  div[class='FooterWrap_right'] dl dt {
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 15px;
  }
  div[class='FooterWrap_right'] dl dd {
    padding: 10px 0;
  }
`;

export default StudyFooterWrap;
