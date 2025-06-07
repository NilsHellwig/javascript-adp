/**
 * Aufgabe:
 * Gegeben ist eine Liste von Personen-Objekten mit Vor- und Nachnamen.
 * Erstelle eine neue Liste, die vollständige Namen als Strings enthält,
 * wobei der Nachname in Großbuchstaben geschrieben wird.
 * Tipp: Verwende String-Interpolation (Template Literals) und die toUpperCase()-Methode.
 *
 * Beispiel:
 * Input: [{ firstName: 'Max', lastName: 'Mustermann' }, { firstName: 'Anna', lastName: 'Müller' }]
 * Output: ['Max MUSTERMANN', 'Anna MÜLLER']
 *
 * @param {{firstName: string, lastName: string}[]} people - Liste von Personen-Objekten
 * @returns {string[]} - Liste der formatierten vollständigen Namen
 */
function formatFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName.toUpperCase()}`);
}

// Testaufrufe
console.log(
  formatFullNames([
    { firstName: "Max", lastName: "Mustermann" },
    { firstName: "Anna", lastName: "Müller" },
    { firstName: "John", lastName: "Doe" },
  ])
);
// Output: ['Max MUSTERMANN', 'Anna MÜLLER', 'John DOE']
