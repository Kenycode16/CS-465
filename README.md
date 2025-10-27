CS 465 – Full Stack Web Application

Module Eight Journal & Project Reflection

Architecture

In this full stack project, I worked with two main types of frontend development: server-side rendering with Express HTML/JavaScript and a single-page application (SPA) with Angular. Express HTML provided a straightforward, traditional way to serve static pages and handle form-based interactions. Angular’s SPA, on the other hand, offered a dynamic, client-side experience where data could update without reloading the page. The SPA required more setup but created a smoother and more modern user experience.

On the backend, I implemented a NoSQL MongoDB database. MongoDB was a good fit because of its flexibility in handling unstructured and semi-structured data, which allowed for rapid development without needing strict schemas. This flexibility made it easier to store user accounts, trip data, and admin information in a scalable way.

Functionality

JSON (JavaScript Object Notation) is not the same as JavaScript it’s a lightweight data format that looks like JavaScript objects but is language-independent. JSON acted as the bridge between frontend and backend: the SPA could send and receive structured JSON data from the Express API, which made communication between the client and server consistent and efficient.

During development, I refactored parts of the code to simplify repeated logic and make the application easier to maintain. For example, I created reusable UI components in Angular for trip listings and forms. These components reduced duplication, made the codebase cleaner, and sped up future development by allowing me to adjust one component instead of editing multiple files.

Testing

Testing a full stack application meant focusing on both the API endpoints and the security measures. I practiced testing API requests with tools such as Postman, verifying GET, POST, PUT, and DELETE requests against the backend. Once I added login authentication and JWT (JSON Web Token) security, testing became more complex since each request had to include authentication headers.

Understanding methods, endpoints, and security layers was critical. For example, unsecured endpoints allowed public access to trip data, while protected endpoints ensured only admins with valid tokens could add or edit trips. This reinforced the importance of planning out API design and validating security early in the process.

Reflection

This course has been an important milestone in reaching my professional goals. By building a full stack application from scratch, I not only strengthened my technical skills but also learned how to think about applications as integrated systems—where frontend, backend, and database must all work together securely.

Key skills I’ve gained include:

Implementing secure login authentication with JWTs.

Designing reusable frontend components for efficiency.

Managing a NoSQL database for scalable backend support.

Applying API testing methods in realistic, secure environments.

These skills directly improve my marketability as a software engineer, since employers look for developers who can design, build, and secure applications across the entire stack. More importantly, I’ve gained confidence in my ability to deliver a professional-grade project that demonstrates both technical depth and practical usability.
