const callToApi = (data) => {
  console.log(data);
  return fetch('http://localhost:4001/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log('Error:', error));
};

export default callToApi;
