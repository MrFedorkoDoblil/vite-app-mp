
import './promo.scss'

export const Promo = () => {
  return (
    <section className='promo' id='promo'>
      <div className="container">
        <div className="promo__content">
          <div className="promo__date">21 декабря <br /> 2023 года</div>
          <div className="promo__text">
            <div className="promo__title">Архитектурная конференция</div>
            <div className="promo__sub">Строительная отрасль Москвы: <br />итоги 2023 и планы 2024</div>
          </div>
          <div className="promo__line"></div>
        </div>
      </div>
    </section>
  )
}
