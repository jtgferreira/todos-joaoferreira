# Flip Take Home Challenge - João Ferreira

This repository contains the result of Flip's Take Home Challenge for a Fullstack Developer position.

The frontend is developed using Angular 17, while the backend is built with Kotlin utilizing the Micronaut framework.

## Implemented Features:
- Todos consist of a title, category, and an optional description.
- Todos can be marked as done.
- Todos can be displayed together.
- Todos can be created.

## Missing Features:
- Todos cannot be displayed by category.
- Unit tests have not been implemented.
- Code documentation is lacking.
- Backend validation is not implemented.
- Error handling is not implemented.
- Loading states are not managed.
- Linters and formatters have not been configured.

## Running the Project

### Option 1: Using Docker

Ensure Docker is running on your machine and execute the following command:

```sh
docker-compose up
```

### Option 2: Running Projects Individually

This requires Java JDK, Node.js, and npm to be installed locally.

#### Steps to Start the Frontend:

1. Navigate to the frontend directory:
    ```sh
    cd todo-web-app
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the frontend server:
    ```sh
    npm run start
    ```

#### Steps to Start the Backend:

1. Navigate to the backend directory:
    ```sh
    cd server
    ```
2. Start the backend server:
    ```sh
    ./gradlew run
    ```

### Accessing the Application

Once the services are up and running, you can access the application at the following URLs:

- Frontend: [http://localhost:4200](http://localhost:4200)
- Backend: [http://localhost:8080](http://localhost:8080)

## Conclusion and Future Improvements

At the start of the development, I decided to gain hands-on experience with Kotlin and Micronaut for the first time, which led to the omission of several features mentioned above.

If I were to start the project again, I would focus on completing a single feature end-to-end, including tests, validations, error handling, etc., instead of prioritizing containerization or additional features such as UI enhancements. 

Given more time, I would address the missing features, particularly testing and backend validation.

Additionally, for future improvements, I would like to persist data on the backend using a database.
