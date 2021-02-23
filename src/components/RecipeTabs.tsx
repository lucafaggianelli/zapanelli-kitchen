import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

export default function RecipeTabs () {
  const [ currentTab, setCurrentTab ] = useState(0)
  const [ sliderStyle, setSliderStyle ] = useState({ left: 0, width: 0 })
  const firstTab = useRef<HTMLDivElement>()

  const tabs = [ 'Ingredients', 'Directions' ]

  const onClickTab = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setCurrentTab(index)

    const event = { ..._event }

    setTimeout(() => {
      setSliderStyle({
        left: event.currentTarget.offsetLeft,
        width: event.currentTarget.offsetWidth
      })
    }, 0)
  }

  useEffect(() => {
    console.log(firstTab.current)
    setSliderStyle({
      left: firstTab.current.offsetLeft,
      width: firstTab.current.offsetWidth
    })
  }, [ firstTab.current ])

  return (
    <div className="relative h-16 flex justify-center text-primary-100 border-b-2 text-opacity-30">
      {tabs.map((tab, i) => (
        <div
          key={tab + i}
          ref={i === 0 ? firstTab : null}
          className={cn(
            'flex items-center h-full px-12 uppercase text-sm tracking-wider cursor-pointer',
            currentTab === i ? 'font-bold text-primary-800' : 'font-medium text-primary-500'
          )}
          onClick={event => onClickTab(event, i)}
        >
          {tab}
        </div>
      ))}

      <div
        className="absolute border-b-2 text-primary-800 bottom-0 transform translate-y-full"
        style={{
          ...sliderStyle,
          transition: 'width .3s, left .3s'
        }}
      />
    </div>
  )
}
