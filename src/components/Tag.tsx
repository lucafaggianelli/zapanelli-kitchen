import { mdiBlockHelper, mdiFoodSteak, mdiPasta } from '@mdi/js'
import Icon, { Stack } from '@mdi/react'
import cn from 'classnames'
import React from 'react'

interface Props {
  className?: string
  name: string
}

const ICONS_MAP: { [tag: string]: React.ReactElement } = {
  vegetarian: <Stack size={1}>
    <Icon
      path={mdiFoodSteak}
      className="text-primary-800"
    />
    <Icon
      path={mdiBlockHelper}
      className="text-red-500"
    />
  </Stack>,
  pasta: <Icon path={mdiPasta} size={1} />
}

export default function Tag ({ className, name }: Props) {
  return (
    <div className={cn('flex items-center font-mono font-bold text-primary-800', className)}>
      {ICONS_MAP[name]}

      <span className={cn(ICONS_MAP[name] && 'ml-2')}>{name}</span>
    </div>
  )
}