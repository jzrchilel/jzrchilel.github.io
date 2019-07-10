import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const StyledPostDate = styled.time`
  color: #218c74;
  font-weight: 400;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: right;
  font-size: 15px;
`

const StylePostTitle = styled.h1`
  color: #f5cd79;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <StylePostTitle>{post.frontmatter.title}</StylePostTitle>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <StyledPostDate>{post.frontmatter.date}</StyledPostDate>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html,
      frontmatter {
        title
        date
      }
    }
  }
`