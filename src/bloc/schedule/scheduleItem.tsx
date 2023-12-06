import React from 'react'

interface ScheduleItemProps {
    text: string;
    time: string;
}

export const ScheduleItem: React.FunctionComponent<ScheduleItemProps> = ({text, time}) => {
  return (
    <div className="schedule__item">
        <div className="schedule__time">{time}</div>
        <div className="schedule__desc">{text}</div>
    </div>
  )
}
