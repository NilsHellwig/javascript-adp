/**
 * Aufgabe:
 * Zähle, wie oft jedes Zeichen in einem String vorkommt (außer Leerzeichen).
 *
 * Beispiel:
 * Input: "hello world"
 * Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
 *
 * @param {string} str - Eingabestring
 * @returns {Object} - Objekt mit Zeichen als Schlüssel und Anzahl als Wert
 */
function charFrequency(str) {

}

// Testaufrufe
console.log(charFrequency("hello world"));
// { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

console.log(charFrequency("aabbccddeeff"));
// { a: 2, b: 2, c: 2, d: 2, e: 2, f: 2 }

console.log(charFrequency("  OpenAI rocks  "));
// { O: 1, p: 1, e: 1, n: 1, A: 1, I: 1, r: 1, o: 1, c: 1, k: 1, s: 1 }
