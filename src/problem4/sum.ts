import _ from "lodash";

/**
 * **Iterative Approach**
 * This solution follows a straightforward approach, iterating through all numbers from `1` to `n`
 * and accumulating their sum. It is a generic method that applies to many summation problems.
 * 
 * @param n A positive integer representing the upper bound of the summation.
 * @returns The sum of all integers from `1` to `n`.
 */
export function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * **Mathematical Formula Approach**
 * This is the most efficient approach, utilizing the well-known summation formula:
 *
 * **Sum from 1 to N:** `Sum_N = (n * (n + 1)) / 2`
 *
 * This formula directly computes the result in **constant time (O(1))**, making it the best choice
 * when applicable. However, this method only works for arithmetic series with a defined formula.
 *
 * @param n A positive integer representing the upper bound of the summation.
 * @returns The sum of all integers from `1` to `n`.
 */
export function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

/**
 * **Using Lodash for Summation**
 * Instead of implementing summation manually, this solution leverages Lodash, a widely-used
 * utility library.
 *  
 * - `_.range(1, n + 1)`: Generates an array `[1, 2, ..., n]`.
 * - `_.sum(array)`: Computes the sum of the array elements.
 * 
 * **Why use libraries?**
 * - Reduces implementation errors.
 * - Saves development time by using well-tested utilities.
 * - Ensures optimized performance in certain cases.
 * 
 * @param n A positive integer representing the upper bound of the summation.
 * @returns The sum of all integers from `1` to `n`.
 */
export function sum_to_n_c(n: number): number {
  return _.sum(_.range(1, n + 1));
}
