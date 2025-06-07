/**
 * Aufgabe:
 * Drehe einen gegebenen String um. 
 * Die Funktion soll den String von hinten nach vorne zurückgeben, unabhängig von der Länge, Groß- und Kleinschreibung oder Sonderzeichen.
 *
 * Beispiel:
 * Input: "hello"
 * Output: "olleh"
 *
 * @param {string} str - Der umzudrehende String
 * @returns {string} - Der umgedrehte String
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Testaufrufe
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("")); // ""
console.log(reverseString("12345")); // "54321"
