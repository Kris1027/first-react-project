export default function Footer() {
  return (
    <footer className='footer'>
      <img
        className='footer__bg'
        src='/images/bg-pattern-footer-mobile.svg'
        alt='background'
      />
      <div className='footer__logos'>
        <div className='footer__logo'>
          <img src='./images/logo.svg' alt='logo' />
        </div>
        <div className='footer__icons'>
          <img src='./images/icon-facebook.svg' alt='facebook' />
          <img src='./images/icon-twitter.svg' alt='facebook' />
          <img src='./images/icon-pinterest.svg' alt='facebook' />
          <img src='./images/icon-instagram.svg' alt='facebook' />
        </div>
        <hr className='footer__hr' />
      </div>
      <div className='footer__links'>
        <span className='footer__link'>our company</span>
        <span className='footer__link'>how we work</span>
        <span className='footer__link'>why insure?</span>
        <span className='footer__link'>check price</span>
        <span className='footer__link'>reviews</span>
      </div>
      <div className='footer__links'>
        <span className='footer__link'>help me</span>
        <span className='footer__link'>faq</span>
        <span className='footer__link'>terms of use</span>
        <span className='footer__link'>privacy policy</span>
        <span className='footer__link'>cookies</span>
      </div>
      <div className='footer__links'>
        <span className='footer__link'>contact</span>
        <span className='footer__link'>sales</span>
        <span className='footer__link'>support</span>
        <span className='footer__link'>live chat</span>
      </div>
      <div className='footer__links'>
        <span className='footer__link'>others</span>
        <span className='footer__link'>careers</span>
        <span className='footer__link'>press</span>
        <span className='footer__link'>licenses</span>
      </div>
    </footer>
  );
}
