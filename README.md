# FoodExplorer

This project simulates a restaurant where admins can add dishes and users can favorite and check their orders.

The following technologies are used in this project:
- vite
- context api
- styled components
- react router dom v6
- node
- mvc
- jwt
- multer
- knex

Before running the project, it will be necessary to configure the environment variables.

To run the client and server simultaneously, you will need 2 terminals, in which you will run these commands:
```bash
cd server && npm run dev
# in a new terminal
cd client && npm run dev
```

## Creating admin users
Creating admin users is only possible by making changes directly to the database. The process is:
- Create a user through the platform
- Run your favorite DBMS
- Open the database
- Make a query to find the user you just created
- Create an update query passing the value of the user's `is_admin` field to `true`


You can find the version of this project running at the URL below: https://prismatic-florentine-12ba28.netlify.app
