// /*
// =====================================
// REGEX PRACTICE — LESSONS 1 & 2
// =====================================

// Regex = pattern matching for text
// Not logic, not loops, not conditionals

// Structure:
// /pattern/flags

// We use .test() to answer:
// "Does this pattern exist in this string?"
// (true or false)
// */

// /* ----------------------------------
// LESSON 1 — REGEX FUNDAMENTALS
// ---------------------------------- */

// // Base text
// let text = "hello world";

// // Literal match
// let pattern = /world/;
// console.log(pattern.test(text)); // true

// // Match full phrase
// pattern = /hello world/;
// console.log(pattern.test(text)); // true

// // Match something that does NOT exist
// pattern = /banana/;
// console.log(pattern.test(text)); // false

// // Case sensitivity (default)
// text = "Hello world";
// pattern = /hello/;
// console.log(pattern.test(text)); // false

// // Ignore case flag (i)
// pattern = /hello/i;
// console.log(pattern.test(text)); // true


// /* ----------------------------------
// LESSON 2 — CHARACTER MATCHING
// ---------------------------------- */

// // Dot (.) = any ONE character
// text = "cat";
// pattern = /c.t/;
// console.log(pattern.test(text)); // true

// text = "cart";
// pattern = /c.t/;
// console.log(pattern.test(text)); // false (dot only matches one char)

// // Digit class \d (any number 0–9)
// text = "I have 7 apples";
// pattern = /\d/;
// console.log(pattern.test(text)); // true

// text = "I have apples";
// pattern = /\d/;
// console.log(pattern.test(text)); // false

// // Character set [ ] (allowed characters)
// text = "cat";
// pattern = /[bc]at/;
// console.log(pattern.test(text)); // true

// text = "rat";
// pattern = /[bc]at/;
// console.log(pattern.test(text)); // false


// /*
// ----------------------------------
// PATTERN MEANINGS (IMPORTANT)
// ----------------------------------

// /c.t/
// - matches:
//   c + any ONE character + t
// - examples:
//   cat ✅
//   cot ✅
//   cart ❌

// Key rules:
// - Regex scans left → right
// - Spaces are characters
// - Regex is case-sensitive unless told otherwise
// - .test() always returns true or false
// */
