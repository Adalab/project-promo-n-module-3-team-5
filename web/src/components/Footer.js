import logoAdalab from '../images/logo-adalab.png';
import '../styles/components/Footer.scss';

function Footer() {
  return (
    <footer className="footer__container">
      <p className="footer__paragraph">
        <small>Awesome profile-cards &copy;2021</small>
      </p>
      <img className="footer__logo" src={logoAdalab} alt="logo de adalab" />
    </footer>
  );
}

export default Footer;
