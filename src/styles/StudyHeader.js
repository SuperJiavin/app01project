import styled from 'styled-components';

const StudyHeaderWrap = styled.section`
  div[class='section'] {
    display: flex;
    align-items: center;
    width: 1200px;
    height: 100px;
    margin: 0 auto;
  }
  div[class='section_header'] {
    display: flex;
    width: 1200px;
    height: 40px;
    margin: 0 auto;
  }
  div[class='sh_logo'] {
    width: 195px;
    height: 40px;
    background: url(${require('@/assets/weblogo.png')}) no-repeat center;
    background-size: contain;
  }
  div[class='sh_nav'] {
    width: 340px;
    height: 40px;
    margin-left: 75px;
  }
  div[class='sh_input'] {
    display: flex;
    width: 410px;
    height: 40px;
  }
  div[class='sh_login'] {
    width: 182px;
    height: 40px;
  }
  ul[class='sh_nav_ul'] {
    display: flex;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }
  ul[class='sh_nav_ul'] li {
    padding: 0 20px;
  }
  ul[class='sh_nav_ul'] li:hover a {
    border-bottom: 3px solid #00a4ff;
    color: #00a4ff;
  }
  div[class='sh_input'] input {
    width: 360px;
    height: 40px;
    padding-left: 10px;
    color: #bfbfbf;
    outline: none;
    border: none;
    border: 1px solid #00a4ff;
  }
  div[class='sh_input'] button {
    width: 50px;
    height: 40px;
    border: none;
    border: 1px solid #00a4ff;
    border-left: none;
    cursor: pointer;
  }
`;

export default StudyHeaderWrap;
