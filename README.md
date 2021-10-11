NodeJS, Express & MongoDB Mock REST API.

Used Insomnia for API testing, link: https://docs.insomnia.rest/

### Instructions
1. After forking the repo, create a .env file

2. Copy and paste the following code into the .env file:
    DATABASE_URL=mongodb://127.0.0.1:27017
    TOKEN_KEY=1234567891011

3. Start MongoDB first in separate terminal with command: brew services start mongodb-community@5.0

4. Start server with command: npm run devStart

5. To end MongoDB type: brew services stop mongodb-community@5.0