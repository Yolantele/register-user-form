## Register User Form

1. To start the application clone this Git repo
2. Install dependencies `yarn`
3. Start the App `yarn start`
4. For your testing convenience the dummy secret key `KEY` is assigned to a constant. Please make sure to add your own `ENCRYPTION_KEY` to environment variables.

- This App uses Ant Design system and Form validation tools
- The code is structured around cell principle: each hierarchical level contains the components, constants, tests and other resources that are required for well encompased component / hook / view.
- Shared resources that are used in multiple components and views are taken to shared levels (such as UI , Hooks folders)
- Good separation of concern and well encampsulated logic enables for easy extensions / testing of the app
- For testing suit Jest and Enzyme is used with some exaples (run `yarn test` to test the app). With more time An addition of Codecept.JS test suit woud be added to enable User Story / Snapshot testing to align with product design UIX expectations
