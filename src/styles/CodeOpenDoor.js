import styled from 'styled-components';

const CodeOpenDoorWrap = styled.section`
  div[class='CodeOpenDoorWrap'] {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 45px;
    margin: 20px auto;
    margin-bottom: 0px;
  }
  div[class='CodeOpenDoorWrap'] h3 {
    width: 80px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    color: #494949;
  }
  div[class='CodeOpenDoorWrap'] h5 {
    width: 80px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }
  div[class='CodeOpenDoorWrap_div'] {
    width: 730px;
    height: 45px;
  }
  div[class='CodeOpenDoorWrap_div'] ul {
    display: flex;
    text-align: center;
    line-height: 45px;
  }
  div[class='CodeOpenDoorWrap_div'] ul li {
    padding: 0 70px;
  }
  div[class='CodeOpenDoorWrap_div'] ul li:first-child {
    padding-left: 100px;
    color: #00a4ff;
  }
  div[class='CodeOpenDoorWrap-01'] {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 395px;
    margin: 0 auto;
  }
  div[class='C01_left'] {
    width: 230px;
    height: 390px;
  }
  div[class='C01_left'] img {
    width: 100%;
    height: 100%;
  }
  div[class='C01_right'] {
    width: 960px;
    height: 390px;
  }
  div[class='C01_right_top'] {
    width: 960px;
    height: 100px;
  }
  div[class='C01_right_bottom'] {
    margin-top: 20px;
    width: 960px;
    height: 270px;
  }
  div[class='C01_right_top'] img {
    width: 100%;
    height: 100%;
  }
  ul[class='Crb_ul'] {
    display: flex;
    justify-content: space-between;
  }
  ul[class='Crb_ul'] li {
    width: 230px;
    height: 270px;
    background-color: #ffffff;
    margin-right: 15px;
    text-align: center;
    box-shadow: 0 0 2px 1px #dcdee0;
  }
  ul[class='Crb_ul'] li:last-child {
    margin-right: 0;
  }
  ul[class='Crb_ul'] li img {
    width: 100%;
  }
  ul[class='Crb_ul'] li p:nth-of-type(1) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 25px 15px;
  }
  ul[class='Crb_ul'] li p:nth-of-type(2) {
    margin: 25px 15px;
  }
  ul[class='Crb_ul'] li p span {
    color: #ff7c2d;
  }
`;

export default CodeOpenDoorWrap;
