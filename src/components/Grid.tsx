import cn from 'classnames'
import React from 'react'

export default function Grid ({ children, className }) {
  return (
    <div
      className={cn('grid grid-cols-3 gap-x-4 gap-y-8', className)}
      style={{ gridAutoRows: 300 }}
    >
      {children}
    </div>
  )
}
