import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Link } from 'gatsby'

class LocationTemplate extends React.Component {
    render() {
        const location = get(this.props, 'data.contentfulLocation')

        return (
            <>
                <h1 className="text-green-900 font-bold font-mono uppercase text-5xl py-6">
                    {location.city}
                </h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html:
                            location.childContentfulLocationDescriptionTextNode
                                .childMarkdownRemark.html
                    }}
                ></div>
                <div className="uppercase font-mono text-gray-500 hover:text-green-900 hover:line-through">
                    <Link to="/locations/">Back</Link>
                </div>
            </>
        )
    }
}

export default LocationTemplate

export const query = graphql`
    query CityBySlug($slug: String!) {
        contentfulLocation(slug: { eq: $slug }) {
            city
            childContentfulLocationDescriptionTextNode {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`
