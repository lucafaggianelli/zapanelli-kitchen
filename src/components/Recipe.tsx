import { Icon } from '@mdi/react'
import { mdiStar, mdiCurrencyEur } from '@mdi/js'
import cn from 'classnames'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import React, { useState } from 'react'

import RecipeTabs from './RecipeTabs'
import RecipeTopBar from './RecipeTopBar'
import IngredientsList from './IngredientsList'
import SvgImageFilter from './ImageSvgFilter'
import Tag from './Tag'

export default function Recipe({ data }: { data: any }) {
  const [ currentTab, setCurrentTab ] = useState(0)

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const tags = frontmatter.tags || []

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Helmet>
        <title>{frontmatter.title} | Zapanelli kitchen</title>
      </Helmet>

      <SvgImageFilter />

      <div>
        <RecipeTopBar />

        <div className="mr-0 md:mr-8 mt-8">
          <div className="hidden lg:block">
            <GatsbyImage
              image={getImage(frontmatter.image)!}
              className="h-72 w-full object-cover"
              alt={frontmatter.title}
            />
          </div>

          <div className="relative bg-primary-100 lg:bg-transparent bg-opacity-20 py-12 px-4 lg:px-0">
            <GatsbyImage
              image={getImage(frontmatter.image)!}
              className="md:hidden absolute top-0 left-0 h-full w-full bg-center bg-cover"
              alt={frontmatter.title}
            />

            <div className="relative">
              <h1 className="text-6xl text-center text-secondary">
                {frontmatter.title}
              </h1>

              <div
                className="border-b-2 mt-12 border-primary-500"
              />
            </div>
          </div>

          <div
            className="font-mono text-xl px-12 text-primary-800 text-center"
          >
            {frontmatter.description}
          </div>

          <div className="grid grid-cols-3 py-8 border-b-2 border-primary-500">
            <div className="font-mono text-center border-r border-primary-100 border-opacity-50">
              <div className="text-primary-500">Cooking time</div>

              <div className="text-primary-800 font-bold">{frontmatter.time_min} min</div>
            </div>

            <div className="font-mono text-center border-r border-primary-100 border-opacity-50">
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

          <div className="flex justify-center mt-8">
            {tags.map((tag: string, i: number) => (
              <Tag name={tag} className={cn(i !== 0 && 'ml-8')} />
            ))}
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
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        description
        ingredients
        time_min
        difficulty
        cost
        tags
      }
    }
  }
`
