import cn from 'classnames'
import React from 'react'

export default function TextCard ({ children, className = null, style = null }) {
  return (
    <div className={cn('flex flex-col', className)} style={style}>
      <div
        className="h-full flex items-center justify-center px-12 py-8 border-t-2 border-b-2 border-primary-500"
      >
        <span className="text-primary-500 font-mono font-bold text-center">
          {children}
        </span>
      </div>

      {/* Dummy element for card sizing */}
      <div className="text-center text-2xl mt-4">
        &nbsp;
      </div>
    </div>
  )
}
