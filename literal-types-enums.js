"use strict";
let Env = 'dev';
function setEnd(env) {
    return env;
}
let env2 = 'prod';
function setEnv(env) {
    return env;
}
// Enums
var Env3;
(function (Env3) {
    Env3["dev"] = "development";
    Env3["staging"] = "staging";
    Env3["prod"] = "production";
})(Env3 || (Env3 = {}));
console.log('enum: ', Env3.dev);
