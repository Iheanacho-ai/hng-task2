# User Management REST API Documentation
This documentation provides details on how to use the User Management REST API for CRUD operations on a list of Users. The API allows you to create, read, update, and delete User records.

### Base URL

The base URL for accessing the API is: `https://amara-hngtask2.onrender.com/api`

## API Endpoints
These are the endpoints.
### Create a New User

- **URL**: `/`
- **HTTP Method**: `POST`
- **Request Body**: JSON object representing the User to be created.
- **Response**: Returns the created User object with a unique identifier.

#### Example Request:


POST https://amara-hngtask2.onrender.com/api

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

## Get All Users

**URL: /**
**HTTP Method: GET**
**Response:** Returns a list of all Users.


**Example Request:**

```http
GET https://amara-hngtask2.onrender.com/api
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

## Get a Specific User
**URL:** `/{id}`
**HTTP Method:** `GET`
**Response:** Returns the user with the specified `id`.

**Example Request:**
```http
GET https://amara-hngtask2.onrender.com/api/1
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

## Update a User

**URL:** `/{id}`
**HTTP Method:** `PUT`
**Request Body:** JSON object with updated User information.
**Response:** Returns the updated user object.

**Example Request:**

```http
PUT https://amara-hngtask2.onrender.com/api/1
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

## Delete a User

**URL:** `/{id}`
**HTTP Method:** `DELETE`
**Response:** Returns a success message upon successful deletion.

**Example Request:**

```http
DELETE https://amara-hngtask2.onrender.com/api/1
```
**Example Response:**
```json
{
  "message": "User has been deleted successfully."
}
```

## Conclusion
This documentation provides an overview of the CRUD operations available through the User Management REST API. 

This Markdown document outlines the endpoints, request and response examples, and general information about the REST API for managing Users. You can customize it further to include additional details, authentication mechanisms, and any other specific information relevant to your API.

