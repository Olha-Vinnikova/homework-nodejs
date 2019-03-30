const random = (a, b) => {
    min = Math.ceil(a);
    max = Math.floor(b);
    return Math.floor(Math.random() * (b - a)) + a;
}

module.exports = random;

