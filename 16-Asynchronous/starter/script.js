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
  countriesContainer.style.opacity = 1;
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

// const country = 'australia';
// const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`);

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
    // .then(response => {
    //   console.log(response);
    //   return response;
    // })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong! ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => whereAmI());

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

const key = '725717483432525614913x80648';

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    //NOTE:
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lon } = pos.coords;
//       // console.log(lat, lon);
//       return fetch(`https://geocode.xyz/${lat},${lon}?geoit=JSON&auth=${key}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error('could not find location');
//       // console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       // console.log(data);
//       if (!data.city || !data.country)
//         throw new Error('could not find the name');
//       console.log(`You are in ${data.city},${data.country}`);
//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(data => {
//       if (!data.ok) throw new Error('country not found');
//       return data.json();
//     })
//     .then(data => {
//       renderCountry(data[1]); // India Issue
//       //renderCountry(data[0]);
//       // console.log('wtf');
//     });
//   // .catch(err => console.error(`${err.message}`));
// };

// whereAmI();

//get my location and call whereAmI

// navigator.geolocation.getCurrentPosition(
//   a => {
//     // console.log(a);
//     const { latitude, longitude } = a.coords;
//     whereAmI(latitude, longitude);
//   },
//   () => alert('couldnt find current POS')
// );

// whereAmI('wtf', 'asd');

// whereAmI(52.508, 13.381);

// whereAmI(-33.933, 18.474);

////////////////////////////////////////////////////////
//coding challenge 2
const imgContainer = document.querySelector('.images');
const wait = function (x) {
  return new Promise(function (resolve) {
    setTimeout(resolve, x * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;
    image.addEventListener('load', function () {
      imgContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

let curImg;

// createImage('/img/img-1.jpg')
//   .then(img => {
//     console.log('image1 loaded');
//     curImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     curImg.style.display = '0';
//     return createImage('/img/img-2.jpg');
//   })
//   .then(img => {
//     console.log('image2 loaded');
//     curImg = img;
//     return wait(2);
//   })
//   .then(() => (curImg.style.display = 'none'));

const whereAmI = async function () {
  const position = await getPosition();
  // console.log(position);
  const { latitude: lat, longitude: lon } = position.coords;
  // console.log(lat, lon);

  //reverse Geocoding
  const geoCode = await fetch(
    `https://geocode.xyz/${lat},${lon}?geoit=JSON&auth=${key}`
  );
  const geoCodeJson = await geoCode.json();
  console.log(`You are in ${geoCodeJson.city},${geoCodeJson.country}`);

  //country data
  const country = await fetch(
    `https://restcountries.eu/rest/v2/name/${geoCodeJson.country}`
  );
  const countryJson = await country.json();
  // console.log(countryJson);
  renderCountry(countryJson[1]);

  // return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
  //   })
  //   .then(data => {
  //     if (!data.ok) throw new Error('country not found');
  //     return data.json();
  //   })
  //   .then(data => {
  //     renderCountry(data[1]); // India Issue
  //renderCountry(data[0]);
  // console.log('wtf');
  // });
  // .catch(err => console.error(`${err.message}`));
};
