// Any:

let anny: any = 123;
anny = '3333';

console.log('Any type: ', anny);

// Unknown:

let unk: unknown = 123;
let testUnk: unknown = unk;

// Void:

function fun(arg: string): void | undefined {
  console.log(arg);
}
