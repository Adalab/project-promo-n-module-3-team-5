import imagePreview from "../images/previewImg.jpg";

import "../styles/components/Preview.scss";

function Preview(props) {
  // Mostrar Nombre y Trabajo en la tarjeta predefinida
  let nameToDisplay = showToDisplay(props.name, "Nombre Apellidos");
  let jobToDisplay = showToDisplay(props.job, "Front-end Developer");

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
        <span
          className={`preview__pretty ${props.firstColor} ${props.secondColor} ${props.thirdColor}`}
        ></span>
        <h2
          className={`preview__name ${props.firstColor} ${props.secondColor} ${props.thirdColor} `}
        >
          {nameToDisplay}
        </h2>
        <h3 className={`preview__description`}>{jobToDisplay}</h3>
        <div
          style={{
            backgroundImage: `url(${imagePreview})`,
          }}
          className="preview__image js__profile-image"
        ></div>
        <nav className="preview__icons">
          <a
            className={`preview__icons--measures  ${props.firstColor} ${props.secondColor} ${props.thirdColor}`}
            href={"+34" + props.phone}
            title="phone"
            name="phone"
          >
            <i className="fas fa-mobile-alt"></i>
          </a>
          <a
            className={`preview__icons--measures ${props.firstColor} ${props.secondColor} ${props.thirdColor}`}
            href={`mailto:${props.email}`}
            title="message"
          >
            <i className="far fa-envelope"></i>
          </a>
          <a
            className={`preview__icons--measures ${props.firstColor} ${props.secondColor} ${props.thirdColor}`}
            href={`https://linkedin.com/in/${props.linkedin}`}
            target="_blank"
            title="linkedin"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className={`preview__icons--measures  ${props.firstColor} ${props.secondColor} ${props.thirdColor}`}
            href={`https://github.com/${props.github}`}
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
