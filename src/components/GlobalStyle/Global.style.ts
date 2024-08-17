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
    background-color: #3A5199;
    }
   
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  background-color: #e3e2df;
  border-radius: 0px 0px 12px 12px;
`;
