import React from 'react'
import { css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import Favicon from '../components/FavIcon'
import GlobalStyle from '../components/GlobalStyle'

const TitleLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  border: none;

  &:hover {
    color: #aaa69d;
  }

  display: flex;
  font-weight: bolder;
  font-size: 1.2em;
`;

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Helmet>
        <title>Jezer Chilel</title>
        <meta property="og:title" content="Jezer Chilel" />
        <meta property="og:description" content="Personal Website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jzrchilel.github.io/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Jezer Chilel" />
        <meta name="twitter:description" content="Personal Website" />
        <meta name="twitter:creator" content="@isaac_jzr" />
      </Helmet>
      <Favicon />
      <GlobalStyle />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <TitleLink to="/">
          <img src="/favicon-32x32.png"></img>
          {data.site.siteMetadata.title}
        </TitleLink>
        <Link
          to="/blog/"
        >
          blog
        </Link>
      </div>
      {children}
    </div>
  )
}