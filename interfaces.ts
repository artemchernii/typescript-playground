interface User {
  name: string;
  age: string | number;
  job?: Jobs;

  hobbies: Hobbies;
}
type Jobs = 'front' | 'back' | 'arch';

interface Hobbies {
  hobbie: HobbiesType;
  howLong: number;
  isNow?: boolean;
}

type HobbiesType = 'football' | 'gaming' | 'boxing';

interface BigInterface extends User {
  lazy: boolean;
}

const artemUser: User = {
  name: 'Artem',
  age: 28,
  job: 'back',
  hobbies: {
    hobbie: 'football',
    howLong: 2,
    isNow: true,
  },
};

const olejka: BigInterface = {
  name: 'Olejka',
  age: 25,
  hobbies: {
    hobbie: 'boxing',
    howLong: 5,
    isNow: false,
  },
  lazy: true,
};

console.log('Artem user: ', artemUser);
console.log('Olejko', olejka);

interface SalaryByString {
  [key: string]: number;
  timeout: number;
}

type empl = false | true;

const newSalary: SalaryByString = {
  Olejka: 11111,
  timeout: 1,
};
console.log('New salary: ', newSalary);

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

type Point = { artem: number; rustam: number };
type P = keyof Point;

const artemName = 'artem';

const mTest: M = 2222;
const pTest: P = artemName;
