/**
 * Zählt die Häufigkeit von Wörtern in einem Text.
 * Satzzeichen und Groß-/Kleinschreibung werden ignoriert.
 * Tipp: Verwende u.a. .trim(). .trim() erlaubt es, führende und nachfolgende Leerzeichen zu entfernen.
 *
 * @param {string} text - Eingabetext
 * @returns {Object} - Häufigkeiten der Wörter
 */
function wordFrequencies(text) {

}

// Testaufrufe
console.log(wordFrequencies("Hello, hello! How are you? You look well."));
// { hello: 2, how: 1, are: 1, you: 2, look: 1, well: 1 }

console.log(wordFrequencies("This is a test. This is only a test."));
// { this: 2, is: 2, a: 2, test: 2, only: 1 }

console.log(wordFrequencies("     ")); // { } – keine Wörter
