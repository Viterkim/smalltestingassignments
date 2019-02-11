# Testing1 intro to whitebox & blackbox
Made by Viktor Kim Christiansen

https://github.com/datsoftlyngby/soft2019spring-test/raw/master/Assignments/01%20Test%20cases%20assignment.pdf

## Overview
Typescript project with Jest as the testing framework

Either run in Docker or do it manually

## Installation
1. Install nodejs, npm & typescript
1. npm install
2. npm run cov
3. npm test

## Run In docker
1. docker build -t tstest1 .
2. docker run --rm tstest1
3. docker rmi tstest1

## Coverage
```
 PASS  src/blackbox.test.ts
 PASS  src/whitebox.test.ts
-------------|----------|----------|----------|----------|-------------------|
File         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------|----------|----------|----------|----------|-------------------|
All files    |      100 |      100 |      100 |      100 |                   |
 blackbox.ts |      100 |      100 |      100 |      100 |                   |
 whitebox.ts |      100 |      100 |      100 |      100 |                   |
-------------|----------|----------|----------|----------|-------------------|
```
