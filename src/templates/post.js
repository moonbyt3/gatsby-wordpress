import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <div className="post">
        <div className="post-wrap">
            <div>
              <h2>{data.wordpressPost.title}</h2>
              <div 
                className="entry-content" 
                dangerouslySetInnerHTML={{ __html: data.wordpressPost.excerpt }} 
              />
            </div>
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    wordpressPost {
      title
      excerpt
    }
  }
`