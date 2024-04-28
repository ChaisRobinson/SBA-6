# SBA-6

# MongoDB Database Application

## Overview
This server application, built using Node.js, Express, and MongoDB, offers a robust CRUD (Create, Read, Update, Delete) API designed for managing data across three distinct collections in a MongoDB database. It serves as a powerful backend framework for applications requiring complex data interactions.

## Features

### Data Collections
The application manages three different collections:
- **Fruits**
- **Vegetables**
- **Meats**

Each collection is designed with at least five sample documents to illustrate potential use cases.

### CRUD Operations
- **GET Routes**: Retrieve data using query parameters to fetch documents from the database.
- **POST Routes**: Create new entries in the database collections, allowing client-side data creation.
- **PATCH/PUT Routes**: Update existing documents within the database, enabling clients to modify data.
- **DELETE Routes**: Remove documents from the database, supporting deletion operations from the client side.

### Code Organization
The application adheres to modern code organization practices, enhancing readability and maintainability.

## API Endpoints

### Fruits
- `GET /fruits`: List all fruits.
- `POST /fruits`: Add a new fruit.
- `PATCH /fruits/:id`: Update an existing fruit.
- `DELETE /fruits/:id`: Remove a fruit.

### Vegetables
- `GET /vegetables`: List all vegetables.
- `POST /vegetables`: Add a new vegetable.
- `PUT /vegetables/:id`: Update an existing vegetable.
- `DELETE /vegetables/:id`: Remove a vegetable.

### Meats
- `GET /meats`: List all meats.
- `POST /meats`: Add a new meat.
- `PATCH /meats/:id`: Update an existing meat.
- `DELETE /meats/:id`: Remove a meat.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm

### Setup
1. Clone the repository to your local machine.
2. Navigate to the directory where you cloned the repo.
3. Install all dependencies using:
   ```bash
   npm install
4. Start the severwith:
   ```bash
   npm start
#### The API will now be accessible at http://localhost:3000.

### Dependencies
- Node.js
- Express
- MongoDB

### Contributing
We welcome contributions to this project. If you have suggestions or improvements, please fork the repository and submit a pull request, or open an issue with the tag "enhancement".



