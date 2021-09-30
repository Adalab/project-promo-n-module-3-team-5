import '../styles/components/Share.scss';

function Share(props) {
  return (
    <section className={props.collapseShare} id='share'>
      <fieldset className='share'>
        <div className='share__second'>
          <button className='share__button js_shareButton'>
            <i className='far fa-address-card'></i> Crear tarjeta
          </button>
        </div>
        <div className='share__topBorder'> </div>
        <div className={`share__collapsable ${props.successCard}`}>
          <h3 className={`share__collapsable__title ${props.cardCreated}`}>
            La tarjeta ha sido creada
          </h3>
          <p className='card__http'>{props.urlShare}</p>
          <button className={`share__collapsable__button ${props.linkTwitter}`}>
            <a
              className='share__collapsable__button--link'
              href={props.urlShare}
              target='_blank'
            >
              <i className='icon3 fab fa-twitter'></i>&nbsp;Compartir en twitter
            </a>
          </button>
        </div>
      </fieldset>
    </section>
  );
}

export default Share;
