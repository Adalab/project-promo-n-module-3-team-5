import "../styles/components/Preview.scss";
import getPhotoUrl from "./image";

function Preview(props) {
  // Mostrar Nombre y Trabajo en la tarjeta predefinida
  let nameToDisplay = showToDisplay(props.data.name, "Nombre Apellidos");
  let jobToDisplay = showToDisplay(props.data.job, "Front-end Developer");

  function showToDisplay(dataSome, result) {
    if (dataSome === "") {
      return result;
    } else {
      return dataSome;
    }
  }

  return (
    <section className="preview">
      <button className="preview__button js_resetButton">
        <i className="fas fa-trash-alt"></i>reset
      </button>
      <article className="preview__card">
        <span className="preview__pretty  js_designColor"></span>
        <h2 className="preview__name js_previewName js_design">
          {nameToDisplay}
        </h2>
        <h3 className="preview__description js_previewDescription">
          {jobToDisplay}
        </h3>
        <div
          style={{
            backgroundImage: `url(${getPhotoUrl(props.data, true)})`,
          }}
          className="preview__image js__profile-image"
        ></div>
        <nav className="preview__icons">
          <a
            className="preview__icons--measures"
            href={"+34" + props.data.phone}
            title="phone"
            name="phone"
          >
            <i className="fas fa-mobile-alt"></i>
          </a>
          <a
            className="preview__icons--measures"
            href={`mailto:${props.data.email}`}
            title="message"
          >
            <i className="far fa-envelope"></i>
          </a>
          <a
            className="preview__icons--measures js_designColor js_previewLinkedin"
            href={`https://linkedin.com/in/${props.data.linkedin}`}
            target="_blank"
            title="linkedin"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="preview__icons--measures js_designColor js_previewGithub"
            href={`https://github.com/${props.data.github}`}
            target="_blank"
            title="github"
          >
            <i className="fab fa-github-alt"></i>
          </a>
        </nav>
      </article>
    </section>
  );
}

export default Preview;
