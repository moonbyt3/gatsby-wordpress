import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Posts from "../templates/post";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>My WordPress Blog</h1>
      <div className="posts">
        <h4 className="posts__title">Blog Posts:</h4>
        <div className="posts-wrap">
          {data.allWordpressPost.edges.map(({ node }) => (
            <div>
              <h2>{node.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          content
          excerpt
          title
        }
      }
    }
  }
`