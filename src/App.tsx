
import { Abilities } from './bloc/abilities/abilities'
import { Footer } from './bloc/footer/footer'
import { Header } from './bloc/header/header'
import { Invite } from './bloc/invite/invite'
import { Location } from './bloc/location/location'
import { Promo } from './bloc/promo/promo'
import { Schedule } from './bloc/schedule/schedule'
import './sass/base.scss'

function App() {


  return (
    <>
      <Header/>
      <Promo/>
      <Abilities/>
      <Invite/>
      <Location/>
      <Schedule/>
      <Footer/>
    </>
  )
}

export default App
