# Person Management REST API Documentation
This documentation provides details on how to use the Person Management REST API for CRUD operations on a list of persons. The API allows you to create, read, update, and delete person records.

### Base URL

The base URL for accessing the API is: `https://amara-hngtask2.onrender.com`

## API Endpoints
These are the endpoints.
### Create a New Person

- **URL**: `/persons`
- **HTTP Method**: `POST`
- **Request Body**: JSON object representing the person to be created.
- **Response**: Returns the created person object with a unique identifier.

#### Example Request:


POST https://amara-hngtask2.onrender.com/api/users

```json
{
  "name": "John Doe"
}
```

**Example Response:**

```json
{
  "name": "Jess",
  "_id": "1",
  "createdAt": "2023-09-13T23:39:22.237Z",
  "updatedAt": "2023-09-13T23:39:22.237Z",
  "__v": 0
}
```

## Get All Persons

**URL: /persons**
**HTTP Method: GET**
**Response:** Returns a list of all persons.


**Example Request:**

```http
GET https://amara-hngtask2.onrender.com/api/users
```

**Example Response:**

```json
[
  {
    "_id": "1",
    "name": "John Doe",
    "createdAt": "2023-09-13T23:39:22.237Z",
    "updatedAt": "2023-09-13T23:39:22.237Z",
    "__v": 0
  },
  {
    "_id": "2",
    "name": "Jane Smmith",
    "createdAt": "2023-09-13T00:56:23.087Z",
    "updatedAt": "2023-09-13T22:48:58.721Z",
    "__v": 0
  },
]
```

## Get a Specific Person
**URL:** `/users/{id}`
**HTTP Method:** `GET`
**Response:** Returns the person with the specified `id`.

**Example Request:**
```http
GET https://amara-hngtask2.onrender.com/api/users/1
```
**Example Response:**
```json
{
  "_id": "1",
  "name": "John Doe",
  "createdAt": "2023-09-13T23:39:22.237Z",
  "updatedAt": "2023-09-13T23:39:22.237Z",
  "__v": 0
  },
```

## Update a Person

**URL:** `/persons/{id}`
**HTTP Method:** `PUT`
**Request Body:** JSON object with updated person information.
**Response:** Returns the updated person object.

**Example Request:**

```http
PUT https://amara-hngtask2.onrender.com/api/users/1
```
```json
{
  "name": "Updated John Doe"
}
```
**Example Response:**

```json
 {
    "_id": "1",
    "name": "Updated John Doe",
    "createdAt": "2023-09-13T00:56:23.087Z",
    "updatedAt": "2023-09-13T22:48:58.721Z",
    "__v": 0
  }
```

## Delete a Person

**URL:** `/users/{id}`
**HTTP Method:** `DELETE`
**Response:** Returns a success message upon successful deletion.

**Example Request:**

```http
DELETE https://amara-hngtask2.onrender.com/api/users/1
```
**Example Response:**
```json
{
  "message": "User has been deleted successfully."
}
```

## Conclusion
This documentation provides an overview of the CRUD operations available through the Person Management REST API. 

This Markdown document outlines the endpoints, request and response examples, and general information about the REST API for managing persons. You can customize it further to include additional details, authentication mechanisms, and any other specific information relevant to your API.

