import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import { Link } from 'gatsby'
import React from 'react'

export default function RecipeTopBar () {
  return (
    <nav className="flex items-center h-16 border-b-2 border-primary-100 border-opacity-30">
      <Link to="/">
        <Icon
          path={mdiArrowLeft}
          size={0.85}
          className="text-primary-800"
        />
      </Link>

      <div className="ml-4 text-2xl font-bold text-primary-800">Zk</div>
    </nav>
  )
}
