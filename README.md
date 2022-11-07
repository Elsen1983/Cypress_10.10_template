npm install -D cypress@latest
npx cypress open
    do all the steps on UI
npm install typescript
npx tsc --init --types cypress --lib dom,es6

npm install prettier  + add .prettierrc file to root folder
npm install --save-dev cypress-mochawesome-reporter

npm i -D @types/node    - also add "types": ["cypress", "node"] into tsconfig.json




maybe useful plugins listed below:
    https://testing-library.com/docs/cypress-testing-library/intro/     - cypress testing library
    https://elaichenkov.medium.com/cypress-how-to-verify-that-file-is-downloaded-with-cy-verify-downloads-c520b7760a69      - verify downloaded file
    https://www.cypress.io/blog/2022/01/19/uploading-files-with-selectfile/     - uploading file
    https://glebbahmutov.com/blog/cypress-real-events/   - cypress-real-events
    https://www.youtube.com/watch?v=4V3gpG1QQf8     - cypress-xpath





add /// <reference types="cypress" /> into all .ts file to allow typescript to reach all cypress commands/options

