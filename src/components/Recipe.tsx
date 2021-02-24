import { Icon } from '@mdi/react'
import { mdiStar, mdiCurrencyEur } from '@mdi/js'
import React, { useState } from 'react'
import { graphql } from 'gatsby'

import RecipeTabs from './RecipeTabs'
import RecipeTopBar from './RecipeTopBar'
import IngredientsList from './IngredientsList'

export default function Recipe({ data }) {
  const [ currentTab, setCurrentTab ] = useState(0)

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

          <div className="grid grid-cols-3 py-8 border-b-2 text-primary-500">
            <div className="font-mono text-center border-r text-primary-100 text-opacity-50">
              <div className="text-primary-500">Cooking time</div>

              <div className="text-primary-800 font-bold">{frontmatter.time_min} min</div>
            </div>

            <div className="font-mono text-center border-r text-primary-100 text-opacity-50">
              <div className="text-primary-500">Difficulty</div>

              <div className="flex justify-center text-primary-800 font-bold">
                {[1, 2, 3].map(level => (
                  <Icon
                    key={level}
                    size={0.9}
                    path={mdiStar}
                    className={frontmatter.difficulty >= level ? '' : 'text-primary-100'}
                  />
                ))}
              </div>
            </div>

            <div className="font-mono text-center">
              <div className="text-primary-500">Cost</div>

              <div className="flex justify-center text-primary-800 font-bold">
                {[1, 2, 3].map(level => (
                  <Icon
                    key={level}
                    size={0.9}
                    path={mdiCurrencyEur}
                    className={frontmatter.cost >= level ? '' : 'text-primary-100'}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <RecipeTabs onChange={setCurrentTab} />

        <div className="ml-8 mt-8">
          {currentTab === 0 &&
            <IngredientsList
              ingredients={JSON.parse(frontmatter.ingredients)}
            />
          }

          {currentTab === 1 &&
            <div className="font-mono text-primary-800">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          }
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
        ingredients
        time_min
        difficulty
        cost
      }
    }
  }
`
