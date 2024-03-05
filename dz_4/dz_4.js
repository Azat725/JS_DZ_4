function toCamalCase (str) {
    return str.replace(/-[a-z]-/g, function(match){
        return match[1].toUpperCase();
    })
}

console.log(toCamalCase("background-color")) // backgroundColor