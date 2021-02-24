import React, { useRef } from 'react'

export default function VerticalStepper ({ steps }) {
  const slider = useRef<HTMLDivElement>()

  const onClickStep = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, step: number) => {
    slider.current.style.top = event.currentTarget.offsetTop + 'px'
  }

  return (
    <div className="flex">
      {steps.map((content, step) => (
        <div dangerouslySetInnerHTML={{ __html: content }} className="flex-grow" />
      ))}

      <div className="relative">
        {steps.map((content, step) => (
          <div
            key={step}
            className="flex items-center justify-center h-12 w-12 font-mono font-bold text-primary-800 cursor-pointer"
            onClick={event => onClickStep(event, step)}
          >
            {step + 1}
          </div>
        ))}

        <div
          ref={slider}
          className="absolute top-0 left-0 h-12 w-12 text-primary-800 rounded-full border-2"
          style={{ transition: 'top .3s' }}
        />
      </div>
    </div>
  )
}
