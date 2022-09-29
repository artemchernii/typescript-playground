"use strict";
const serverInfo = {
    name: 'Artem',
    // speak: () => {
    //     console.log('hello');
    // },
};
function isHuman(serverInfo) {
    return typeof serverInfo.speak === 'function';
}
if (isHuman(serverInfo)) {
    serverInfo.speak();
}
