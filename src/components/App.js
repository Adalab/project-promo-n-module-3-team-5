//Ficheros componentes
import Header from "./Header";
import Design from "./Design";
// import Preview from "./Preview";
import Share from "./Share";
import Footer from "./Footer";

// Estilos
import "../styles/App.scss";
import "../styles/core/Reset.scss";
import "../styles/components/Preview.scss";

// Migración imagenes
import logoAwesone from "../images/logo-awesome-profile-cards.svg";
import imagePreview from "../images/previewImg.jpg";

// Otros
import { useState } from "react";

function App() {
  // Variables colapsables
  const [collapseDesign, setCollapseDesign] = useState("");
  const [collapseFill, setCollapseFill] = useState("hidden");
  const [collapseShare, setCollapseShare] = useState("hidden");

  // Variable de las paletas (radio)
  const [paletteColor, setPaletteColor] = useState("");

  // Variable del Input del formulario (array de datos)
  const [data, setData] = useState({
    palette: 1,
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
  });

  //función para previsualizar imagen usuaria:
  const fr = new FileReader();
  /**
   * Recoge el archivo añadido al campo de tipo "file"
   * y lo carga en nuestro objeto FileReader para que
   * lo convierta a algo con lo que podamos trabajar.
   * Añade un listener al FR para que ejecute una función
   * al tener los datos listos
   * @param {evento} e
   */
  function getImage(e) {
    const myFile = e.currentTarget.files[0];
    fr.addEventListener("load", writeImage);
    fr.readAsDataURL(myFile);
  }

  /**
   * Una vez tenemos los datos listos en el FR podemos
   * trabajar con ellos ;)
   */
  function writeImage() {
    /* En la propiedad `result` de nuestro FR se almacena
     * el resultado. Ese resultado de procesar el fichero que hemos cargado
     * podemos pasarlo como background a la imagen de perfil y a la vista previa
     * de nuestro componente.
     */

    //
    data.photo = fr.result;
    setData({ ...data });
  }

  function getPhotoUrl(data, placeholder) {
    if (placeholder) {
      return data.photo === "" ? imagePreview : data.photo;
    } else {
      return data.photo;
    }
  }

  // Funcion manejadora del formulario

  // Busca el id de la paleta, ya que al ser un radio,
  // los names deben ser iguales, por esto debemos utilizar id y
  // no de puede utilizar en handleInput (que llama names)
  const handlePalette = (ev) => {
    const whichRadio = ev.target.id;
    if (whichRadio === "palette-1") {
      setData({
        ...data,
        palette: parseInt(ev.target.value),
      });
      setPaletteColor("defaultpalette");
    } else if (whichRadio === "palette-2") {
      setData({
        ...data,
        palette: parseInt(ev.target.value),
      });
      setPaletteColor("redpalette");
    } else if (whichRadio === "palette-3") {
      setData({
        ...data,
        palette: parseInt(ev.target.value),
      });
      setPaletteColor("yellowpalette");
    }
  };

  // Busca en el formulario el target de name, para ponerlo en el
  // array Data
  const handleInput = (ev) => {
    const wichInput = ev.currentTarget.name;
    if (wichInput === "name") {
      setData({
        ...data,
        name: ev.currentTarget.value,
      });
    } else if (wichInput === "job") {
      setData({ ...data, job: ev.currentTarget.value });
    } else if (wichInput === "phone") {
      setData({ ...data, phone: ev.currentTarget.value });
    } else if (wichInput === "email") {
      setData({ ...data, email: ev.currentTarget.value });
    } else if (wichInput === "linkedin") {
      setData({ ...data, linkedin: ev.currentTarget.value });
    } else if (wichInput === "github") {
      setData({ ...data, github: ev.currentTarget.value });
    }
  };

  // Mostrar Nombre y Trabajo en la tarjeta predefinida
  let nameToDisplay = showToDisplay(data.name, "Nombre Apellidos");
  let jobToDisplay = showToDisplay(data.job, "Front-end Developer");

  function showToDisplay(dataSome, result) {
    if (dataSome === "") {
      return result;
    } else {
      return dataSome;
    }
  }

  // Escuchadores de apertura y cierre de secciones
  const handleCollapsableDesign = (ev) => {
    if (collapseDesign === "hidden") {
      setCollapseDesign("");
      setCollapseFill("hidden");
      setCollapseShare("hidden");
    } else {
      setCollapseDesign("hidden");
      console.log(collapseDesign);
    }
  };
  const handleCollapsableFill = (ev) => {
    if (collapseFill === "hidden") {
      setCollapseFill("");
      setCollapseDesign("hidden");
      setCollapseShare("hidden");
    } else {
      setCollapseFill("hidden");
      console.log(collapseDesign);
    }
  };
  const handleCollapsableShare = (ev) => {
    if (collapseShare === "hidden") {
      setCollapseShare("");
      setCollapseDesign("hidden");
      setCollapseFill("hidden");
    } else {
      setCollapseShare("hidden");
      console.log(collapseDesign);
    }
  };


  const handleForm = () => {};

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
              <span className={`preview__pretty ${paletteColor}`}></span>
              <h2 className={`preview__name ${paletteColor}`}>
                {nameToDisplay}
              </h2>
              <h3 className={`preview__description`}>{jobToDisplay}</h3>
              <div
                style={{
                  backgroundImage: `url(${getPhotoUrl(data, true)})`,
                }}
                className="preview__image js__profile-image"
              ></div>
              <nav className="preview__icons">
                <a
                  className={`preview__icons--measures  ${paletteColor}`}
                  href={"+34" + data.phone}
                  title="phone"
                  name="phone"
                >
                  <i className="fas fa-mobile-alt"></i>
                </a>
                <a
                  className={`preview__icons--measures ${paletteColor}`}
                  href={`mailto:${data.email}`}
                  title="message"
                >
                  <i className="far fa-envelope"></i>
                </a>
                <a
                  className={`preview__icons--measures ${paletteColor}`}
                  href={`https://linkedin.com/in/${data.linkedin}`}
                  target="_blank"
                  title="linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className={`preview__icons--measures  ${paletteColor}`}
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
            <Design
              collapseDesign={collapseDesign}
              handleCollapse={handleCollapsableDesign}
              handlePalette={handlePalette}
            />

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
                    "fas fa-chevron-" +
                    (collapseFill === "hidden" ? "down" : "up") +
                    " collapsable__iconEnd js_iconEnd"
                  }
                ></i>
              </div>
              <section className={collapseFill + " fill"} id="fill">
                <fieldset className="fill__first">
                  <div className="fill__first--name">
                    <label htmlFor="fullName" className="fill__first--name-lab">
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
                      onChange={getImage}
                      id="photo"
                      className="hidden_button js__profile-upload-btn"
                    />
                    <div
                      className="fill__second-checkbox js__profile-preview"
                      style={{
                        backgroundImage: `url(${getPhotoUrl(data, false)})`,
                      }}
                    ></div>
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
                    <label htmlFor="telephone" className="fill__third--tel-lab">
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
                    "fas fa-chevron-" +
                    (collapseShare === "hidden" ? "down" : "up") +
                    " collapsable__iconEnd js_iconEnd"
                  }
                ></i>
              </div>
            </div>
            <Share />
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
