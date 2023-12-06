import './header.scss'
import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className='header' id='header'>
      <div className="container">
        <div className="header__logo">
          <img 
            src={logo} 
            alt="logo"
            style={{width: '100px'}} 
          />
        </div>
        <ul className="header__nav">
          <li><a href="#invite" className="header__link">Информация</a></li>
          <li><a href="#location" className="header__link">Организатор</a></li>
          <li><a href="#schedule" className="header__link">Программа</a></li>
        </ul>
        <div className="">
        <a href="#contacts">
          <button className='btn'>Стать участником</button>  
        </a> 
        </div>


      </div>
    </header>
  )
}
