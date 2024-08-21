import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       
    }
    
    button,
    ._btn {
        cursor: pointer;
        outline: none;
    }
    
    ul li {
        list-style: none;
    }

    html,body {
    width: 100%;
    height: 100%;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #000000;   
    background: linear-gradient(to bottom, #181726, #3A5199, #4D858D);
    overflow: hidden;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1260px;
  margin: 0 auto;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 12px;
  padding-left: 12px;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 40px;
    border: 4px solid white;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: white;
  }

  scrollbar-height: 100px;
  scrollbar-width: thin;
  scrollbar-color: white transparent;
`;
