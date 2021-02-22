import React from 'react'

export default function BaseLayout ({ children }) {
  return (
    <div className="bg-background">
      <div className="container max-w-screen-xl min-h-screen mx-auto">
        {children}
      </div>
    </div>
  )
}
