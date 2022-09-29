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
const rustamUser = { name: 'Rustam', type: 5 };
class WorkWithCustomer {
    type;
    name;
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }
}
const workWithCustomer1 = new WorkWithCustomer('new', 'Artem');
function workWithPerson(args) {
    if (Object.entries(args).length > 1) {
        console.log('Object has more than one key');
        for (const key in args) {
            if (Object.prototype.hasOwnProperty.call(args, key)) {
                const element = args[key];
                console.log(`key:${key} | element: ${element}`);
            }
        }
    }
    return args.name;
}
const wwp = workWithPerson({ name: 'Artem' });
const testDef = workWithPerson({ type: 'a', name: 'Ahtung' });
console.log(testDef);
