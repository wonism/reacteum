/** @flow */
const resolver = (a: Function, b: any) => (arg: any) => b(a(arg));
const pipe = (...ops: Array<*>) => ops.reduce(resolver);

export default pipe;
