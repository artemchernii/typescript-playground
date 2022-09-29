interface UserX {
    name: string;
}

interface HumanX extends UserX {
    speak(): void;
}

interface AnimalX extends UserX {
    color: string;
}

const serverInfo: UserX = {
    name: 'Artem',
    speak: () => {
        console.log('hello');
    },
};

function isHuman(serverInfo: UserX): serverInfo is HumanX {
    return typeof (serverInfo as HumanX).speak === 'function';
}

if (isHuman(serverInfo)) {
    serverInfo.speak();
}
