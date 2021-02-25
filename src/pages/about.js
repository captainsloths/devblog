import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        Just another software developer trying to find a new job. It's rough, like this blog's styling.
      </p>
    </Layout>
  )
}
export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`