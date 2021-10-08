const callToApi = () => {
  return fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
  /* .then((pepino) => {
      console.log(pepino);
      pepinoLink = pepino.cardURL;
      if (pepino.success === true) {
        notCreated.classList.remove('hidden');
        urlCard.innerHTML = `<a href="${pepino.cardURL}">Pincha aquí, ${data.name} <i class="far fa-smile-wink"></i> </a>`;
        twitterBtn.classList.remove('hidden');
        twitterBtn.innerHTML = `<a class= "twitter__link js_twitterLink" href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${pepinoLink}" target="_blank"><i class="fab fa-twitter"></i> Compartir en Twiter</a>`;
      } else {
        notCreated.innerHTML = 'No hemos podido crear la tarjeta';
        urlCard.innerHTML = `<i class="far fa-sad-tear"></i> Introduzca todos los campos obligatorios`;
      }
      return response;
    });
};*/
  return response;
};

export default callToApi;
