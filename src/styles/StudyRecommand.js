import styled from 'styled-components';

const StudyRecommandWrap = styled.section`
  div[class='StudyRecommand'] {
    width: 1200px;
    margin: 20px auto;
  }
  div[class='StudyRecommandWrap'] {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 45px;
  }
  div[class='StudyRecommandWrap'] h3 {
    width: 80px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    color: #494949;
  }
  div[class='StudyRecommandWrap'] h5 {
    width: 80px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }
  div[class='StudyRecommandWrap'] h5 a {
    color: #a5a5a5;
  }
  ul[class='Sl_ul'] {
    display: flex;
    flex-wrap: wrap;
  }
  ul[class='Sl_ul'] li {
    width: 230px;
    height: 270px;
    background-color: #ffffff;
    margin-right: 12px;
  }
  ul[class='Sl_ul'] li:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: translate(1px, -3px);
    box-shadow: 3px 3px 2px 1px #dcdee0;
  }
  ul[class='Sl_ul'] li:nth-child(5n) {
    width: 232px;
    margin-right: 0;
  }
  ul[class='Sl_ul'] li:nth-child(n + 6) {
    margin-top: 10px;
  }
  ul[class='Sl_ul'] li img {
    width: 100%;
  }
  ul[class='Sl_ul'] li p:nth-of-type(1) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 25px 0;
    padding: 0 10px;
    text-align: center;
  }
  ul[class='Sl_ul'] li p:nth-of-type(2) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 25px 0;
    padding: 0 10px;
    text-align: center;
  }
  ul[class='Sl_ul'] li p:nth-of-type(2) span {
    color: #ff7c2d;
  }
`;

export default StudyRecommandWrap;
