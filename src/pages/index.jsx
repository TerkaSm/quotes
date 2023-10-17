import './index.css'
import {quotes} from './quotes.js'
import {chooseRandomItem} from './quotes.js'


const randomQuoteObject = chooseRandomItem(); // Uložíš si do proměnné výsledek funkce (objekt) (náhodný citát)

const containerElement = document.querySelector('.container');
containerElement.innerHTML += `
    <div class="quote">
        <p class="quote__content">${randomQuoteObject.textQuote}</p>
        <p class="quote__author">${randomQuoteObject.authorQuote}</p>
    </div>
    `
