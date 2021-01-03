import React from "react"
import { graphql, Link } from "gatsby"

const LocationPage = ({ data }) => (
  <>
    <h1 className="text-green-900 font-bold font-mono uppercase text-5xl py-6">Locations</h1>
    <ul>
      {data.allContentfulLocation.edges.map(({ node, index }) => (
        <li className="py-4 font-mono" key={index}>
          <Link className="hover:text-green-900 hover:line-through" to={`/locations/${node.slug}`}>{node.city}</Link>
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