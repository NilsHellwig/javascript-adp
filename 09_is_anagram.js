/**
 * Aufgabe:
 * Prüft, ob zwei Strings Anagramme voneinander sind.
 * Ein Anagramm ist eine Umstellung der Buchstaben eines Wortes oder Satzes.
 * Ignoriere Groß- und Kleinschreibung sowie Leerzeichen.
 * Tipp: Verwende die Methoden .toLowerCase(), .replace() und .split().
 *
 * Beispiel:
 * Input: "listen", "silent" → true
 * Input: "Hello", "Olelh" → true
 * Input: "test", "best" → false
 *
 * @param {string} str1 - Erster String
 * @param {string} str2 - Zweiter String
 * @returns {boolean} - true, wenn Anagramm, sonst false
 */
function isAnagram(str1, str2) {
  const clean = (str) => str.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  return clean(str1) === clean(str2);
}

// Testaufrufe
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("Hello", "Olelh")); // true
console.log(isAnagram("test", "best")); // false
console.log(isAnagram("Dormitory", "Dirty room")); // true
console.log(isAnagram("Astronomer", "Moon starer")); // true
