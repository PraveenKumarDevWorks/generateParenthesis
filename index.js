function generateParenthesis(n) {
    const result = [];
    function build(current, open, close) {
        if (current.length === n * 2) {
            result.push(current);
            return;
        }
        if (open < n) build(current + "(", open + 1, close); // Add green brick
        if (close < open) build(current + ")", open, close + 1); // Add red brick
    }
    build("", 0, 0);
    return result;
}

console.log(generateParenthesis(1)) // Output: ["()"]
// ""                 (open=0, close=0)
//  └─ "("            (1,0)
//      └─ "()"       (1,1) ✔︎  (1,2)

console.log(generateParenthesis(2)) // Output: ["(())", "()()"]
// ""                 (open=0, close=0)
//  ├─ "("            (1,0)
//  │   ├─ "(("       (2,0)
//  │   │   └─ "(()"  (2,1)
//  │   │       └─ "(())" ✔︎  (2,2)
//  │   └─ "()"
//  │       └─ "()("  (2,1)
//  │           └─ "()()" ✔︎  (2,2)
//  └─  🚫   ← cannot start with ')'

console.log(generateParenthesis(3)) // Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
// ""                 (open=0, close=0)
//  ├─ "("            (1,0)
//  │   ├─ "(("       (2,0)
//  │   │   ├─ "((("  (3,0)
//  │   │   │   └─ "((()))" ✔︎  (3,3)
//  │   │   └─ "(()"  (2,1)
//  │   │       ├─ "(()(" (3,1)
//  │   │       │   └─ "(()())" ✔︎  (3,2)
//  │   │       └─ "()(())" ✔︎  (3,2)
//  │   └─ "()"
//  │       ├─ "()("   (2,1)
//  │       │   ├─ "()(((" (3,1)
//  │       │   │   └─ "()((()))" ✔︎  (3,3)
//  │       │   └─ "()(()" (3,2)
//  │       │       └─ "()(()())" ✔︎  (3,3)
//  │       └─ "()()"  (2,2)
//  │           └─ "()()()" ✔︎  (3,3)
//  └─  🚫   ← cannot start with ')'
console.log(generateParenthesis(4)) // Output: ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()()(())", "()()()()"]
console.log(generateParenthesis(5)) // Output: ["((((()))))", "(((()())))", "((()()))()", "((())())()", "((()))()()", "(()((())))", "(()(()()))", "(()()(())", "(()()())()", "(()())()()", "(())((()))", "(())(()())", "(())()(())", "(())()()()", "()(((())))", "()((()()))", "()(()())()", "()()(())()", "()()()()()"]

// pattern name  = "Generate Parentheses";
// pattern description = "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.";
// pattern difficulty = "Medium";
// pattern tags = ["Backtracking", "String", "Recursion"];
// pattern code = "javascript";
// pattern codeSnippet = generateParenthesis.toString();
// pattern example = {
//     input: "n = 3",
//     output: '["((()))", "(()())", "(())()", "()(())", "()()()"]'
// };
// pattern example2 = {
//     input: "n = 2",
//     output: '["(())", "()()"]'
// };
// pattern example3 = {
//     input: "n = 4",
//     output: '["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()()(())", "()()()()"]'
// };
// pattern example4 = {
//     input: "n = 5",
//     output: '["((((()))))", "(((()())))", "((()()))()", "((())())()", "((()))()()", "(()((())))", "(()(()()))", "(()()(())", "(()()())()", "(()())()()", "(())((()))", "(())(()())", "(())()(())", "(())()()()", "()(((())))", "()((()()))", "()(()())()", "()()(())()", "()()()()()"]'
// };