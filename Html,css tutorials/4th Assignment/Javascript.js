const countries= [
   {country: 'English',count:91},
   {country: 'French',count:45},
   {country: 'Arabic',count:25},
   {country: 'Spanish',count:24},
   {country:'Russian',count:9},
   {country:'Portuguese', count:9},
   {country:'Dutch',count:8},
   {country:'German',count:7},
   {country:'Chinese',count:5},
   {country:'Swahili',count:4}
   ]

   countries.sort((a, b) => a.name.localeCompare(b.name));
console.log(countries);

countries.sort((a, b) => a.capital.localeCompare(b.capital));
console.log(countries);

countries.sort((a, b) => b.population - a.population);
console.log(countries);

function mostSpokenLanguages(countries, n) {
  const languageCounts = {};

  for (const country of countries) {
    for (const language of country.languages) {
      if (languageCounts[language]) {
        languageCounts[language]++;
      } else {
        languageCounts[language] = 1;
      }
    }
  }

  const languages = Object.entries(languageCounts).map(
    ([language, count]) => ({
      country: language,
      count: count
    })
  );

  languages.sort((a, b) => b.count - a.count);

  return languages.slice(0, n);
}

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));