// Migración imagenes
import logoAwesone from "../images/logo-awesome-profile-cards.svg";
// Estilos
import '../styles/components/Header.scss'

function Header() {
  return (
    <header className="header__cards--container">
      <img
        className="header__cards--img"
        src={logoAwesone}
        alt="logo-awesome-profile-cards"
      />
    </header>
  );
}

export default Header;
