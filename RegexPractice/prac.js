// /*
// =========================================================
// REGEX LESSON PLAN (JavaScript) — prac.js
// =========================================================

// GOAL:
// Learn regex step-by-step for real front-end use:
// - Understand how regex works (matching)
// - Use anchors for validation
// - Use quantifiers for length/repetition
// - Use grouping and alternation for options
// - Apply practical patterns for common UI inputs

// HOW TO PRACTICE:
// - Change ONE thing at a time
// - Predict true/false BEFORE running
// - Use .test() to keep it simple
// - Use ^ and $ anytime you mean "validate the whole input"

// =========================================================
// LESSON 1 — FUNDAMENTALS (Literal matching, .test(), flags)
// =========================================================

// Regex format: /pattern/flags
// .test(string) -> true/false (pattern exists somewhere unless anchored)

// */

// // Lesson 1 examples
// let text = "hello world";
// let pattern = /world/;
// console.log(pattern.test(text)); // true

// pattern = /hello world/;
// console.log(pattern.test(text)); // true

// pattern = /banana/;
// console.log(pattern.test(text)); // false

// text = "Hello world";
// pattern = /hello/;
// console.log(pattern.test(text)); // false (case-sensitive)

// pattern = /hello/i;
// console.log(pattern.test(text)); // true (ignore case)

// /*
// =========================================================
// LESSON 2 — CHARACTER MATCHING (., \d, \w, [ ])
// =========================================================

// .   -> any ONE character
// \d  -> any digit 0–9
// \w  -> word char (letters, digits, underscore)
// [ ] -> allowed set of characters

// */

// // Lesson 2 examples
// text = "cat";
// pattern = /c.t/;
// console.log(pattern.test(text)); // true

// text = "cart";
// pattern = /c.t/;
// console.log(pattern.test(text)); // false

// text = "I have 7 apples";
// pattern = /\d/;
// console.log(pattern.test(text)); // true

// text = "I have apples";
// pattern = /\d/;
// console.log(pattern.test(text)); // false

// text = "cat";
// pattern = /[bc]at/;
// console.log(pattern.test(text)); // true

// text = "rat";
// pattern = /[bc]at/;
// console.log(pattern.test(text)); // false

// /*
// =========================================================
// LESSON 3 — ANCHORS (^ and $) for VALIDATION
// =========================================================

// ^ -> start of string
// $ -> end of string
// ^...$ -> exact match (whole input)

// */

// // Lesson 3 examples
// text = "cat food";
// pattern = /^cat/;
// console.log(pattern.test(text)); // true

// text = "my cat food";
// pattern = /^cat/;
// console.log(pattern.test(text)); // false

// text = "hot dog";
// pattern = /dog$/;
// console.log(pattern.test(text)); // true

// text = "dog park";
// pattern = /dog$/;
// console.log(pattern.test(text)); // false

// text = "yes";
// pattern = /^yes$/;
// console.log(pattern.test(text)); // true

// text = "yes!";
// pattern = /^yes$/;
// console.log(pattern.test(text)); // false

// // Search vs validate (important)
// pattern = /\d/;
// console.log(pattern.test("abc1xyz")); // true (searches anywhere)

// pattern = /^\d$/;
// console.log(pattern.test("1"));       // true
// console.log(pattern.test("abc1xyz")); // false (validation)

// /*
// =========================================================
// LESSON 4 — QUANTIFIERS (*, +, ?, {n}, {n,m})
// =========================================================

// *   -> zero or more
// +   -> one or more
// ?   -> zero or one (optional once)
// {n} -> exactly n times
// {n,m} -> between n and m times

// RULE:
// Quantifiers apply ONLY to the thing immediately before them.

// */

// // Lesson 4 examples
// text = "color";
// pattern = /colou*r/;
// console.log(pattern.test(text)); // true (u can appear 0 times)

