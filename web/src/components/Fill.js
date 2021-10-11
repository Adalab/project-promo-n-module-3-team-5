// Estilos
import "../styles/components/Fill.scss";

function Fill(props) {

  const handleInput = ev => {
    props.updateInput()
  }

  const handleForm = ev => {
    props.updateInput()
  }

  return (
    <>
      <fieldset className="fill__first">
        <div className="fill__first--name">
          <label htmlFor="fullName" className="fill__first--name-lab">
            Nombre completo *
          </label>
          <input
            value={props.data.name}
            className="fill__first--name-inp js_allInputs"
            placeholder="Ej: Sally Jill"
            id="name"
            type="text"
            name="name"
            onChange={handleInput}
          />
        </div>
        <div className="fill__first--position">
          <label htmlFor="position" className="fill__first--position-lab">
            Puesto *
          </label>
          <input
            value={props.data.job}
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
            className="fill__third--mail-inp"
            placeholder="Ej: sally-hill@gmail.com"
            id="email"
            type="email"
            name="email"
            value={props.data.email}
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
            value={props.data.phone}
            onChange={handleInput}
          />
        </div>
        <div className="fill__third--linked">
          <label htmlFor="linkedinName" className="fill__third--linked-lab">
            Linkedin *
          </label>
          <input
            className="fill__third--linked-inp js_allInputs"
            placeholder="Ej: linkedin.com/in/sally.hill"
            id="linkedin"
            type="text"
            name="linkedin"
            value={props.data.linkedin}
            onChange={handleInput}
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
            value={props.data.github}
            onChange={handleInput}
          />
          {/*<!--no hay input type =sumbit value= enviar info porque la información se va mostrando en el momento en la tarjeta y no se manda a ningún lugar-->*/}
        </div>
      </fieldset>
    </>
  );
}

export default Fill;
