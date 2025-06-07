/**
 * Aufgabe:
 * Gegeben ist eine Liste von Zahlen. Gib eine neue Liste zurück,
 * die nur die geraden Zahlen enthält.
 *
 * Beispiel:
 * Input: [1, 2, 3, 4, 5, 6]
 * Output: [2, 4, 6]
 *
 * @param {number[]} numbers - Liste von Zahlen
 * @returns {number[]} - Gefilterte Liste mit nur geraden Zahlen
 */
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

// Testaufrufe
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbers([11, 13, 17, 20])); // [20]
console.log(filterEvenNumbers([0, -2, -3, 8])); // [0, -2, 8]
