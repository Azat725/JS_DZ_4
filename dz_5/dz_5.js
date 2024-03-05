function acronymize(phrase) {
    return phrase.split(' ').map(word => word[0]).join('');
}

console.log(acronymize("Cascading Style Sheets")); // CSS