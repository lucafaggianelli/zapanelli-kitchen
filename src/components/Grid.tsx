import cn from 'classnames'
import React from 'react'

export default function Grid ({ children, className }) {
  return (
    <div
      className={cn('grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-8 px-4 md:px-0', className)}
      style={{ gridAutoRows: 300 }}
    >
      {children}
    </div>
  )
}
