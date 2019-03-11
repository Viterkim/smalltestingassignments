# Specification Based Testing Techniques Assignment 4

## Introduction & Import with IntelliJ
School [assignment](https://github.com/datsoftlyngby/soft2019spring-test/blob/master/Assignments/04%20Specification%20Based%20Testing%20Techniques%20Assignment.pdf) with focus on different testing techniques.



 The program was created using Intellij and Java SDK 11, so you might need to do the following in order to make the program work:

- Mark the "java"-folder found under "src" -> "main" as the "source"-folder
-   Right-click on the "java"-folder, select the "Mark Directory as.." and finally select the (blue) "Source Root"
- Similar with the (test) "java"-folder, found under "src"-> "test"
-   Right-click on the (test)"java"-folder, select the "Mark Directory as.." and finally select the (green) "Test Source Root"
- Select Output-folder
  - Create a new folder within the project named "out"
  - Go to File -> Project Structure... -> Project Settings -> Project -> Project Compiler output and select your out-folder
  - Hit Apply

## Run With Docker
Run
1. `docker build -t testtech .`
2. `docker run --rm -it testtech sh`
3. Find out how to run the testfiles from a terminal... I haven't :/

Cleanup
1. `docker rmi testtech`
2. `docker rmi openjdk:13-ea-9-jdk-alpine3.9`

-----
## 1 
### Implement a minimal basic bank system
Checkout the program

-----
## 2 
### Test account.Account.getMonthlyInterest() and creditcard.CreditCard.getDiscount() methods sufficiently
`src/test/java/AccountTest.java`, `src/test/java/CreditCardTest.java` `src/test/java/AccountDynamicTest.java`

-----
## 3 
### Incorporate both a repeated test, a parameterized test and a dynamic test for the
creditcard.CreditCard.getDiscount() method
repeatedTest & parameterizedTest in `CreditCardTest.java`, `dynamicTest` in `AccountDynamicTest.java`

-----
## 4 
### Create 4 different versions of the parameterized test, using the annotations @ValueSource, @CSVSource,
@CSVFileSource and @MethodSource for the test data in each version
All variations of the tests are in `CreditCardTest.java`

-----
## 5 
### Use Hamcrest matchers throughout the tests instead of JUnit asserts
Replaced in both `AccountTest` & `CreditCardTest`

-----
## 7 
### Document how equivalence partitions, boundary values, decision tables and state transition models have been used and applied in the creation of the data-driven tests
Decision tables is basically a way to map out every outcome for a scenario, so a good example of that in a test is `Customer.getDiscount()` tested in the top of the `CreditCardTest.java`. 

Boundary values/Equivalence partitioning are used in the sense that we want a value to be EXACTLY something, given from a boundary/range of balances. So a balance of everything between 0-500 gives X.

State transitions aren't really tested, but you could say the state of the account changes, so if you try to withdraw when there's no money left, you won't get what you expect.

