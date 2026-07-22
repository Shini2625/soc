For setting up
Run this command in your terminal: npm i -D nodemon 
                                   npm i dotenv mongoose express bcrypt jsonwebtoken cookie-parser cors
                                   for the packages or simply run npm install
To run the code: npm run dev
you can add your port, db link, ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY in .env file
There are 7 routes 
  1. /students/health: for checking the status of backend
  2. /students/register: for creating a new account/record in the db
  3. /students/login: for logging in this will also generate your access token and refresh token with expiry 15min and 7 days respectively
  4. /students/refresh-token: for generating new token
  5. /students/student/:id: for updating student details
  6. /students/count: for counting no of students per branch
  7. /students/logout: for logging out