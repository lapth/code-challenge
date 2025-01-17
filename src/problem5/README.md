# Problem 5: A CRUD Server

## Tech stack
This project utilizes the following main technologies:

- **ExpressJS**: A framework for building APIs.
- **pg**: PostgreSQL client database library.
- **TypeORM**: An ORM library for mapping database tables to TypeScript classes.
- **Jest & Supertest**: Used for testing.
- **dotenv**: For managing environment configurations.

## Local setup

### Prerequisites

Ensure your environment has Node.js (preferably the latest LTS version), TypeScript, and Docker installed. If not, set them up before proceeding.

### Local Configuration

#### Start a Local Database

If you want to run a local PostgreSQL database, use Docker Compose:

Navigate to the project's root folder and run:

```sh
docker compose up -d
```

#### Create an `.env` File

Create a `.env` file in the root directory as the following sample:

```
DB_TYPE=postgres           # Database type (always postgres for this project)
DB_URL=localhost           # Database domain name or IP
DB_PORT=5432               # Default PostgreSQL database port
DB_USER_NAME=postgres      # Database username
DB_PASSWORD=postgres       # Database password
DB_NAME=postgres           # Database name
```
### Install Dependencies

Run the following command to install required packages:

```sh
npm install
```

### Build the Backend Application

```sh
npm run build
```

### Run the Backend Application Locally

```sh
npm start
```

## Testing

This project includes integration tests to ensure component connectivity, along with code coverage configuration. In a real-world project, unit tests should also cover business logic.

To run tests, execute:

```sh
npm test
```

Code coverage reports will be available in:

```
<project-root>/coverage
```

To view the detailed report, open:

```
<project-root>/coverage/lcov-report/index.html
```

## Manual Testing
After starting the backend service locally or deploying it, you can manually test the API using `curl` commands.

Before running these commands, set the backend URL:
```sh
export BE_URL=http://localhost:3000
```

### Create a New User
```sh
curl --location "$BE_URL/api/users" \
--header 'Content-Type: application/json' \
--data '{
    "name": "name 1",
    "description": "description 1"
}'
```

### Update a User
```sh
curl --location --request PUT "$BE_URL/api/users/1" \
--header 'Content-Type: application/json' \
--data '{
    "name": "name 1 - updated",
    "description": "description 1 - updated"
}'
```

### Get User Data
```sh
curl --location "$BE_URL/api/users/1"
```

### Get All Users
```sh
curl --location "$BE_URL/api/users"
```

### Get Users by Name
```sh
curl --location "$BE_URL/api/users?name=name%201"
```

### Delete a User
```sh
curl --location --request DELETE "$BE_URL/api/users/1"
```

## Live Demo
A live version of this backend service is deployed on a free server at `https://code-challenge-latest.onrender.com`

Run this command line to switch to live demo server.
```sh
export BE_URL=https://code-challenge-latest.onrender.com
```

<span style="color:orange;">⚠️ **Note:**</span>  
  
Since this is a free service, it may be down. Please run this command and wait for 'pong' in response to bring it back online.

```sh
curl --location "$BE_URL/ping"
```

## Improvements
To build a better backend service, we can make several enhancements:

### Security
We need to validate users who send requests to our APIs by integrating an authentication module.

### Improve Application Log
Logging is crucial for diagnosing issues in a production environment. We should configure the project to capture logs effectively and integrate them with monitoring services like Datadog or similar tools.

### Unit Testing
To ensure project quality, we should aim for better test coverage, at least 80% of the code should be covered by unit tests.

Thank you!
