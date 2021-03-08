import React from "react"
import { graphql, Link } from "gatsby"

const LocationPage = ({ data }) => (
  <>
    <h1 className="">Locations</h1>
    <ul>
      {data.allContentfulLocation.edges.map(({ node, index }) => (
        <li className="py-4 font-mono" key={index}>
          <Link className="" to={`/locations/${node.slug}`}>{node.city}</Link>
        </li>
      ))}
    </ul>
  </>
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