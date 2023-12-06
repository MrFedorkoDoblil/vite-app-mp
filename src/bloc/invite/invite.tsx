import './invite.scss'
import { TitleLabel } from '../../components/titleLabel';

export const Invite = () => {
  return (
    <>
    <a className="anchor" id="invite" style={{top: '-110px'}}></a>
    <section className="invite">
      <div className="container">
        <TitleLabel
          text='Приглашаем на конференцию:' />
        <div className="invite__text">Профессионалов</div>
        <div className="invite__desc">Как собрать эффективную команду</div>

        <div className="invite__text">Новичков</div>
        <div className="invite__desc">Как пройти путь обучения быстро и эффективно</div>

        <div className="invite__text">Поставщиков</div>
        <div className="invite__desc">Как найти себе постоянных партнеров в лице <br /> лучших специалистов отрасли</div>

      </div>
    </section></>
  )
}
