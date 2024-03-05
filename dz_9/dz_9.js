function splitStringBySeparator(str, separator) {
    const result = [];
    let current = '';
    
    for (let char of str) {
        if (char === separator) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    
    if (current) {
        result.push(current);
    }
    
    return result;
}

console.log(splitStringBySeparator("10/20/2020", "/")); // 10 20 2020