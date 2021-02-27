import React from "react"
//import Button from 'react-bootstrap'
import { css } from "@emotion/react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Contact({ data }) {
  return (
    <Layout>
      <h1>Contact {data.site.siteMetadata.title}</h1>
      <div
        css={css`
          padding-top: 1.5em;
        `}
      >
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <label>
            Name
            <div
              css={css`
                padding-bottom: 2px;
              `}
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Smitty"
                required="true"
              />
            </div>
          </label>

          <label>
            Email
            <div
              css={css`
                padding-bottom: 2px;
              `}
            >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jsmitty@place.holder"
              required="true"
            />
            </div>
          </label>

          <label>
            Subject
            <div
              css={css`
                padding-bottom: 2px;
              `}
            >
            <input type="text" name="subject" id="subject" required="true" />
            </div>
          </label>
          <div
            css={css`
              padding-top: 1.5em;
            `}
          >
            <label>
              <textarea
                name="message"
                id="message"
                rows="5"
                cols="51"
                placeholder="Say hi."
                required="true"
              />
            </label>
          </div>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </div>
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
