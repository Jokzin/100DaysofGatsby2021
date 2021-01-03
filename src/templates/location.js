import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

class LocationTemplate extends React.Component {
  render() {
    const location = get(this.props, 'data.contentfulLocation')

    return (
      <>
        <h1 className="text-green-900 font-bold font-mono uppercase text-5xl py-6">{location.city}</h1>
        <p>
            {location.description.description}
        </p>
      </>
    )
  }
}

export default LocationTemplate

export const query = graphql`
  query CityBySlug($slug: String!) {
    contentfulLocation(slug: { eq: $slug }) {
      city
      description {
          description
      }
    }
  }
`
