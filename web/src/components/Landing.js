import '../styles/components/Landing.scss';
import '../styles/core/Variables.scss';
import { Link } from 'react-router-dom';
import logo from '../images/logo-awesome-profile-cards.svg';

const Landing = (props) => {
  return (
    <>
      <header className='header__container'>
        <img
          className='header__img'
          src={logo}
          alt='logo-awesome-profile-cards'
        />
      </header>
      <main className='main__container'>
        <section className='main__section1'>
          <h1 className='main__section1--title'>Crea tu tarjeta de visita</h1>
          <p className='main__section1--paragraph'>
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
        </section>
        <section className='main__section2'>
          <ul className='main__section2--options'>
            <li className='section2__li li__design'>
              <i className='far fa-object-ungroup main__section2--icon'></i>
              Diseña
            </li>

            <li className='section2__li li__fill'>
              <i className='far fa-keyboard main__section2--icon'></i>Rellena
            </li>

            <li className='section2__li li__share'>
              <i className='fas fa-share-alt main__section2--icon'></i>Comparte
            </li>
          </ul>
        </section>
        <section className='main__section3'>
          <a
            className='main__section3--button'
            href='./cards.html'
            title='Comenzar a crear tarjeta'
          >
            Comenzar
          </a>
        </section>
      </main>
      ç
    </>
  );
};

export default Landing;
