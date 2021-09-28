const Form = (props) => {
  return (
    <form onSubmit={props.handleForm} className='form'>
      <div>
        <div
          className='collapsable  js_collapsable_design'
          onClick={props.handleCollapsableDesign}
        >
          <i className='far fa-object-ungroup cloningicon collapsable__iconStart'></i>
          <h3 className='collapsable__title'>Diseña</h3>
          <i
            className={
              'fas fa-chevron-' +
              (props.collapseDesign === 'hidden' ? 'down' : 'up') +
              ' collapsable__iconEnd js_iconEnd'
            }
          ></i>
        </div>
        <section className='wholecollapsable-design     js_section' id='desing'>
          {/*   <div className='titledesignflex'>
      <i className='far fa-object-ungroup cloningicon'></i>
      <h3 className='titledesign'>diseña</h3>
      <i className='fas fa-chevron-up arrowdesign'></i>
    </div> */}
          <div className='rectangle-2'></div>
          <fieldset className={props.collapseDesign + ' flexboxdesign'}>
            <h4 className='titlecolours'>colores</h4>
            <div>
              <div className='colourboxesmaster js_designevent'>
                <label className='label__design' htmlFor='palette-1'>
                  <input
                    id='palette-1'
                    className='design__input js_design'
                    type='radio'
                    value='1'
                    name='palette'
                    onChange={props.handlePalette}
                    /*  checked={palette} */
                  />
                  <ul className='colourboxes colourone'>
                    <li className='item1-item1 li'>Color A</li>
                    <li className='item1-item2 li'>Color B</li>
                    <li className='item1-item3 li'>Color C</li>
                  </ul>
                </label>
              </div>
              <label className='label__design' htmlFor='palette-2'>
                <input
                  id='palette-2'
                  className='design__input js_design'
                  type='radio'
                  value='2'
                  name='palette'
                  onChange={props.handlePalette}
                  // checked={palette}
                />
                <ul className='colourboxes colourtwo'>
                  <li className='item2-item1 li'>Color A</li>
                  <li className='item2-item2 li'>Color B</li>
                  <li className='item2-item3 li'>Color C</li>
                </ul>
              </label>
              <label className='label__design' htmlFor='palette-3'>
                <input
                  id='palette-3'
                  className='design__input js_design'
                  type='radio'
                  value='3'
                  name='palette'
                  onChange={props.handlePalette}
                  // checked={palette}
                />
                <ul className='colourboxes colourthree'>
                  <li className='item3-item2 li'>Color B</li>
                  <li className='item3-item1 li'>Color A</li>
                  <li className='item3-item3 li'>Color C</li>
                </ul>
              </label>
            </div>
          </fieldset>
        </section>
      </div>
      <div>
        <div className='topBorder'></div>
        <div
          className='collapsable js_collapsable_fill '
          onClick={props.handleCollapsableFill}
        >
          <i className='far fa-keyboard collapsable__iconStart'></i>
          <h3 className='collapsable__title'>Rellena</h3>
          <i
            className={
              'fas fa-chevron-' +
              (props.collapseFill === 'hidden' ? 'down' : 'up') +
              ' collapsable__iconEnd js_iconEnd'
            }
          ></i>
        </div>
        <section className={props.collapseFill + ' fill'} id='fill'>
          <fieldset className='fill__first'>
            <div className='fill__first--name'>
              <label htmlFor='fullName' className='fill__first--name-lab'>
                Nombre completo *
              </label>
              <input
                value={props.dataName.name}
                className='fill__first--name-inp js_allInputs'
                placeholder='Ej: Sally Jill'
                id='name'
                type='text'
                name='name'
                onChange={props.handleInput}
              />
            </div>
            <div className='fill__first--position'>
              <label htmlFor='position' className='fill__first--position-lab'>
                Puesto *
              </label>
              <input
                value={props.dataJob.job}
                className='fill__first--position-inp js_allInputs'
                placeholder='Ej: Front-end unicorn'
                id='job'
                type='text'
                name='job'
                onChange={props.handleInput}
              />
            </div>
          </fieldset>
          <fieldset className='fill__second'>
            <label className='fill__second-label'>Imagen de perfil *</label>
            <div className='fill__second-buttoncheck'>
              <label className='fill__second-button' htmlFor='photo'>
                Añadir imagen
              </label>
              {/*  <ImageReader
                type='file'
                id='photo'
                className='hidden_button js__profile-upload-btn'
                handleImage={props.handleImage}
              /> */}
              <div className='fill__second-checkbox js__profile-preview'></div>
            </div>
          </fieldset>
          <fieldset className='fill__third'>
            <div className='fill__third--mail'>
              <label htmlFor='email' className='fill__third--mail-lab'>
                Email *
              </label>
              <input
                className='fill__third--mail-inp'
                placeholder='Ej: sally-hill@gmail.com'
                id='email'
                type='email'
                name='email'
                value={props.dataEmail.email}
                onChange={props.handleInput}
              />
            </div>
            <div className='fill__third--tel'>
              <label htmlFor='telephone' className='fill__third--tel-lab'>
                Teléfono
              </label>
              <input
                className='fill__third--tel-inp js_allInputs'
                placeholder='Ej: 555-55-55-55'
                id='phone'
                type='tel'
                name='phone'
                value={props.dataPhone.phone}
                onChange={props.handleInput}
              />
            </div>
            <div className='fill__third--linked'>
              <label htmlFor='linkedinName' className='fill__third--linked-lab'>
                Linkedin *
              </label>
              <input
                className='fill__third--linked-inp js_allInputs'
                placeholder='Ej: linkedin.com/in/sally.hill'
                id='linkedin'
                type='text'
                name='linkedin'
                value={props.dataLink.linkedin}
                onChange={props.handleInput}
              />
            </div>
            {/*<!-- se consideraría type text para un texto que empieza con arroba¿?-->*/}
            <div className='fill__third--git'>
              <label htmlFor='gitHubName' className='fill__third--git-lab'>
                Github *
              </label>
              <input
                className='fill__third--git-inp js_allInputs'
                placeholder='Ej: @sally-hill'
                id='github'
                type='text'
                name='github'
                value={props.dataGit.github}
                onChange={props.handleInput}
              />
              {/*<!--no hay input type =sumbit value= enviar info porque la información se va mostrando en el momento en la tarjeta y no se manda a ningún lugar-->*/}
            </div>
          </fieldset>
        </section>
      </div>
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
                href=''
                target='_blank'
              >
                <i className='icon3 fab fa-twitter'></i>&nbsp;Compartir en
                twitter
              </a>
            </button>
          </div>
        </fieldset>
      </section>
    </form>
  );
};

export default Form;
