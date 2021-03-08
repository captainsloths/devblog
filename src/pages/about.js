import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        Just another software developer trying to find a new job. It's rough, like this blog's styling.
        Check out my resume! It's super cool. <a href="https://www.dropbox.com/s/13c11dlt9fm2lp1/Resume_Current.pdf?dl=0">Download</a>
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