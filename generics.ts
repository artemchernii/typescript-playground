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

function checkTheType<T>(type: T): string {
    return typeof type;
}

const boolCheck = false;
const nullCheck = null;

const whatIsBool = checkTheType<Boolean>(boolCheck);
const whatIsNull = checkTheType<null>(nullCheck);

console.log('whatIsNull', whatIsNull);
console.log('whatIsBool', whatIsBool);

// Generics in interface

interface User000<T> {
    type: T;
    name: string;
}

const rustamUser: User000<number> = { name: 'Rustam', type: 5 };

type CustomerType = 'new' | 'impulse' | 'angry' | 'happy';
class WorkWithCustomer<T> {
    type: T;
    name: string;
    constructor(type: T, name: string) {
        this.type = type;
        this.name = name;
    }
}

const workWithCustomer1 = new WorkWithCustomer<CustomerType>('new', 'Artem');
interface MinPersInfo {
    name: string;
}
interface DefaultCustomer {
    type: 'usual';
    name: 'Unknown';
}
function workWithPerson<T extends MinPersInfo = DefaultCustomer>(
    args: T
): string {
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
