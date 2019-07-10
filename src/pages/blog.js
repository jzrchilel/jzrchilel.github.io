import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const DateSpan = styled.span`
  display: none;
  color: #218c74;
  margin-left: 0.5em;

  @media (min-width: 520px) {
    display: inline;
  }
`
const StyledBlogListing = styled.ul`
  list-style: none;
`
const StyledBlogItem = styled.li`
  margin-bottom: 0.5em;
`
const StyledBlogLink = styled(Link)`
  color: #f5cd79;
`

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  const postLinks = posts.map(post => {
    return (
      <StyledBlogItem key={post.node.fields.slug}>
        <StyledBlogLink to={post.node.fields.slug}>
          {post.node.frontmatter.title}
        </StyledBlogLink>
        <DateSpan>({post.node.frontmatter.date})</DateSpan>
      </StyledBlogItem>
    )
  })

  return (
    <Layout>
      <StyledBlogListing>{postLinks}</StyledBlogListing>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`