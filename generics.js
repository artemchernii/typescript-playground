"use strict";
function makeRequest(url, returnedData, params) {
    return returnedData;
}
const artemUser1 = { name: 'Artem', surname: 'Chernii' };
const myUser = makeRequest('/getUser', artemUser1);
const superArt = {
    title: 'Porsche IPO',
    author: artemUser1.name,
    content: 'Hype',
};
const myArticles = makeRequest('/getArticles', superArt);
