# Person Management REST API Documentation
This documentation provides details on how to use the Person Management REST API for CRUD operations on a list of persons. The API allows you to create, read, update, and delete person records.

### Base URL

The base URL for accessing the API is: `https://api.example.com/persons`

## Authentication

Authentication is required for some operations. Please refer to the specific endpoints for authentication requirements.

## API Endpoints
These are the endpoints.
### Create a New Person

- **URL**: `/persons`
- **HTTP Method**: `POST`
- **Request Body**: JSON object representing the person to be created.
- **Response**: Returns the created person object with a unique identifier.

#### Example Request:


POST https://api.example.com/persons

```json
{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com"
}
```

**Example Response:**

```json
{
  "id": 1,
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com"
}
```

## Get All Persons

**URL: /persons**
**HTTP Method: GET**
**Response:** Returns a list of all persons.


**Example Request:**

```http
GET https://api.example.com/persons
```

**Example Response:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25,
    "email": "jane.smith@example.com"
  }
]
```

## Get a Specific Person
**URL:** `/persons/{id}`
**HTTP Method:** `GET`
**Response:** Returns the person with the specified `id`.

**Example Request:**
```http
GET https://api.example.com/persons/1
```
**Example Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com"
}
```

## Update a Person

**URL:** `/persons/{id}`
**HTTP Method:** `PUT`
**Request Body:** JSON object with updated person information.
**Response:** Returns the updated person object.

**Example Request:**

```http
PUT https://api.example.com/persons/1
```
```json
{
  "name": "Updated John Doe",
  "age": 31,
  "email": "updated.john.doe@example.com"
}
```
**Example Response:**

```json
{
  "id": 1,
  "name": "Updated John Doe",
  "age": 31,
  "email": "updated.john.doe@example.com"
}
```

## Delete a Person

**URL:** `/persons/{id}`
**HTTP Method:** `DELETE`
**Response:** Returns a success message upon successful deletion.

**Example Request:**

```http
DELETE https://api.example.com/persons/1
```
**Example Response:**
```json
{
  "message": "Person with ID 1 has been deleted successfully."
}
```

## Error Handling
The API returns appropriate error codes and error messages for invalid requests or server errors.


## Conclusion
This documentation provides an overview of the CRUD operations available through the Person Management REST API. 

This Markdown document outlines the endpoints, request and response examples, and general information about the REST API for managing persons. You can customize it further to include additional details, authentication mechanisms, and any other specific information relevant to your API.

