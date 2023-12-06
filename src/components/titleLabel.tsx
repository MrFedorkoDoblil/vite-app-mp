import React from 'react'
import '../sass/base.scss'

interface TitleLabelProps {
    text: string
}

export const TitleLabel: React.FunctionComponent<TitleLabelProps> = ({text}) => {
  return (
    <div className="title">
        <div className="title__block">{text}</div>
        <div className="title__line"></div>
    </div>
  )
}
