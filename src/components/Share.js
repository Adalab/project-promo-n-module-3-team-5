import "../styles/components/Share.scss";
import { useState } from "react";
import callToApi from "../services/api";

function Share(props) {
  const collapseShare = () => {};

  // Esta variable es para cambiar el href y el texto en el apartado de compartir
  const [urlShare, setUrlShare] = useState("");
  const [successCard, setSuccessCard] = useState("hidden");
  const [cardCreated, setCardCreated] = useState("");
  const [linkTwitter, setLinkTwitter] = useState("");

  // Validar datos del formulario
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const ph = /^([9,8,7,6]{1})+([0-9]{8})$/;
    return ph.test(phone);
  }

  const handleClick = () => {
    callToApi(props.data).then((response) => {
      setUrlShare(response.cardURL);

      if (response.success) {
        // Estas variable es para remover/añadir la clase hidden
        setSuccessCard("");
      } else {
        setSuccessCard("");
        setCardCreated("hidden");
        setLinkTwitter("hidden");

        if (props.data.name === "") {
          setUrlShare("🤷‍♀️ Debes rellenar tu nombre 👆");
        } else if (props.data.job === "") {
          setUrlShare("🤷‍♀️ Debes rellenar tu profesión 👆");
        } else if (props.data.photo === "") {
          setUrlShare("🤷‍♀️ Debes rellenar tu foto 👆");
        } else if (props.data.email === "") {
          setUrlShare("🤷‍♀️ Debes rellenar tu email 👆");
        } else if (!validateEmail(props.data.email)) {
          setUrlShare(
            "🤷‍♀️ Debes rellenar correctamente tu email, falta un @ o algo 😉 👆"
          );
        } else if (props.data.phone === "") {
          setUrlShare("🤷‍♀️ Debes rellenar tu móvil 👆");
        } else if (!validatePhone(props.data.phone)) {
          setUrlShare(
            "🤷‍♀️ Debes rellenar correctamente tu movil, te faltan datos 😉 👆"
          );
        } else if (props.data.linkedin === "") {
          setUrlShare("🤷‍♀️ Debes rellenar tu linkedin 👆");
        } else if (props.data.github === "") {
          setUrlShare("🤷‍♀️ Debes rellenar tu github 👆");
        }
      }
    });
  };

  return (
    <section className={collapseShare} id="share">
      <fieldset className="share">
        <div className="share__second">
          <button
            className="share__button"
            onClick={handleClick}
          >
            <i className="far fa-address-card"></i> Crear tarjeta
          </button>
        </div>
        <div className="share__topBorder"> </div>
        <div className={`share__collapsable ${successCard}`}>
          <h3 className={`share__collapsable__title ${cardCreated}`}>
            La tarjeta ha sido creada
          </h3>
          <p className="card__http">{urlShare}</p>
          <button className={`share__collapsable__button ${linkTwitter}`}>
            <a
              className="share__collapsable__button--link"
              href={urlShare}
              target="_blank"
            >
              <i className="icon3 fab fa-twitter"></i>&nbsp;Compartir en twitter
            </a>
          </button>
        </div>
      </fieldset>
    </section>
  );
}

export default Share;
