import cn from 'classnames'
import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import ArticleCard from '../components/ArticleCard'
import CategoriesMenu from '../components/CategoriesMenu'
import Grid from '../components/Grid'
import TextCard from '../components/TextCard'

export default function IndexPage ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <div>
      <Helmet>
        <title>Zapanelli kitchen</title>
      </Helmet>

      <h1 className="py-8 text-5xl font-bold text-center text-primary-800">
        Zk
      </h1>

      <CategoriesMenu />

      <Grid className="mt-12">
        {edges.map(edge => (
          <ArticleCard
            key={edge.node.id}
            title={edge.node.frontmatter.title}
            image={edge.node.frontmatter.image}
            to={edge.node.frontmatter.slug}
            className={cn({
              'md:row-span-2': edge.node.frontmatter.size === 'tall',
              'md:col-span-2': edge.node.frontmatter.size === 'large'
            })}
          />
        ))}

        <TextCard className="row-start-3 md:col-start-2 md:row-start-1">
          Delicious dishes made with ♥
        </TextCard>
      </Grid>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 350
                  placeholder: DOMINANT_COLOR
                  layout: CONSTRAINED
                )
              }
            }
            size
          }
        }
      }
    }
  }
`
