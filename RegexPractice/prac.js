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

/*
=====================================
REGEX PRACTICE — LESSON 3
ANCHORS (^ and $)
=====================================

Anchors do NOT match characters.
They match POSITIONS in the string.

^  → start of string
$  → end of string

Used for validation, not searching.
*/

/* ----------------------------------
START ANCHOR ^
---------------------------------- */

// let text = 'cat food';
// let pattern = /^cat/;

// console.log(pattern.test(text)); // true

// text = 'my cat food';
// pattern = /^cat/;

// console.log(pattern.test(text)); // false

// /* ----------------------------------
// END ANCHOR $
// ---------------------------------- */

// text = 'hot dog';
// pattern = /dog$/;

// console.log(pattern.test(text)); // true

// text = 'dog park';
// pattern = /dog$/;

// console.log(pattern.test(text)); // false

// /* ----------------------------------
// EXACT MATCH (^ and $ together)
// ---------------------------------- */

// text = 'yes';
// pattern = /^yes$/;

// console.log(pattern.test(text)); // true

// text = 'yes!';
// pattern = /^yes$/;

// console.log(pattern.test(text)); // false

// /* ----------------------------------
// WHY ANCHORS MATTER
// ---------------------------------- */

// // Searching (matches anywhere)
// pattern = /\d/;
// console.log(pattern.test('abc1xyz')); // true

// // Validation (exact match)
// pattern = /^\d$/;
// console.log(pattern.test('1')); // true
// console.log(pattern.test('abc1xyz')); // false

// /*
// ----------------------------------
// KEY TAKEAWAYS
// ----------------------------------

// /cat/     → matches 'cat' anywhere
// /^cat$/   → matches ONLY 'cat'

// Anchors prevent false positives.
// Always use anchors for validation.
// */

/*
=====================================
REGEX PRACTICE — LESSON 5
GROUPING & ALTERNATION
=====================================

Grouping ( ) allows multiple characters
to be treated as a single unit.

Alternation | means OR.

Grouping is REQUIRED when using
alternation with anchors.
*/

/* ----------------------------------
GROUPING WITH QUANTIFIERS
---------------------------------- */

// console.log(/(ha)+/.test("ha"));       // true
// console.log(/(ha)+/.test("haha"));     // true
// console.log(/(ha)+/.test("hahaha"));   // true
// console.log(/(ha)+/.test("haaa"));     // false


// /* ----------------------------------
// NO GROUPING (COMPARE BEHAVIOR)
// ---------------------------------- */

// console.log(/ha+/.test("haaa"));       // true
// console.log(/ha+/.test("haha"));       // true (matches "ha" at start)


// /* ----------------------------------
// ALTERNATION (OR)
// ---------------------------------- */

// console.log(/cat|dog/.test("I have a dog")); // true
// console.log(/cat|dog/.test("I have a bird"));// false


// /* ----------------------------------
// GROUPING + ANCHORS (CORRECT)
// ---------------------------------- */

// console.log(/^(cat|dog)$/.test("cat"));  // true
// console.log(/^(cat|dog)$/.test("dog"));  // true
// console.log(/^(cat|dog)$/.test("bird")); // false


// /* ----------------------------------
// ALTERNATION WITHOUT GROUPING (BUG)
// ---------------------------------- */

// console.log(/^cat|dog$/.test("my dog")); // true (BUGGY PATTERN)


// /*
// ----------------------------------
// KEY TAKEAWAYS
// ----------------------------------

// (cat|dog)  → choose one option as a unit
// ^ and $    → validate the entire string
// Without grouping, | breaks intent

// Grouping controls:
// - what repeats
// - what is optional
// - what is chosen
// */

