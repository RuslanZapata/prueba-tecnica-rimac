import Rimac from '../../assets/Rimac'
import GlTelephoneSolid from '../../assets/GlTelephoneSolid'

import "../../sass/components/header/_header.scss";

const Header = () => {
  return (
    <header className='header'>
      <Rimac />
      <div>
        <span>¡Compra por este medio!</span>
        <GlTelephoneSolid />
        <p>(01) 411 6001</p>
      </div>
    </header>
  )
}

export default Header