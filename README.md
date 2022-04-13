# HauntedBnB

1. Clone my Repository
  * git clone https://github.com/powerwild/HauntedBnB.git


2. Script enabled to install both front and back ends from the root directory
  * npm install


3. Create a PostgresQL user with CREATEDB and PASSWORD
  * CREATE USER username WITH CREATEDB PASSWORD 'password'


4. Create a .env file modeled after the .env.example with the newly created username and password. Database name is up to you. JWT_SECRET should be a secure string. PORT is prefered at 5000.


5. Make sure to match the proxy key value in the frontend package.json with the selected PORT from the .env file.
    * "proxy": "http://localhost:PORT"


6. Create Database, Migrate Tables and Seed the tables
  * npx dotenv sequelize db:create
  * npx dotenv sequelize db:migrate
  * npx dotenv sequelize db:seed:all


7. Start the backend services
  * npm start (while in the backend directory)


8. Start the frontend services (if new browser window doesn't open automatically, then manually navigate to http://localhost:PORT   *number from the .env file)
  * npm start (while in the frontend directory)


9. Splash Page has a demo user sign in button or you can create your own user via the sign up modal.

10. https://haunted-bnb.herokuapp.com


![Screenshot (9)](https://user-images.githubusercontent.com/92146309/163052533-9a8389a4-e38f-469e-90d7-e1b870f855b2.png)


# Technologies
  * React/Redux
  * Javascript/Express
  * Sequelize
  * PostgreSQL


# Features

## Haunts - users can create representations of locations they own(or did own while alive)

![Screenshot (17)](https://user-images.githubusercontent.com/92146309/163052806-b1c53ec4-4c2f-4a92-863e-45387616bbd4.png)


## Reviews - users can leave reviews on haunts owned by others.


![Screenshot (18)](https://user-images.githubusercontent.com/92146309/163052821-c2d6c057-99b5-46d4-a4fc-d454c86b54d5.png)

