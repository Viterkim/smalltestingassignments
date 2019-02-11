# Testing3 TESTABILITY ASSIGNMENT 3 | Smells & Static Analysis
Made by Viktor Kim Christiansen

https://github.com/datsoftlyngby/soft2019spring-test/raw/master/Assignments/03%20Testability%20assignment.pdf
## Overview
Typescript project with Jest as the testing framework

## Questions
1. Write a program where you illustrate what non-testable code could look like. Make sure to include
some code smells that you can refactor away later.
2. Static analysis:
Use a tool to automatically check for code smells, e.g. CheckStyle and FindBugs for Java. You can
use JaCoCo to calculate Cyclomatic Complexity. Document the result.
3. Rewrite the program with testability in mind and write automated unit tests for the program.
In the transformation of the code structure, you can get inspiration from Martin Fowler’s refactory
pattern catalogue 1 , e.g.
https://refactoring.com/catalog/extractFunction.html
https://refactoring.com/catalog/removeDeadCode.html
https://refactoring.com/catalog/inlineVariable.html
https://refactoring.com/catalog/introduceParameterObject.html
https://refactoring.com/catalog/replaceConstructorWithFactoryFunction.html
https://refactoring.com/catalog/replaceExceptionWithPrecheck.html
4. Static analysis - again:
Use the same tool(s) as in 2) to automatically check your code again. Document the result.

## Answers
1. First function in src/smells.ts
2. Use linting in typescript
3. Check the src/nosmells.ts for examples with the links.
4. Linting again.

## How to use the typescript linting / static analysis?
Either ctrl + b in VS Code and select WATCH, or open a terminal and type `tsc -w`


## Run the tests themselves
Either run in Docker or do it manually

## Installation
1. Install nodejs, npm & typescript
1. npm install
2. npm run cov
3. npm test

## Run In docker
1. docker build -t tstest3 .
2. docker run --rm tstest3
3. docker rmi tstest3

## Coverage (check smells)
```
 PASS  src/nosmells.test.ts
 PASS  src/smells.test.ts
-------------|----------|----------|----------|----------|-------------------|
File         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------|----------|----------|----------|----------|-------------------|
All files    |    88.89 |      100 |      100 |    88.89 |                   |
 nosmells.ts |      100 |      100 |      100 |      100 |                   |
 smells.ts   |    84.21 |      100 |      100 |    84.21 |          24,43,44 |
-------------|----------|----------|----------|----------|-------------------|
```
