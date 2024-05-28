# React + TypeScript + Vite:

## How to run the application locally

- `npm install`
- `npm run dev`
- visit on `http://localhost:5173/`

## How to run cypress locally

- `npx cypress open --e2e --browser chrome`: to run cypress in head mode and can interact with each e2e tests.
- `npx cypress run`: to run cypress in headless mode.

## How to generate and visit Allure html report

- make sure run `npx cypress run` first and let it generate files in `/allure-results` folder
- `allure serve allure-results`, then you will be redirected to a html page to check the beautiful Allure report.

If you cannot run `allure serve allure-results`, install allure locally at first: `brew install allure`
Attention: install brew itself could takes time.

## Thanks!
