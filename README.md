## 🧩 Pattern: Stack (Matching Pairs)

**Problem:**  
Check if brackets are balanced.  
Examples: `()`, `{[]}`, `([{}])` are valid; `([)]`, `((` are not.

---

### ✅ Approach

- Push **open brackets** (`(`, `{`, `[`) onto a stack.
- On encountering a **closing bracket**, pop from the stack and check if it matches.
- If stack is empty at the end and all matches are valid → **Balanced**.

---

### ⏱️ Time & Space

- **Time Complexity:** O(n) – Traverse each character once.
- **Space Complexity:** O(n) – Stack could store up to *n* characters in worst case.

---

## 🧩 Pattern: Backtracking (Well-Formed Parentheses)

**Problem:**  
Generate all combinations of **n pairs** of well-formed parentheses.

**Description:**  
Given `n` pairs of parentheses, write a function to generate **all valid combinations**.

---

### ✅ Pattern Details

- **Name:** Generate Parentheses  
- **Difficulty:** Medium  
- **Tags:** `Backtracking`, `String`, `Recursion`  
- **Language:** JavaScript  

---

### ⏱️ Time & Space

- **Time Complexity:** Exponential – Catalan Number `O(2^n)`
- **Space Complexity:** O(n) – Depth of recursion stack

---

### 🔄 Approach

- Use backtracking:
  - Add `'('` if open count < n
  - Add `')'` if close count < open count
- Stop when open === close === n

---

### 💡 Visual Example for `n = 2`

```text
""                 (open=0, close=0)
 ├─ "("            (1,0)
 │   ├─ "(("       (2,0)
 │   │   └─ "(()"  (2,1)
 │   │       └─ "(())" ✔︎  (2,2)
 │   └─ "()"       (1,1)
 │       └─ "()("  (2,1)
 │           └─ "()()" ✔︎  (2,2)
 └─ 🚫  ← Cannot start with ')'
