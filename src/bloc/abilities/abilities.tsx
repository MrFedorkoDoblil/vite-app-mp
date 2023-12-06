import micriphone from '../../assets/microphone.svg'
import './abilities.scss'

export const Abilities = () => {
  return (
    <section className="abilities" id='abilities'>
      <div className="container">
        <div className="abilities__wrap">

          <div className="abilities__item">
            <img src={micriphone} alt="" className='abilities__icon ' />
            <div className="abilities__text">Передача знаний</div>
          </div>
          
          <div className="abilities__item">
            <img src={micriphone} alt="" className='abilities__icon ' />
            <div className="abilities__text">Обзор успешных проектов</div>
          </div>

          <div className="abilities__item">
            <img src={micriphone} alt="" className='abilities__icon ' />
            <div className="abilities__text">Полезное общение</div>
          </div>


        </div>
      </div>
    </section>
  )
}
