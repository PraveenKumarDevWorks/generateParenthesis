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

console.log(generateParenthesis(2)) // Output: ["(())", "()()"]
console.log(generateParenthesis(3)) // Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
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