/**
 * LeetCode Problem: Palindrome Number
 *
 * Beschreibung:
 * Prüfe, ob eine gegebene Ganzzahl `x` ein Palindrom ist.
 * Ein Palindrom liest sich vorwärts und rückwärts gleich.
 * Tipp: Verwende .split(), .reverse() und .join().
 *
 * Beispiel:
 * Input: x = 121
 * Output: true
 * Erklärung: 121 ist vorwärts und rückwärts gleich.
 *
 * @param {number} x - Die zu prüfende Zahl
 * @returns {boolean} - true, wenn x ein Palindrom ist, sonst false
 */
function isPalindrome(x) {
  const str = x.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Testaufrufe
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false (Minuszeichen wird mit umgekehrt)
console.log(isPalindrome(10)); // false
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(0)); // true
