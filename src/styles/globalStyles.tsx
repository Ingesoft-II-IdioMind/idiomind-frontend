import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    width: 100vw;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    font-size: clamp(13px, 1.2vw, 16px);
  }
  
  body {
    background-color: $main-color;
    margin: 0px;
    padding: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  ::-webkit-scrollbar {
    position: fixed;
    width: 10px; /* You can change the background color */}
::-webkit-scrollbar-track {
    background: $main-color; /* You can change the background color */
    border-radius: 16px;
}
    ::-webkit-scrollbar-thumb {
    background: $primary-color; /* You can change the thumb color */
    border-radius: 16px;}
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
    
  
  
  h1 {
    margin: 0px;
    font-family: $main-font;
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    line-height: 100%; /* 64px */
    letter-spacing: -1.28px;
    color: $primary-color;
    padding: 1.5rem 0px;
  }
  
  h2 {
    margin: 0px;
    font-family: $main-font;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 95.5%; /* 45.84px */
    text-align: start;
    color: $primary-color;
    padding: 16px 0px;
  }
  
  h3 {
    margin: 0px;
    font-family: $main-font;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    //line-height: 95.5%; /* 38.2px */
  }
  
  h4 {
    margin: 0px;
    font-family: $main-font;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    //line-height: 95.5%; /* 30.56px */
  }
  
  h5 {
    margin: 0px;
    font-family: $main-font;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    //line-height: 95%; /* 22.8px */
  }
  
  h6 {
    margin: 0px;
    font-family: $main-font;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin: 0px;
    //line-height: 95%; /* 19px */
  }
  
  p {
    margin: 0px;
    font-family: $second-font;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    //line-height: 101.5%; /* 16.24px */
  }
  
  a {
    margin: 0px;
    color: $primary-color;
    font-style: none;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    padding: 0px $lateral-padding;
  }
  
  .ST {
    font-family: $second-font;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 118.3%;
    text-align: start;
  }
  
  .BB {
    font-family: $second-font;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 118.3%;
    text-align: start;
  }
  
  ul, ol {
    list-style: none;
  }
  
  .center{
    text-align: center;
  }
`;
