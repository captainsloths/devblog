import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Contact({ data }) {
  return (
    <Layout>
      <h1>Contact {data.site.siteMetadata.title}</h1>
      <form method="post" action="#">
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
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
