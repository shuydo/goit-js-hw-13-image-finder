console.clear();
import './styles.css';
const _ = require('lodash');
import API from './apiService';
import cardTemplate from './card_templ.hbs';
// API.fetchPix('cat');

const inputRef = document.querySelector('.search-form');
const galRef = document.querySelector('.gallery');
const moreBtnRef = document.querySelector('.more');
// console.log(moreBtnRef);
let searchQuery = '';
// let currentQuery='';
let pageN=1;

// inputRef.addEventListener('input', _.debounce(onInputChange, 500));

inputRef.addEventListener('submit', onSearch);
moreBtnRef.addEventListener('click', onClickMoreBtn);

function onClickMoreBtn() {
  // console.log('onClickMoreBtn');

  API.fetchPix(searchQuery, pageN).then(res => {
    pageN += 1;
    return renderCard(res.hits);
  });
}

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
  const submitText = evt.currentTarget;
  // console.log('submitText:_', submitText.elements.query.value, '_searchQuery:_', searchQuery,'_');
  if (submitText.elements.query.value === searchQuery)return;
    pageN = 1;
    galRef.innerHTML = '';
    searchQuery = submitText.elements.query.value;

    // console.log('?', searchQuery);

    API.fetchPix(searchQuery, pageN).then(res => {
      // console.log(res.hits[0]);
      pageN += 1;
      return renderCard(res.hits);
    });
  

  //   .catch(onFetchError)
  //   .finally(() => form.reset());

  //   galRef.innerHTML = menu.reduce((acc, Val) => acc + mTemplate(Val), '');
}
function renderCard(array) {
  // console.log('arr',array.reduce((acc, Val) => acc + cardTemplate(Val), ''));
  // galRef.innerHTML = cardTemplate(obj);

  // galRef.innerHTML = array.reduce((acc, Val) => acc + cardTemplate(Val), '');
  galRef.insertAdjacentHTML(
    'beforeend',
    array.reduce((acc, Val) => acc + cardTemplate(Val), ''),
  );
  // galRef.insertAdjacentHTML("beforeend", cardTemplate(array));

  // gridRef.innerHTML = menu.reduce((acc, Val) => acc + mTemplate(Val), '');
}
