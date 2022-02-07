# HauntedBnB

1. Clone my Repository
  a. git clone https://github.com/powerwild/HauntedBnB.git


2. Script enabled to install both front and back ends from the root directory
  a. npm install


3. Create a PostgresQL user with CREATEDB and PASSWORD
  a. CREATE USER username WITH CREATEDB PASSWORD 'password'


4. Create a .env file modeled after the .env.example with the newly created username and password. Database name is up to you. JWT_SECRET should be a secure string. PORT is prefered at 5000.


5. Make sure to match the proxy key value in the frontend package.json with the selected PORT from the .env file.
    a. "proxy": "http://localhost:PORT"


6. Create Database, Migrate Tables and Seed the tables
  a. npx dotenv sequelize db:create
  b. npx dotenv sequelize db:migrate
  c. npx dotenv sequelize db:seed:all


7. Start the backend services
  a. npm start (while in the backend directory)


8. Start the frontend services (if new browser window doesn't open automatically, then manually navigate to http://localhost:PORT   *number from the .env file)
  a. npm start (while in the frontend directory)


9. Splash Page has a demo user sign in button or you can create your own user via the sign up modal.
