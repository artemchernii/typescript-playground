interface Accomodation {
    title: string;
    location?: string;
    address: string;
    rooms: number;
}

const mySimpleAccomodation: Pick<Accomodation, 'title' | 'address'> = {
    title: 'appart',
    address: 'Berlin',
};

let utilArr: ReadonlyArray<number> = [1, 2, 3, 4];
let simpleArr: Array<number> = [1, 2, 3, 4];

const myFloatAccomodation: Required<Accomodation> = {
    title: 'home',
    location: 'center',
    address: 'Lisbon',
    rooms: 10,
};

// Records

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = 'myr' | 'kek' | 'boris';

const cats: Record<CatName, CatInfo> = {
    boris: { age: 2, breed: 'dvor' },
    kek: { age: 1, breed: 'qwert' },
    myr: { age: 5, breed: 'popwoeqp' },
};
