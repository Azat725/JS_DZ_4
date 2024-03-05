function fillTemplate(template, ...values) {
    return template.replace(/%\s*%/g, () => values.shift());
}

console.log(fillTemplate("Hello, % %! How are % today?", "John", "you"));