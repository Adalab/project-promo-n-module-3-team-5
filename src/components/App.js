// Fichero src/components/App.js
import '../styles/App.scss';
// Migración imagenes
import logoAwesone from '../images/logo-awesome-profile-cards.svg';
import logoAdalab from '../images/logo-adalab.png';
//useState
import { useState } from 'react';

function App() {
  //variables colapsables
  const [collapseDesign, setCollapseDesign] = useState('');
  const [collapseFill, setCollapseFill] = useState('hidden');
  const [collapseShare, setCollapseShare] = useState('hidden');
  //variabes Arrow
  const [arrowPositionDesign, setArrowPositionDesign] = useState('up');
  const [arrowPositionFill, setArrowPositionFill] = useState('down');
  const [arrowPositionShare, setArrowPositionShare] = useState('down');

  const handleCollapsableDesign = (ev) => {
    if (collapseDesign === 'hidden') {
      setCollapseDesign('');
      setArrowPositionDesign('up');
    } else {
      setCollapseDesign('hidden');
      setArrowPositionDesign('down');
      console.log(collapseDesign);
    }
  };
  const handleCollapsableFill = (ev) => {
    if (collapseFill === '') {
      setCollapseFill('hidden');
      setArrowPositionFill('down');
    } else {
      setCollapseFill('');
      setArrowPositionFill('up');
      console.log(collapseDesign);
    }
  };
  const handleCollapsableShare = (ev) => {
    if (collapseShare === '') {
      setCollapseShare('hidden');
      setArrowPositionShare('down');
    } else {
      setCollapseShare('');
      setArrowPositionShare('up');
      console.log(collapseDesign);
    }
  };

  return (
    <div className="root">
      <header className="header__cards--container">
        <img
          className="header__cards--img"
          src={logoAwesone}
          alt="logo-awesome-profile-cards"
        />
      </header>

      <main className="wholeMain">
        <section className="preview">
          <button className="preview__button js_resetButton">
            <i className="fas fa-trash-alt"></i>reset
          </button>
          <article className="preview__card">
            <span className="preview__pretty js_designColor"></span>
            <h2 className="preview__name js_previewName js_design">
              Nombre Apellidos
            </h2>
            <h3 className="preview__description js_previewDescription">
              Descripción
            </h3>
            <div
              className="preview__image js__profile-image"
              /* style='background-image: url(./assets/images/previewImg.jpg)' */
            ></div>

            {/* react espera que el style lo pasemos como un objeto */}

            <nav className="preview__icons">
              <a
                className="preview__icons--measures js_designColor js_previewPhone"
                href="/home"
                target="_blank"
                title="phone"
              >
                <i className="fas fa-mobile-alt"></i>
              </a>
              <a
                className="preview__icons--measures js_designColor js_previewEmail"
                href="/home"
                target="_blank"
                title="message"
              >
                <i className="far fa-envelope"></i>
              </a>
              <a
                className="preview__icons--measures js_designColor js_previewLinkedin"
                href="/home"
                target="_blank"
                title="linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="preview__icons--measures js_designColor js_previewGithub"
                href="/home"
                target="_blank"
                title="github"
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </nav>
          </article>
        </section>

        <form action="" method="POST" className="form js_form">
          <div>
            <div
              className="collapsable  js_collapsable_design"
              onClick={handleCollapsableDesign}
            >
              <i className="far fa-object-ungroup cloningicon collapsable__iconStart"></i>
              <h3 className="collapsable__title">Diseña</h3>
              <i
                className={
                  'fas fa-chevron-' +
                  arrowPositionDesign +
                  ' collapsable__iconEnd js_iconEnd'
                }
              ></i>
            </div>

            <section
              className="wholecollapsable-design     js_section"
              id="desing"
            >
              {/*   <div className='titledesignflex'>
                <i className='far fa-object-ungroup cloningicon'></i>
                <h3 className='titledesign'>diseña</h3>
                <i className='fas fa-chevron-up arrowdesign'></i>
              </div> */}
              <div className="rectangle-2"></div>
              <fieldset className={collapseDesign + ' flexboxdesign'}>
                <h4 className="titlecolours">colores</h4>
                <div>
                  <div className="colourboxesmaster js_designevent">
                    <label className="label__design" htmlFor="colour1">
                      <input
                        id="1"
                        className="design__input js_design"
                        type="radio"
                        value="1"
                        name="palette"
                        defaultChecked
                      />
                      <ul className="colourboxes colourone">
                        <li className="item1-item1 li">Color A</li>
                        <li className="item1-item2 li">Color B</li>
                        <li className="item1-item3 li">Color C</li>
                      </ul>
                    </label>
                  </div>

                  <label className="label__design" htmlFor="colour2">
                    <input
                      id="2"
                      className="design__input js_design"
                      type="radio"
                      value="2"
                      name="palette"
                    />
                    <ul className="colourboxes colourtwo">
                      <li className="item2-item1 li">Color A</li>
                      <li className="item2-item2 li">Color B</li>
                      <li className="item2-item3 li">Color C</li>
                    </ul>
                  </label>

                  <label className="label__design" htmlFor="colour3">
                    <input
                      id="3"
                      className="design__input js_design"
                      type="radio"
                      value="3"
                      name="palette"
                    />
                    <ul className="colourboxes colourthree">
                      <li className="item3-item2 li">Color B</li>
                      <li className="item3-item1 li">Color A</li>
                      <li className="item3-item3 li">Color C</li>
                    </ul>
                  </label>
                </div>
              </fieldset>
            </section>
          </div>

          <div>
            <div className="topBorder"></div>
            <div
              className="collapsable js_collapsable_fill "
              onClick={handleCollapsableFill}
            >
              <i className="far fa-keyboard collapsable__iconStart"></i>
              <h3 className="collapsable__title">Rellena</h3>
              <i
                className={
                  'fas fa-chevron-' +
                  arrowPositionFill +
                  ' collapsable__iconEnd js_iconEnd'
                }
              ></i>
            </div>

            <section className={collapseFill + ' fill'} id="fill">
              <fieldset className="fill__first">
                <div className="fill__first--name">
                  <label htmlFor="fullName" className="fill__first--name-lab">
                    Nombre completo *
                  </label>
                  <input
                    className="fill__first--name-inp js_allInputs"
                    placeholder="Ej: Sally Jill"
                    id="name"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="fill__first--position">
                  <label
                    htmlFor="position"
                    className="fill__first--position-lab"
                  >
                    Puesto *
                  </label>
                  <input
                    className="fill__first--position-inp js_allInputs"
                    placeholder="Ej: Front-end unicorn"
                    id="job"
                    type="text"
                    name="job"
                  />
                </div>
              </fieldset>

              <fieldset className="fill__second">
                <label className="fill__second-label">Imagen de perfil *</label>
                <div className="fill__second-buttoncheck">
                  <label className="fill__second-button" htmlFor="photo">
                    Añadir imagen
                  </label>
                  <input
                    type="file"
                    id="photo"
                    className="hidden_button js__profile-upload-btn"
                  />
                  <div className="fill__second-checkbox js__profile-preview"></div>
                </div>
              </fieldset>

              <fieldset className="fill__third">
                <div className="fill__third--mail">
                  <label htmlFor="email" className="fill__third--mail-lab">
                    Email *
                  </label>
                  <input
                    className="fill__third--mail-inp js_allInputs"
                    placeholder="Ej: sally-hill@gmail.com"
                    id="email"
                    type="email"
                    name="email"
                  />
                </div>

                <div className="fill__third--tel">
                  <label htmlFor="telephone" className="fill__third--tel-lab">
                    Teléfono
                  </label>
                  <input
                    className="fill__third--tel-inp js_allInputs"
                    placeholder="Ej: 555-55-55-55"
                    id="phone"
                    type="tel"
                    name="phone"
                  />
                </div>
                <div className="fill__third--linked">
                  <label
                    htmlFor="linkedinName"
                    className="fill__third--linked-lab"
                  >
                    Linkedin *
                  </label>
                  <input
                    className="fill__third--linked-inp js_allInputs"
                    placeholder="Ej: linkedin.com/in/sally.hill"
                    id="linkedin"
                    type="text"
                    name="linkedin"
                  />
                </div>
                {/*<!-- se consideraría type text para un texto que empieza con arroba¿?-->*/}
                <div className="fill__third--git">
                  <label htmlFor="gitHubName" className="fill__third--git-lab">
                    Github *
                  </label>
                  <input
                    className="fill__third--git-inp js_allInputs"
                    placeholder="Ej: @sally-hill"
                    id="github"
                    type="text"
                    name="github"
                  />
                  {/*<!--no hay input type =sumbit value= enviar info porque la información se va mostrando en el momento en la tarjeta y no se manda a ningún lugar-->*/}
                </div>
              </fieldset>
            </section>
          </div>

          <div>
            <div className="topBorder"></div>
            <div
              className="collapsable js_collapsable"
              onClick={handleCollapsableShare}
            >
              <i className="fas fa-share-alt collapsable__iconStart"></i>
              <h3 className="collapsable__title">Comparte</h3>
              <i
                className={
                  'fas fa-chevron-' +
                  arrowPositionShare +
                  ' collapsable__iconEnd js_iconEnd'
                }
              ></i>
            </div>
          </div>

          <section className={collapseShare} id="share">
            <fieldset className="share">
              <div className="share__second">
                <button className="share__button js_shareButton">
                  <i className="far fa-address-card"></i> Crear tarjeta
                </button>
              </div>
              <div className="topBorder"> </div>
              <div className="share__collapsable hidden js_createdCard">
                <h3 className="share__collapsable__title js_notCreate hidden">
                  La tarjeta ha sido creada
                </h3>
                <p className="card__http js_urlCard"></p>
                <button className="share__collapsable__button js_twiterBtn hidden"></button>
              </div>
            </fieldset>
          </section>
        </form>
      </main>
      <footer className="footer__container">
        <p className="footer__paragraph">
          <small>Awesome profile-cards &copy;2021</small>
        </p>
        <img className="footer__logo" src={logoAdalab} alt="logo de adalab" />
      </footer>
    </div>
  );
}

export default App;
