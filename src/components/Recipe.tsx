import React from 'react'
import { graphql } from 'gatsby'

import RecipeTabs from './RecipeTabs'
import RecipeTopBar from './RecipeTopBar'

export default function Recipe({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div className="grid grid-cols-2">
      <div>
        <RecipeTopBar />

        <div className="mr-8 mt-8">
          <div className="bg-primary-100 bg-opacity-20 py-12 px-4">
            <h1 className="text-6xl text-center text-secondary">
              {frontmatter.title}
            </h1>

            <div
              className="border-b-2 mt-12 text-primary-100"
            />
          </div>

          <div
            className="font-mono text-xl px-12 text-primary-800 text-center"
          >
            {frontmatter.description}
          </div>
        </div>
      </div>

      <div>
        <RecipeTabs />

        <div className="ml-8 mt-8">
          <div className="font-mono text-primary-800">
            <div className="text-lg font-bold">Directions</div>

            <div
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        description
      }
    }
  }
`
