# Testing2 intro to bla
Made by Viktor Kim Christiansen

https://github.com/datsoftlyngby/soft2019spring-test/raw/master/Assignments/02%20Unit%20Testing%20Assignment.pdf
## Overview
NOTE: Task had specific java instructions which didn't make sense in Typescript with Jest. I just implemented the example with tests, and hope this is good enough.


Typescript project with Jest as the testing framework


Either run in Docker or do it manually

## Installation
1. Install nodejs, npm & typescript
1. npm install
2. npm run cov
3. npm test

## Run In docker
1. docker build -t tstest2 .
2. docker run --rm tstest2
3. docker rmi tstest2

## Coverage
```
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 bank.ts  |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
```
