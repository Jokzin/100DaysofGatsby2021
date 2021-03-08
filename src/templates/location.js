import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Link } from 'gatsby'

class LocationTemplate extends React.Component {
    render() {
        const location = get(this.props, 'data.contentfulLocation')

        return (
            <>
                <h1 className="">
                    {location.city}
                </h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html:
                            location.childContentfulLocationDescriptionTextNode
                                .childMarkdownRemark.html
                    }}
                ></div>
                <div className="">
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
