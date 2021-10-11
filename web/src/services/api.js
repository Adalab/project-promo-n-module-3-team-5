const callToApi = (data) => {
  return fetch('http://localhost:4000/card', {
    method: 'GET',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export default callToApi;
