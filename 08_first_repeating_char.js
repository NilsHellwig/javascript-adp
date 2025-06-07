/**
 * Aufgabe:
 * Finde das erste nicht wiederholte Zeichen in einem String.
 *
 * Beispiel:
 * Input: "aabccbd"
 * Output: "d"
 *
 * @param {string} str - Eingabestring
 * @returns {string|null} - Erstes nicht wiederholtes Zeichen oder null
 */
function firstUniqueChar(str) {
  const freq = {};

  // Häufigkeit zählen
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Ersten eindeutigen Buchstaben finden
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

// Testaufrufe
console.log(firstUniqueChar("aabccbd")); // "d"
console.log(firstUniqueChar("xxyz")); // "y"
console.log(firstUniqueChar("aabbcc")); // null
console.log(firstUniqueChar("swiss")); // "w"