// text = "colour";
// pattern = /colou*r/;
// console.log(pattern.test(text)); // true (u can appear 1 time)

// pattern = /go+/;
// console.log(pattern.test("go"));   // true
// console.log(pattern.test("goo"));  // true
// console.log(pattern.test("g"));    // false (needs at least one o)

// pattern = /colou?r/;
// console.log(pattern.test("color"));   // true
// console.log(pattern.test("colour"));  // true
// console.log(pattern.test("colouur")); // false (u only optional once)

// pattern = /^\d{3}$/;
// console.log(pattern.test("123"));  // true
// console.log(pattern.test("12"));   // false
// console.log(pattern.test("1234")); // false

// pattern = /^\d{2,4}$/;
// console.log(pattern.test("12"));    // true
// console.log(pattern.test("1234"));  // true
// console.log(pattern.test("1"));     // false
// console.log(pattern.test("12345")); // false

// // Quantifier scope check
// pattern = /\d\d+/; // one digit, then one or more digits (minimum 2 digits)
// console.log(pattern.test("7"));    // false
// console.log(pattern.test("70"));   // true
// console.log(pattern.test("700"));  // true

// /*
// =========================================================
// LESSON 5 — GROUPING ( ) and ALTERNATION |
// =========================================================

// ( ) -> treat multiple characters as one unit
// |   -> OR (choice)

// IMPORTANT:
// Use grouping with anchors when you mean exact options:
// ^(cat|dog)$

// */

// // Lesson 5 examples
// pattern = /(ha)+/;
// console.log(pattern.test("ha"));     // true
// console.log(pattern.test("haha"));   // true
// console.log(pattern.test("haaa"));   // false

// pattern = /ha+/;
// console.log(pattern.test("haaa"));   // true
// console.log(pattern.test("haha"));   // true (matches "ha" at start)

// pattern = /cat|dog/;
// console.log(pattern.test("I have a dog")); // true
// console.log(pattern.test("I have a bird"));// false

// pattern = /^(cat|dog)$/;
// console.log(pattern.test("cat")); // true
// console.log(pattern.test("dog")); // true
// console.log(pattern.test("bird"));// false

// // Classic bug without grouping
// pattern = /^cat|dog$/;
// console.log(pattern.test("my dog")); // true (means ^cat OR dog$)

// /*
// =========================================================
// LESSON 6 — COMMON FRONT-END REGEX PATTERNS (Practical)
// =========================================================

// Front-end regex should be:
// - readable
// - safe
// - "good enough" for UI checks
// Backend should handle strict validation/security.

// */

// // Numbers only (required)
// pattern = /^\d+$/;
// console.log(pattern.test("123")); // true
// console.log(pattern.test("12a")); // false
// console.log(pattern.test(""));    // false

// // OTP / PIN (exact length example: 6 digits)
// pattern = /^\d{6}$/;
// console.log(pattern.test("123456")); // true
// console.log(pattern.test("12345"));  // false

// // Username: letters/numbers/underscore, 3–16 chars
// pattern = /^[a-zA-Z0-9_]{3,16}$/;
// console.log(pattern.test("john_dev")); // true
// console.log(pattern.test("jo"));       // false
// console.log(pattern.test("john-dev")); // false

// // Yes/No toggle (case-insensitive)
// pattern = /^(yes|no)$/i;
// console.log(pattern.test("yes")); // true
// console.log(pattern.test("No"));  // true
// console.log(pattern.test("maybe"));// false

// // Simple name (UI guidance, not real identity validation)
// pattern = /^[A-Z][a-z]+$/;
// console.log(pattern.test("John")); // true
// console.log(pattern.test("john")); // false

// // Email (frontend sanity check only — keep it simple)
// pattern = /^\S+@\S+\.\S+$/;
// console.log(pattern.test("test@example.com")); // true
// console.log(pattern.test("test@com"));         // false
// console.log(pattern.test("test@.com"));        // false


