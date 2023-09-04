import styled from 'styled-components';

const StudyNavWrap = styled.section`
  div[class='StudyNavWrap'] {
    display: flex;
    width: 1200px;
    height: 60px;
    margin: 10px auto;
    box-shadow: 0 0 2px 1px #dcdee0;
  }
  div[class='StudyNavWrap_ul'] {
    width: 900px;
    height: 60px;
  }
  ul[class='S_ul'] {
    display: flex;
    text-align: center;
    line-height: 60px;
  }
  ul[class='S_ul'] li h3 {
    color: #00a4ff;
  }
  ul[class='S_ul'] li:nth-child(2n) {
    align-self: center;
    width: 1px;
    height: 20px;
    background-color: #bfbfbf;
  }
  ul[class='S_ul'] li:nth-child(2n-1) {
    padding: 0 35px;
  }
  div[class='StudyNavWrap_div'] {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 300px;
    height: 60px;
  }
  div[class='StudyNavWrap_div'] h4 {
    padding-right: 25px;
  }
  div[class='StudyNavWrap_div'] h4 a {
    color: #00a4ff;
  }
`;

export default StudyNavWrap;
