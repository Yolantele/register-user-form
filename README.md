## Register User Form

1. To start the application clone this Git repo
2. Install dependencies `yarn`
3. Start the App `yarn start`
4. For your testing convenience the dummy secret key `KEY` is assigned to a constant. Please make sure to add your own `ENCRYPTION_KEY` to environment variables.

- This App uses Ant Design system and Form validation tools
- The code is structured around the cell the principle: each hierarchical level contains the components, constant and other resource that are required for that level alone.
- Shared resources that are used in multiple components and views are taken to shared level (such as UI , Hooks folders)
- Good separation of concern and well encampsulated logic enables for easy extensions / testing of the app
