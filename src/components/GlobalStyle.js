import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    height: 100%;
  }

  html {
    box-sizing: border-box;
  }

  body {
    word-break: break-word;
    background-color: #282c35;
    color: #fff;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
    margin: 0.5em 0;
    color: #fff;
  }
`
