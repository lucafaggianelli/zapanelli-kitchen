import cn from 'classnames'
import React from 'react'

export default function ArticleCard ({ className, image, title }) {
  return (
    <div className={cn('flex flex-col', className)}>
      <div
        className="flex-grow bg-center bg-cover bg-gray-100"
        style={{ backgroundImage: image ? `url(/images/${image})` : null }}
      />

      <div className="text-center text-secondary text-2xl mt-4">
        {title}
      </div>
    </div>
  )
}
