import './styles.css';
const _ = require('lodash');
import API from './apiService';
import cardTemplate from './card_templ.hbs';
// API.fetchPix('cat');

const inputRef = document.querySelector('.search-form');
const galRef = document.querySelector('.gallery');
console.log(galRef);

// inputRef.addEventListener('input', _.debounce(onInputChange, 500));

inputRef.addEventListener('submit', onSearch);

// let inputCbInvocationCounter = 0;

function onInputChange(event) {
  // event.preventDefault();
  // inputCbInvocationCounter += 1;
  console.log(event.target.value);
  // if (event.target.value)
  //   API.fetchCountries(event.target.value)
  //     .then(res => {
  //       console.table(`${res.length} - matches`);
  //       if (res.length > 10) return notify();

  //       if (res.length > 1) return renderCountrieTen(res);
  //       return renderCountrie(res[0]);
  //     })
  //     .catch(onFetchError);
}

function onSearch(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const searchQuery = form.elements.query.value;
  console.log('?', searchQuery);
  API.fetchPix(searchQuery).then(res => {
    console.log(res.hits[0]);
    return renderCard(res.hits);
  });

  //   .catch(onFetchError)
  //   .finally(() => form.reset());

  //   galRef.innerHTML = menu.reduce((acc, Val) => acc + mTemplate(Val), '');
}
function renderCard(array) {
  //   galRef.innerHTML = cardTemplate(obj);

  galRef.innerHTML = array.reduce((acc, Val) => acc + cardTemplate(Val), '');
  // gridRef.innerHTML = menu.reduce((acc, Val) => acc + mTemplate(Val), '');
}
