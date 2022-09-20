"use strict";
class NewUser {
    name;
    surname;
    constructor(props) {
        this.name = props.name;
        this.surname = props.surname;
    }
}
class NewSuperUser extends NewUser {
    id;
    constructor(props) {
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
