import '../styles/components/Share.scss';

function Share(props) {
  return (
    <div>
      <div className='topBorder'></div>
      <div
        className='collapsable js_collapsable'
        onClick={props.handleCollapsableShare}
      >
        <i className='fas fa-share-alt collapsable__iconStart'></i>
        <h3 className='collapsable__title'>Comparte</h3>
        <i
          className={
            'fas fa-chevron-' +
            (props.collapseShare === 'hidden' ? 'down' : 'up') +
            ' collapsable__iconEnd js_iconEnd'
          }
        ></i>
      </div>

      <section className={props.collapseShare} id='share'>
        <fieldset className='share'>
          <div className='share__second'>
            <button className='share__button js_shareButton'>
              <i className='far fa-address-card'></i> Crear tarjeta
            </button>
          </div>
          <div className='share__topBorder'> </div>
          <div className='share__collapsable js_createdCard'>
            <h3 className='share__collapsable__title js_notCreate'>
              La tarjeta ha sido creada
            </h3>
            <p className='card__http js_urlCard'>
              https://awesome-profile-card.com?id=A456DF0001
            </p>
            <button className='share__collapsable__button js_twiterBtn'>
              <a
                className='share__collapsable__button--link'
                href='./'
                target='_blank'
              >
                <i className='icon3 fab fa-twitter'></i>&nbsp;Compartir en
                twitter
              </a>
            </button>
          </div>
        </fieldset>
      </section>
    </div>
  );
}

export default Share;
