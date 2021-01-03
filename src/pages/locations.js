import React from "react"
import { graphql, Link } from "gatsby"

const LocationPage = ({ data }) => (
  <div>
    <h1>Locations</h1>
    <ul>
      {data.allContentfulLocation.edges.map(({ node, index }) => (
        <li key={index}>
          <Link to={`/locations/${node.slug}`}>{node.city}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default LocationPage

export const query = graphql`
  {
    allContentfulLocation {
    edges {
      node {
        city
        slug
      }
    }
  }
  }
`