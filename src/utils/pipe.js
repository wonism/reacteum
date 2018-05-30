const resolver = (a, b) => arg => b(a(arg));
const pipe = (...ops) => ops.reduce(resolver);

export default pipe;
