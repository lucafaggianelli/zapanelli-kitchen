import cn from 'classnames'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function ArticleCard ({ className = null, image, title, to }) {
  return (
    <Link
      to={to}
      className={cn('flex flex-col', className)}
    >
      <GatsbyImage
        image={getImage(image)!}
        className="flex-grow bg-gray-100"
        alt={title}
      />

      <div className="text-center text-secondary text-2xl mt-4">
        {title}
      </div>
    </Link>
  )
}
