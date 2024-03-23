// require('dotenv').config({ path: './.env' });
// const fetch = require('node-fetch');
const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);
        newsDiv.appendChild(articleDiv);
    }
}

fetchNews();

const everything = 'https://newsapi.org/v2/everything?language=fr&q="war"&apiKey=1b5f1f2c48614fc9b4703ae271a6cc43';
const topheadlines = 'https://newsapi.org/v2/top-headlines?&apiKey=1b5f1f2c48614fc9b4703ae271a6cc43';
