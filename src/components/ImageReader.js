import { useRef, useState } from 'react';

/*
El orden cronológico en el que se ejecuta este componente es:
- Se renderiza la primera vez
  - Se crea la referencia fileElement
  - Se crea el lector de ficheros fileReader
  - Se pinta el input file
- Cuando la usuaria selecciona una imagen:
  - Se ejecuta la función handleFile
    - Esta función ejecuta fileReader.readAsDataURL(selectedFile)
    - La función readAsDataURL lee el contenido de la imagen
    - La función readAsDataURL es asíncrona. Cuando termine lanzará un evento 'load'.
- Pasados unos milisegundos cuando se lance el evento 'load':
  - Se ejecutará la función getImage
    - Que subirá los datos de la imagen por lifting
*/

const ImageReader = (props) => {
  // Creamos una referencia al input file para poder leer su contenido más tarde
  const fileElement = useRef();

  // Creamos un lector de ficheros
  // FileReader es una funcionalidad nativa de JavaScript, búscala en Internet si te atreves
  const fileReader = new FileReader();

  // Cuando la usuaria selecciona una imagen se ejecuta esta función
  const handleFile = () => {
    // fileElement.current es literalmente el input file
    // Cogemos su propiedad files que es un array con todas las imagenes seleccionadas por la usuaria
    // Como solo queremos la primera imagen seleccionada cogemos el primer elemento de files
    const selectedFile = fileElement.current.files[0];

    // Si la usuaria ha seleccionado al menos una imagen selectedFile es diferente de undefined
    if (selectedFile) {
      console.log(selectedFile);

      // Guardamos el tamaño y el tipo de la imagen en el estado

      // Le decimos al lector de ficheros que lea el fichero seleccionado por la usuaria
      fileReader.readAsDataURL(selectedFile);
      // Cuando esta acción termine fileReader lanzará el evento 'load'
    }
  };

  // Esta función se ejecuta cuando fileReader lanza el evento 'load'
  const getImage = () => {
    // Cuando la imagen ya está lista en fileReader.result tenemos su contenido
    // Hacemos lifting de este contenido hacia arriba
    props.handleImage(fileReader.result);
  };

  // Escuchamos el evento load de fileReader y cuando se lance lo manejamos con la función getImage
  fileReader.addEventListener('load', getImage);

  return (
    <fieldset className='quest__secondfield'>
      <label htmlFor='photo' className='quest__button js__profile-trigger'>
        {' '}
        Añadir imagen{' '}
      </label>
      {/* Usamos fileElement como referencia de este input */}
      <div className='action'>
        <input
          ref={fileElement}
          type='file'
          name='photo'
          id='photo'
          className='action__hiddenField js__profile-upload-btn'
          required
          onChange={handleFile}
        />
      </div>
      <div className='quest__button--window js__profile-preview'></div>
    </fieldset>
  );
};

export default ImageReader;
