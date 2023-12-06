import location from '../../assets/location.png'
import './location.scss'

export const Location = () => {
  return (
        <section className='location'>
          <a className="anchor" id="location"></a>
          <div className="container">

            <div className="sponsor__wrap">
              <div className="location__title">Организатор</div>
              <div className="location__line"></div>
              <div className="location__text">Редакция газеты "Московская перспектива"</div>
              <div className="location__desc">Экспертно о строительстве и инфраструктуре города</div>
            </div>

          </div>
          <div className="container start">
            <img src={location} alt="fasade" className="location__img"/>

            <div className="location__wrap">
                <div className="location__title">Место проведения</div>
                <div className="location__line"></div>
                <div className="location__desc">г. Москва, ул. 2-я Брестская, д.6, <br />ГБУ «Мосстройинформ»</div>
              </div>
            </div>

        </section>
  )
}
