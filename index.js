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