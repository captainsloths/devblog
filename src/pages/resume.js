import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Resume({ data }) {
    
    return (
        <Layout>
            <div>
                

                
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