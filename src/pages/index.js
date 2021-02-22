import cn from 'classnames'
import React from 'react'

import ArticleCard from '../components/ArticleCard'
import CategoriesMenu from '../components/CategoriesMenu'
import Grid from '../components/Grid'
import TextCard from '../components/TextCard'

const articles = [
  {
    id: 1,
    name: 'Roasted chicken',
    image: 'roasted-chicken.jpg'
  },
  {
    id: 2,
    name: 'Pasta al pesto',
    size: 'tall',
    image: 'spaghetti-al-pesto.jpg'
  },
  {
    id: 3,
    name: 'Moulles et frites',
    image: 'moulles-frites.jpeg'
  },
  {
    id: 4,
    name: 'Lasagna bolognese',
    image: 'lasagna.jpg'
  }
]

export default function IndexPage () {
  return (
    <div>
      <h1 className="py-8 text-5xl font-bold text-center text-primary-800">BASiL</h1>

      <CategoriesMenu />

      <Grid className="mt-12">
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            title={article.name}
            image={article.image}
            className={cn({
              'row-span-2': article.size === 'tall',
              'col-span-2': article.size === 'large'
            })}
          />
        ))}

        <TextCard style={{ gridRow: 1, gridColumn: 2 }}>
          Hearty, organic entrees that taste just a little better than homemade.
        </TextCard>
      </Grid>
    </div>
  )
}
