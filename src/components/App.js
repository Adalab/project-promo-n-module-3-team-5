// Migración imagenes
import logoAwesone from '../images/logo-awesome-profile-cards.svg';
import imagePreview from '../images/previewImg.jpg';
//useState y UseEffect
import { useEffect, useState } from 'react';

// Componentes
import Footer from './Footer';
import Header from './Header';
import Preview from './Preview';
import callToApi from '../services/api';
// Estilos
import '../styles/App.scss';
import '../styles/core/Reset.scss';

function App() {
  // Variables colapsables
  const [collapseDesign, setCollapseDesign] = useState('');
  const [collapseFill, setCollapseFill] = useState('hidden');
  const [collapseShare, setCollapseShare] = useState('hidden');
  const [newCard, setNewCard] = useState('');

  // Variable del Input del formulario (array de datos)
  const [data, setData] = useState({
    palette: 1,
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });
  const handleButtonCreateCard = (ev) => {
    setNewCard(ev.currentTarget.value);
  };

  //Llamar al Api con useEffect
  useEffect(() => {
    callToApi(data).then((response) => {
      setData(response);
    });
  }, [data]);

  // Funcion manejadora del formulario

  const handleInput = (ev) => {
    const wichInput = ev.currentTarget.name;
    if (wichInput === 'name') {
      setData({
        ...data,
        name: ev.currentTarget.value,
      });
    } else if (wichInput === 'job') {
      setData({ ...data, job: ev.currentTarget.value });
    } else if (wichInput === 'phone') {
      setData({ ...data, phone: ev.currentTarget.value });
    } else if (wichInput === 'email') {
      setData({ ...data, email: ev.currentTarget.value });
    } else if (wichInput === 'linkedin') {
      setData({ ...data, linkedin: ev.currentTarget.value });
    } else if (wichInput === 'github') {
      setData({ ...data, github: ev.currentTarget.value });
    }
  };

  // Mostrar Nombre y Trabajo en la tarjeta predefinida
  let nameToDisplay = showToDisplay(data.name, 'Nombre Apellidos');
  let jobToDisplay = showToDisplay(data.job, 'Front-end Developer');

  function showToDisplay(dataSome, result) {
    if (dataSome === '') {
      return result;
    } else {
      return dataSome;
    }
  }

  // Escuchadores de apertura y cierre de secciones
  const handleCollapsableDesign = (ev) => {
    if (collapseDesign === 'hidden') {
      setCollapseDesign('');
      setCollapseFill('hidden');
      setCollapseShare('hidden');
    } else {
      setCollapseDesign('hidden');
      console.log(collapseDesign);
    }
  };
  const handleCollapsableFill = (ev) => {
    if (collapseFill === 'hidden') {
      setCollapseFill('');
      setCollapseDesign('hidden');
      setCollapseShare('hidden');
    } else {
      setCollapseFill('hidden');
      console.log(collapseDesign);
    }
  };
  const handleCollapsableShare = (ev) => {
    if (collapseShare === 'hidden') {
      setCollapseShare('');
      setCollapseDesign('hidden');
      setCollapseFill('hidden');
    } else {
      setCollapseShare('hidden');
      console.log(collapseDesign);
    }
  };

  const handleForm = (ev) => {
    return (
      <div className="root">
        <div className="page-wrapper">
          <Header />
          <main className="wholeMain">
            <section className="preview">
              <button className="preview__button js_resetButton">
                <i className="fas fa-trash-alt"></i>reset
              </button>
              <article className="preview__card">
                <span className="preview__pretty js_designColor"></span>
                <h2 className="preview__name js_previewName js_design">
                  {nameToDisplay}
                </h2>
                <h3 className="preview__description js_previewDescription">
                  {jobToDisplay}
                </h3>
                <div
                  style={{
                    backgroundImage: `url(${imagePreview})`,
                  }}
                  className="preview__image js__profile-image"
                ></div>
                <nav className="preview__icons">
                  <a
                    className="preview__icons--measures js_designColor js_previewPhone"
                    href={'+34' + data.phone}
                    title="phone"
                    name="phone"
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                  <a
                    className="preview__icons--measures"
                    href={`mailto:${data.email}`}
                    title="message"
                  >
                    <i className="far fa-envelope"></i>
                  </a>
                  <a
                    className="preview__icons--measures js_designColor js_previewLinkedin"
                    href={`https://linkedin.com/in/${data.linkedin}`}
                    target="_blank"
                    title="linkedin"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="preview__icons--measures js_designColor js_previewGithub"
                    href={`https://github.com/${data.github}`}
                    target="_blank"
                    title="github"
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </nav>
              </article>
            </section>

            <form onSubmit={handleForm} className="form">
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
                      (collapseDesign === 'hidden' ? 'down' : 'up') +
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
                        <label className="label__design" htmlFor="palette-1">
                          <input
                            id="palette-1"
                            className="design__input js_design"
                            type="radio"
                            value="1"
                            name="palette"
                            /* onChange={handlePalette} */
                            // checked={palette}
                          />
                          <ul className="colourboxes colourone">
                            <li className="item1-item1 li">Color A</li>
                            <li className="item1-item2 li">Color B</li>
                            <li className="item1-item3 li">Color C</li>
                          </ul>
                        </label>
                      </div>
                      <label className="label__design" htmlFor="palette-2">
                        <input
                          id="palette-2"
                          className="design__input js_design"
                          type="radio"
                          value="2"
                          name="palette"
                          /* onChange={handlePalette} */
                          // checked={palette}
                        />
                        <ul className="colourboxes colourtwo">
                          <li className="item2-item1 li">Color A</li>
                          <li className="item2-item2 li">Color B</li>
                          <li className="item2-item3 li">Color C</li>
                        </ul>
                      </label>
                      <label className="label__design" htmlFor="palette-3">
                        <input
                          id="palette-3"
                          className="design__input js_design"
                          type="radio"
                          value="3"
                          name="palette"
                          /* onChange={handlePalette} */
                          // checked={palette}
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
                      (collapseFill === 'hidden' ? 'down' : 'up') +
                      ' collapsable__iconEnd js_iconEnd'
                    }
                  ></i>
                </div>
                <section className={collapseFill + ' fill'} id="fill">
                  <fieldset className="fill__first">
                    <div className="fill__first--name">
                      <label
                        htmlFor="fullName"
                        className="fill__first--name-lab"
                      >
                        Nombre completo *
                      </label>
                      <input
                        value={data.name}
                        className="fill__first--name-inp js_allInputs"
                        placeholder="Ej: Sally Jill"
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleInput}
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
                        value={data.job}
                        className="fill__first--position-inp js_allInputs"
                        placeholder="Ej: Front-end unicorn"
                        id="job"
                        type="text"
                        name="job"
                        onChange={handleInput}
                      />
                    </div>
                  </fieldset>
                  <fieldset className="fill__second">
                    <label className="fill__second-label">
                      Imagen de perfil *
                    </label>
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
                        className="fill__third--mail-inp"
                        placeholder="Ej: sally-hill@gmail.com"
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="fill__third--tel">
                      <label
                        htmlFor="telephone"
                        className="fill__third--tel-lab"
                      >
                        Teléfono
                      </label>
                      <input
                        className="fill__third--tel-inp js_allInputs"
                        placeholder="Ej: 555-55-55-55"
                        id="phone"
                        type="tel"
                        name="phone"
                        value={data.phone}
                        onChange={handleInput}
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
                        value={data.linkedin}
                        onChange={handleInput}
                      />
                    </div>
                    {/*<!-- se consideraría type text para un texto que empieza con arroba¿?-->*/}
                    <div className="fill__third--git">
                      <label
                        htmlFor="gitHubName"
                        className="fill__third--git-lab"
                      >
                        Github *
                      </label>
                      <input
                        className="fill__third--git-inp js_allInputs"
                        placeholder="Ej: @sally-hill"
                        id="github"
                        type="text"
                        name="github"
                        value={data.github}
                        onChange={handleInput}
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
                      (collapseShare === 'hidden' ? 'down' : 'up') +
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
                  <div className="share__topBorder"> </div>
                  <div className="share__collapsable js_createdCard">
                    <h3 className="share__collapsable__title js_notCreate">
                      La tarjeta ha sido creada
                    </h3>
                    <p className="card__http js_urlCard">
                      https://awesome-profile-card.com?id=A456DF0001
                    </p>
                    <button
                      className="share__collapsable__button js_twiterBtn"
                      onClick={handleButtonCreateCard}
                    >
                      <a
                        className="share__collapsable__button--link"
                        href=""
                        target="_blank"
                      >
                        <i className="icon3 fab fa-twitter"></i>&nbsp;Compartir
                        en twitter
                      </a>
                    </button>
                  </div>
                </fieldset>
              </section>
            </form>
          </main>
        </div>
        <Footer />
      </div>
    );
  };
}

export default App;
