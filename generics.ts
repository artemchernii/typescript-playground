interface User555 {
    name: string;
    surname: string;
}

interface Articles {
    title: string;
    author: string;
    content: string;
}

interface Params {
    query: {};
}

function makeRequest<Type>(
    url: string,
    returnedData: Type,
    params?: Params
): Type {
    return returnedData;
}
const artemUser1: User555 = { name: 'Artem', surname: 'Chernii' };
const myUser = makeRequest<User555>('/getUser', artemUser1);
const superArt: Articles = {
    title: 'Porsche IPO',
    author: artemUser1.name,
    content: 'Hype',
};
const myArticles = makeRequest<Articles>('/getArticles', superArt);
