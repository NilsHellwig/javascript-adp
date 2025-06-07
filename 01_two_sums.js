/**
 * LeetCode Problem: Two Sum
 *
 * Beschreibung:
 * Gegeben ein Array von Ganzzahlen `nums` und eine Ganzzahl `target`,
 * finde die Indizes von zwei Zahlen im Array, deren Summe `target` ergibt.
 * Du darfst annehmen, dass es genau eine Lösung gibt, und du darfst
 * dasselbe Element nicht zweimal verwenden.
 *
 * Beispiel:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Erklärung: nums[0] + nums[1] == 9, also geben wir [0, 1] zurück.
 *
 * @param {number[]} nums - Array von Ganzzahlen
 * @param {number} target - Zielsumme
 * @returns {number[]} - Indizes der zwei Zahlen, die zusammen target ergeben
 */
function twoSum(nums, target) {

}

// Testaufrufe
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 8)); // [2, 4]
