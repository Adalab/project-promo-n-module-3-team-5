//Ficheros componentes
import Footer from './Footer';

import Form from './Form';

// Fichero src/components/App.js
import '../styles/App.scss';
// Migración imagenes

import imagePreview from '../images/previewImg.jpg';
//useState
import { useState } from 'react';

// Componentes
import Header from './Header';
import Preview from './Preview';
import Share from './Share';
// Estilos
import '../styles/App.scss';
import '../styles/core/Reset.scss';
import '../styles/components/Preview.scss';

function App() {
  // Variables colapsables
  const [collapseDesign, setCollapseDesign] = useState('');
  const [collapseFill, setCollapseFill] = useState('hidden');
  const [collapseShare, setCollapseShare] = useState('hidden');

  // Variable de las paletas (radio)
  const [paletteColor, setPaletteColor] = useState('');

  //variable componente imagen
  const [image, setImage] = useState('');

  // Variable del Input del formulario (array de datos)
  const [data, setData] = useState({
    palette: 1,
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  // Busca el id de la paleta, ya que al ser un radio,
  // los names deben ser iguales, por esto debemos utilizar id y
  // no de puede utilizar en handleInput (que llama names)
  const handlePalette = (ev) => {
    const whichRadio = ev.target.id;
    if (whichRadio === 'palette-1') {
      setData({
        ...data,
        palette: parseInt(ev.target.value),
      });
      setPaletteColor('defaultpalette');
    } else if (whichRadio === 'palette-2') {
      setData({
        ...data,
        palette: parseInt(ev.target.value),
      });
      setPaletteColor('redpalette');
    } else if (whichRadio === 'palette-3') {
      setData({
        ...data,
        palette: parseInt(ev.target.value),
      });
      setPaletteColor('yellowpalette');
    }
  };

  // Funcion manejadora del formulario

  const handleInput = (ev) => {
    const wichInput = ev.currentTarget.name;
    if (wichInput === 'name') {
      setData({
        ...data,
        name: ev.currentTarget.value,
      });
    } else if (wichInput === 'job') {
      setData({ ...data, job: ev.currentTarget.value });
    } else if (wichInput === 'phone') {
      setData({ ...data, phone: ev.currentTarget.value });
    } else if (wichInput === 'email') {
      setData({ ...data, email: ev.currentTarget.value });
    } else if (wichInput === 'linkedin') {
      setData({ ...data, linkedin: ev.currentTarget.value });
    } else if (wichInput === 'github') {
      setData({ ...data, github: ev.currentTarget.value });
    }
  };

  // Mostrar Nombre y Trabajo en la tarjeta predefinida
  let nameToDisplay = showToDisplay(data.name, 'Nombre Apellidos');
  let jobToDisplay = showToDisplay(data.job, 'Front-end Developer');

  function showToDisplay(dataSome, result) {
    if (dataSome === '') {
      return result;
    } else {
      return dataSome;
    }
  }

  // Escuchadores de apertura y cierre de secciones
  const handleCollapsableDesign = (ev) => {
    if (collapseDesign === 'hidden') {
      setCollapseDesign('');
      setCollapseFill('hidden');
      setCollapseShare('hidden');
    } else {
      setCollapseDesign('hidden');
      console.log(collapseDesign);
    }
  };
  const handleCollapsableFill = (ev) => {
    if (collapseFill === 'hidden') {
      setCollapseFill('');
      setCollapseDesign('hidden');
      setCollapseShare('hidden');
    } else {
      setCollapseFill('hidden');
      console.log(collapseDesign);
    }
  };
  const handleCollapsableShare = (ev) => {
    if (collapseShare === 'hidden') {
      setCollapseShare('');
      setCollapseDesign('hidden');
      setCollapseFill('hidden');
    } else {
      setCollapseShare('hidden');
      console.log(collapseDesign);
    }
  };

  //funcion manejadora componente
  const handleImage = (imageData) => {
    setImage(imageData);
  };

  return (
    <div className='root'>
      <div className='page-wrapper'>
        <Header />
        <main className='wholeMain'>
          <Preview
            data={data}
            paletteColor={paletteColor}
            name={data.name}
            job={data.job}
            phone={data.phone}
            email={data.email}
            linkedin={data.linkedin}
            github={data.github}
          />

          <Form
            handleImage={handleImage}
            handleInput={handleInput}
            handleCollapsableDesign={handleCollapsableDesign}
            handleCollapsableFill={handleCollapsableFill}
            handleCollapsableShare={handleCollapsableShare}
            handlePalette={handlePalette}
            collapseDesign={collapseDesign}
            collapseShare={collapseShare}
            collapseFill={collapseFill}
            dataName={data.name}
            dataJob={data.job}
            dataEmail={data.email}
            dataPhone={data.phone}
            dataLink={data.linkedin}
            dataGit={data.github}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
