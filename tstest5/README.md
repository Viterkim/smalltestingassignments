# Test05
School assignment with focus on a small program with an external depedency in the form of a database needing to be mocked.

https://github.com/datsoftlyngby/soft2019spring-test/blob/master/Assignments/05%20Dependencies%20Assignment.pdf

### Run With Docker
1. Build the image `docker build -t tstest5 .`
2. Run each image individually: `docker run --rm --name my_mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=tropaadet -d mysql:latest`
3. WAIT 10 SECONDS! And execute the db query: `docker exec -i my_mysql mysql -u root -ptropaadet < $(pwd)/testfive.sql`
4. Run the program itself `source docker.env && docker run --rm --name tstest5 tstest5`
5. Admit you don't want to be doing this right now
6. Cleanup `docker stop tstest5 && docker stop my_mysql`


### Installation

- Clone Repository
- Ensure NodeJS is installed and working on system
- Open another terminal, first run `npm i`
- Ensure TypeScript is globally installed through npm: `npm i -g typescript`
- Open 1 terminal in root directory of the project, then run `tsc -w` (Leave it open the whole time)
- To run tests, run `IP=INSERT YOUR DB IP USER=INSERT YOUR DB USER PASSWORD=DB PASSWORD DATABASE=DB NAME npm test`


### Introduction
Unfortunately, we were unable to mock the database, so it's required to run some sort of database with the `testfive.sql` mysql file imported into your database.
Tests include: 
- Mocking 
- Dummy
- Coverage Reports
- Stubs
