import React from 'react'

interface Props {
  ingredients?: { [ingredient: string]: string | number }
}

export default function IngredientsList ({ ingredients = {} }: Props) {
  return (
    <div>
      {Object.entries(ingredients || {}).map(([ ingredient, quantity ]) => (
        <div
          key={ingredient}
          className="flex font-mono items-baseline py-2"
        >
          <div className="text-primary-800 font-bold text-lg">{ingredient}</div>

          <div className="flex-grow mx-2 text-primary-500 border-b-2 border-dotted" />

          <div className="text-primary-500">{quantity}</div>
        </div>
      ))}
    </div>
  )
}
