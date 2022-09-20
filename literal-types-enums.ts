let Env: 'dev' | 'staging' | 'prod' = 'dev';
function setEnd(env: 'dev' | 'staging' | 'prod'): 'dev' | 'staging' | 'prod' {
  return env;
}
// Types
type Env = 'dev' | 'staging' | 'prod';

let env2: Env = 'prod';

function setEnv(env: Env): Env {
  return env;
}
// Enums
enum Env3 {
  dev = 'development',
  staging = 'staging',
  prod = 'production',
}

console.log('enum: ', Env3.dev);
