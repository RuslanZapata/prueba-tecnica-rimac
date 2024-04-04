import Rimac from '../../assets/Rimac'

import "../../sass/components/footer/_footer.scss";


const Footer = () => {
  return (
    <footer className='footer'>
      <Rimac />
      <p className='footer__text'>© 2023 RIMAC Seguros y Reaseguros.</p>
    </footer>
  )
}

export default Footer