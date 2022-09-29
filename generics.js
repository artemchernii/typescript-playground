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
function checkTheType(type) {
    return typeof type;
}
const boolCheck = false;
const nullCheck = null;
const whatIsBool = checkTheType(boolCheck);
const whatIsNull = checkTheType(nullCheck);
console.log('whatIsNull', whatIsNull);
console.log('whatIsBool', whatIsBool);
