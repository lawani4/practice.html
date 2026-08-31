1)
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let id = '';

for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
}

console.log(id);


2)
const hexCharacters = [
    '0', '1', '2', '3',
    '4', '5', '6', '7',
    '8', '9', 'A', 'B',
    'C', 'D', 'E', 'F'
];

let hex = '#';

for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexCharacters.length);
    hex += hexCharacters[randomIndex];
}

console.log(hex);


3)
js
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const upperCountries = [];

for (let i = 0; i < countries.length; i++) {
    upperCountries.push(countries[i].toUpperCase());
}

console.log(upperCountries);




4)
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Iceland',
    'Japan',
    'Kenya'
];

const countryInfo = [];

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    const code = country.slice(0, 3).toUpperCase();
    const length = country.length;

    countryInfo.push([country, code, length]);
}

console.log(countryInfo);




5)
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const landCountries = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        landCountries.push(countries[i]);
    }
}

if (landCountries.length > 0) {
    console.log(landCountries);
} else {
    console.log('All these countries are without land');
}