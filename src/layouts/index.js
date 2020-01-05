import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Favicon from '../components/FavIcon'
import GlobalStyle from '../components/GlobalStyle'

const TitleLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  border: none;
  outline: none;

  &:hover {
    color: #aaa69d;
  }

  display: flex;
  font-weight: bolder;
  font-size: 1.2em;
`;

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 2.88rem;
  padding-top: 2.16rem;

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding: 40px;
  }
`

const StyledLink = styled(Link)`
  color: #ffb142;
  outline: none;
`

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
`

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
    <StyledLayout>
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
          <img src="/favicon-32x32.png" alt="Jezer Logo"></img>
          {data.site.siteMetadata.title}
        </TitleLink>
        <StyledLink to="/blog/">
          blog
        </StyledLink>
      </div>
      {children}
      <CopyRight>
        &copy; {new Date().getFullYear()} Jezer Chilel 
      </CopyRight>
    </StyledLayout>
  )
}
