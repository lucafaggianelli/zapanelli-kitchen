import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import { Link } from 'gatsby'
import React from 'react'

export default function RecipeTopBar () {
  return (
    <nav className="flex items-center pb-2 pt-4 border-b text-primary-100">
      <Link to="/">
        <Icon
          path={mdiArrowLeft}
          size={0.85}
          className="text-primary-800"
        />
      </Link>

      <div className="ml-4 text-2xl font-bold text-primary-800">BASiL</div>
    </nav>
  )
}
