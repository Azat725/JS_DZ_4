function numberToText (num) {
    const units = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const ones = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

    if (num < 20) {
        const special = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
        if (num < 10) return ones[num - 1];
        return units[num - 10];
    } else {
        let firstDigit = units[Math.floor(num / 10) - 2];
        let secondDigit = num % 10 !== 0 ? ones[num % 10 - 1] : '';
        return firstDigit + (secondDigit ? ' ' + secondDigit : '');
    }
}

console.log(numberToText(25)) // -> двадцать пять