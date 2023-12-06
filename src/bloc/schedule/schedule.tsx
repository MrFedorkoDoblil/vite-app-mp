
import './schedule.scss';
import { TitleLabel } from '../../components/titleLabel';
import { ScheduleItem } from './scheduleItem';
import { Contacts } from '../contacts/contacts';

export const Schedule = () => {
  return (
    <><a className="anchor" id="schedule"></a><section className='schedule'>
      <div className="container">
        <TitleLabel text='Программа конференции' />
        <div className="schedule__wrap">
          <div className="schedule__day"><span>21 декабря</span></div>
          <div className="schedule__items">

            <ScheduleItem
              text='Торжественное открытие конференции'
              time='10:00' />
            <ScheduleItem
              text='Торжественное открытие конференции'
              time='11:00' />
            <ScheduleItem
              text='Торжественное открытие конференции'
              time='12:00' />
            <ScheduleItem
              text='Торжественное открытие конференции'
              time='13:00' />
            <ScheduleItem
              text='Торжественное открытие конференции'
              time='14:00' />
            <ScheduleItem
              text='Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.'
              time='17:00' />
            <ScheduleItem
              text='Торжественное открытие конференции'
              time='15:00' />
            <ScheduleItem
              text='Торжественное открытие конференции'
              time='16:00' />
          </div>
        </div>

        <Contacts />
      </div>

    </section></>
  )
}
