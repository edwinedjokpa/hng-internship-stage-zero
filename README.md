# HNG Stage 0 Task - Public API with NestJS

## Description

This is a public API built with **NestJS** that returns the following information in JSON format:

- Your registered email address (used to register on the HNG12 Slack workspace).
- The current datetime in ISO 8601 format (UTC).
- The GitHub URL of the project's codebase.

The API is deployed to a publicly accessible endpoint and handles Cross-Origin Resource Sharing (CORS) appropriately.

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Setup Instructions](#setup-instructions)
3. [API Documentation](#api-documentation)
4. [Deployment](#deployment)
5. [Backlinks](#backlinks)

---

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: A strongly typed superset of JavaScript.
- **GitHub**: For version control and hosting the codebase.
- **Render**: For deploying the API.

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)
- Git

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/edwinedjokpa/hng-internship-stage-zero.git
   cd your-repo
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Application**:
   ```bash
   npm run start:dev
   ```
   The API will be accessible at `http://localhost:3000`.

---

## API Documentation

### Endpoints

- **GET /**: Returns the user's email, current datetime, and GitHub URL.

### Response Format

The API returns a JSON object with the following structure:

```json
{
  "email": "edjokpaedwin@gmail.com",
  "datetime": "2023-09-16T12:00:00Z",
  "githubUrl": "https://github.com/edwinedjokpa/hng-internship-stage-zero"
}
```

-

## Example Usage

1. Request

```bash
   curl -X GET http://localhost:3000/
```

2. Response

```bash
{
"email": "edjokpaedwin@gmail.com",
"datetime": "2023-09-16T12:00:00Z",
"githubUrl": "https://github.com/edwinedjokpa/hng-internship-stage-zero"
}

```

### Deployment

## The API is deployed on Render, and you can access it at [https://hng-internship-stage-zero.onrender.com/](https://hng-internship-stage-zero.onrender.com/).

## Backlinks

- [Python Developers](https://hng.tech/hire/python-developers)
- [C# Developers](https://hng.tech/hire/csharp-developers)
- [Go Developers](https://hng.tech/hire/golang-developers)
- [PHP Developers](https://hng.tech/hire/php-developers)
- [Java Developers](https://hng.tech/hire/java-developers)
- [Node.js Developers](https://hng.tech/hire/nodejs-developers)

---
