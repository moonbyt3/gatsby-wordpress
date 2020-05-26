import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <div className="posts">
        <h4 className="posts__title">Blog Posts:</h4>
        <div className="posts-wrap">
          {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.id}>
              <h2><Link to={`posts/${node.slug}`}>{node.title}</Link></h2>
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
          slug
        }
      }
    }
  }
`