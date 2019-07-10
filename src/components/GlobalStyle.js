import React from 'react'
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
    font-family: 'Roboto Mono', monospace;
    word-break: break-word;
    background-color:  #282c35;
    color: #fff;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
    margin: 0.5em 0;
    color: #fff;
  }

  ul {
    padding: 0;
    list-style: square;
  }

  a {
    text-decoration: none;
    color: #ffb142;
    &:hover {
      color: #ccae62;
      border-color: #ccae62;
    }
  }

`