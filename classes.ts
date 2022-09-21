interface NewUserInterface {
  name: string;
  surname: string;
}

class NewUser {
  name: string;
  surname: string;
  constructor(props: NewUserInterface) {
    this.name = props.name;
    this.surname = props.surname;
  }
}

class NewSuperUser extends NewUser {
  id: string;
  constructor(props: { id: string; newSuperUser: NewUser }) {
    super({
      name: props.newSuperUser.name,
      surname: props.newSuperUser.surname,
    });
    this.id = props.id;
  }
}

const superArtem = new NewSuperUser({
  id: '1111',
  newSuperUser: { name: 'Artem', surname: 'Chernii' },
});

console.log('super puper: ', superArtem);

const formatter = Intl.NumberFormat('en', { notation: 'compact' });

const number = formatter.format(11123122223);

console.log('Pretty number => ', number);
