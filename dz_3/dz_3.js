function transformString (str) {
    return str.replace(/[a-z]/gi, function (c) {
        if (/[a-z]/.test(c)) return c.toUpperCase();
        if (/[A-Z]/.test(c)) return c.toLowerCase();
        if (/[0-9]/.test(c)) return '_';
    })
}

console.log(transformString("Hello134143There")) // hELLO______tHERE