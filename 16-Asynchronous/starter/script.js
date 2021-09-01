'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  if (data.length > 1) return; // multiple countries
  // console.log(data);
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(request.responseText);
    const [data] = JSON.parse(request.responseText);
    renderCountry(data);
  });
};

// getCountry('germany');
// getCountry('usa');

const country = 'australia';
const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`);

// console.log(request);

const getJSON = function (url, errorM = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorM} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  //country 1

  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      //   const neighbour = 'wtf'; //err check
      if (!neighbour) throw new Error('no Neighbour found');
      //country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Neighbour not found'
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong! ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => getCountryData(country));

// const getCountryData = function (country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//       .then(response => {
//         console.log(response);
//         return response.json();
//       })
//       .then(response => {
//         console.log(response);
//         renderCountry(response[0]);
//       });
//   };

//error handling example
// getCountryData('wtfasdasd');

// const getCountryData = function (country) {
//     //country 1
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Country not found (${response.status})`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];
//         if (!neighbour) return;
//         //country 2
//         return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//       })
//       .then(response => response.json())
//       .then(data => renderCountry(data, 'neighbour'))
//       .catch(err => renderError(err.message))
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       });
//   };
