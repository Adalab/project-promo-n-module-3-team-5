import '../styles/components/Share.scss';
import { useState } from 'react';
import callToApi from '../services/api';

function Share(props) {
  const collapseShare = () => {};

  // Esta variable es para cambiar el href y el texto en el apartado de compartir
  const [urlShare, setUrlShare] = useState('');
  const [successCard, setSuccessCard] = useState('hidden');
  const [cardCreated, setCardCreated] = useState('');
  const [linkTwitter, setLinkTwitter] = useState('');

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
        // Estas variable es para remover/aÃ±adir la clase hidden
        setSuccessCard('');
        setCardCreated('');
        setLinkTwitter('');
      } else {
        setSuccessCard('');
        setCardCreated('hidden');
        setLinkTwitter('hidden');

        if (props.data.name === '') {
          setUrlShare('ð¤·ââï¸ Debes rellenar tu nombre ð');
        } else if (props.data.job === '') {
          setUrlShare('ð¤·ââï¸ Debes rellenar tu profesiÃ³n ð');
        } else if (props.data.photo === '') {
          setUrlShare('ð¤·ââï¸ Debes rellenar tu foto ð');
        } else if (props.data.email === '') {
          setUrlShare('ð¤·ââï¸ Debes rellenar tu email ð');
        } else if (!validateEmail(props.data.email)) {
          setUrlShare(
            'ð¤·ââï¸ Debes rellenar correctamente tu email, falta un @ o algo ð ð'
          );
        } else if (props.data.phone === '') {
          setUrlShare('ð¤·ââï¸ Debes rellenar tu mÃ³vil ð');
        } else if (!validatePhone(props.data.phone)) {
          setUrlShare(
            'ð¤·ââï¸ Debes rellenar correctamente tu movil, te faltan datos ð ð'
          );
        } else if (props.data.linkedin === '') {
          setUrlShare('ð¤·ââï¸ Debes rellenar tu linkedin ð');
        } else if (props.data.github === '') {
          setUrlShare('ð¤·ââï¸ Debes rellenar tu github ð');
        }
      }
    });
  };

  return (
    <section className={collapseShare} id="share">
      <fieldset className="share">
        <div className="share__second">
          <button className="share__button" onClick={handleClick}>
            <i className="far fa-address-card"></i> Crear tarjeta
          </button>
        </div>
        <div className="share__topBorder"> </div>
        <div className={`share__collapsable ${successCard}`}>
          <h3 className={`share__collapsable__title ${cardCreated}`}>
            La tarjeta ha sido creada
          </h3>
          <a className="card__http" href={urlShare} target="_blank">
           {urlShare}
          </a>
          <button className={`share__collapsable__button ${linkTwitter}`}>
            <a
              className="share__collapsable__button--link"
              href={`https://twitter.com/intent/tweet?text= Mi tarjeta profesional ð©ð»âð» Â¡ContÃ¡ctame! ð &hashtags=Adalabers,JavaScript,PromoNerea,team5'&url=${urlShare}`}
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
