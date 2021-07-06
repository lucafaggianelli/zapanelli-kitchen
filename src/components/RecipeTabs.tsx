import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

export default function RecipeTabs ({ onChange }) {
  const [ currentTab, setCurrentTab ] = useState(0)
  const [ sliderStyle, setSliderStyle ] = useState({ left: 0, width: 0 })
  const firstTab = useRef<HTMLDivElement>()

  const tabs = [ 'Ingredients', 'Directions' ]

  const onClickTab = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setCurrentTab(index)
    onChange(index)

    const event = { ..._event }

    setTimeout(() => {
      setSliderStyle({
        left: event.currentTarget.offsetLeft,
        width: event.currentTarget.offsetWidth
      })
    }, 0)
  }

  const updateIndicatorState = () => {
    setSliderStyle({
      left: firstTab.current.offsetLeft,
      width: firstTab.current.offsetWidth
    })
  }

  useEffect(() => {
    const handleResize = () => {
      updateIndicatorState()
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('load', handleResize)

    updateIndicatorState()

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('load', handleResize)
    }
  }, [ firstTab.current ])

  return (
    <div className="relative h-16 flex justify-center max-w-full overflow-x-auto">
      {tabs.map((tab, i) => (
        <div
          key={tab + i}
          ref={i === 0 ? firstTab : null}
          className={cn(
            'flex items-center px-12 uppercase text-sm tracking-wider cursor-pointer border-primary-100 border-b-2 border-opacity-30',
            currentTab === i ? 'font-bold text-primary-800' : 'font-medium text-primary-500'
          )}
          onClick={event => onClickTab(event, i)}
        >
          {tab}
        </div>
      ))}

      <div
        className="absolute border-b-2 border-primary-800 bottom-0"
        style={{
          ...sliderStyle,
          transition: 'width .3s, left .3s'
        }}
      />
    </div>
  )
}
