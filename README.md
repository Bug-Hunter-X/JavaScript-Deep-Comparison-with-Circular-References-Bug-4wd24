# JavaScript Deep Comparison with Circular References Bug

This repository demonstrates a common bug in JavaScript's deep comparison functions: handling circular references.

The `bug.js` file contains a function that attempts to perform a deep comparison of two objects. However, this function fails when the objects contain circular references, resulting in a stack overflow error.

The `bugSolution.js` file provides a corrected version of the deep comparison function that handles circular references correctly by using a `visited` set to track objects that have already been visited during the comparison.

## How to reproduce the bug

1. Clone the repository.
2. Run `node bug.js`.
3. Observe the stack overflow error.

## Solution

The solution involves using a `visited` set to keep track of objects already visited.  This prevents infinite recursion when encountering circular references.  The corrected code is shown in `bugSolution.js`.