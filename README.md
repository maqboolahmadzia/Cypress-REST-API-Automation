## API Automation Framework With Cypress ##

### [About](#about)

Currently, this framework has been developed in Cypress to test API's.

### Tech-stack ###

* [Node.js](https://nodejs.org/en/docs/) 
* [Cypress](https://docs.cypress.io/) 

### Setup Scripts ###

* Clone the repository into a folder
* Go inside the folder and run the following command from the terminal/command prompt
```
npm install 
```
* All the dependencies from package.json would be installed in the node_modules folder.

**Tip:** Install `npm install -g` globally on your system and run it from the command line which checks if your node path is set correctly or not.

### Run Tests ###

* Install node 

```
npm install 
```

* Next step is to open Cypress and Run the test.

```
npm run cy:open OR npx cypress open
```

* OR Run tests in headless mode

```
npm run cy:run OR npx cypress run
```