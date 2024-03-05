function analyzeString(str = String) {
    let letters = 0;
    let digits = 0;
    let others = 0;

    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            letters++;
        } else if (/[0-9]/.test(str[i])) {
            digits++;
        } else {
            others++;
        }
    }

    console.log("Количество букв: " + letters);
    console.log("Количество цифр: " + digits);
    console.log("Количество других знаков: " + others);
}

// Пример использования функции
analyzeString("Hello123! How are you?");
