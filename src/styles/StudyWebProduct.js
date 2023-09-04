import styled from 'styled-components';

const StudyWebProductWrap = styled.section`
  div[class='StudyWebProductWrap'] {
    width: 1200px;
    height: 315px;
    margin: 20px auto;
  }
  div[class='StudyWebProductWrap_top'] {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 45px;
    margin: 20px auto;
    margin-bottom: 0px;
  }
  div[class='StudyWebProductWrap_top'] h3 {
    width: 120px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    color: #494949;
  }
  div[class='StudyWebProductWrap_top'] h5 {
    width: 80px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }
  div[class='StudyWebProductWrap_top_div'] {
    width: 730px;
    height: 45px;
  }
  div[class='StudyWebProductWrap_top_div'] ul {
    display: flex;
    text-align: center;
    line-height: 45px;
  }
  div[class='StudyWebProductWrap_top_div'] ul li {
    padding: 0 70px;
  }
  div[class='StudyWebProductWrap_top_div'] ul li:first-child {
    padding-left: 100px;
    color: #00a4ff;
  }
  div[class='StudyWebProductWrap_bottom'] {
    width: 1200px;
    height: 270px;
  }
  ul[class='SPW_bottom_ul'] {
    display: flex;
  }
  ul[class='SPW_bottom_ul'] li {
    width: 235px;
    height: 270px;
    background-color: #fff;
    margin-right: 10px;
    text-align: center;
    box-shadow: 0 0 2px 1px #dcdee0;
  }
  ul[class='SPW_bottom_ul'] li:nth-child(5) {
    margin-right: 0;
  }
  ul[class='SPW_bottom_ul'] li img {
    width: 100%;
  }
  ul[class='SPW_bottom_ul'] li p:nth-of-type(1) {
    margin: 25px 20px;
  }
  ul[class='SPW_bottom_ul'] li p span {
    color: orange;
  }
`;

export default StudyWebProductWrap;
