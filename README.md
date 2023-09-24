# MapsFrontend


## Technologies Used

- React:  A JavaScript library for building user interfaces.
- React Leaflet - A javascript library for maps.
- NodeJS, Express - For writing the REST API's
- Postegres - A RDBMS database to store the locations data.
- CSS: Styling and layout of the application.


## Getting Started

# In the Frontend 
1. Clone the repository:

```bash
https://github.com/prasadbylapudi/MapsBackend.git
```
2. Navigate to the folder and run
### `npm install` 

### `npm run dev` 

uns the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

# In the Backend
1. Clone the repository:
   ```bash
   https://github.com/prasadbylapudi/MapsBackend.git
   ```
2. Navigate to the folder and run
    ### `npm install`

3. ### `npm start`
# API Documentation

## `/insertSampleData` (POST)

- **Description**: Inserts data into a PostgreSQL database.
- **Method**: POST
- **Request Body**:
  - `name` (string): The name of the location.
  - `latitude` (number): The latitude coordinates of the location.
  - `longitude` (number): The longitude coordinates of the location.
  - `address` (string, optional): The address of the location.
  - `description` (string, optional): A description of the location.
- **Response**:
  - 200 OK: Data is successfully inserted.
  - 400 Bad Request: If required data (name, latitude, longitude) is missing in the request.
  - 500 Internal Server Error: If there is an issue with the server or database.

## `/locations` (GET)

- **Description**: Retrieves location data from a PostgreSQL database.
- **Method**: GET
- **Response**: Responds with a JSON array of location objects retrieved from the database.
  - Each location object contains:
    - `name` (string): The name of the location.
    - `latitude` (number): The latitude coordinates of the location.
    - `longitude` (number): The longitude coordinates of the location.
    - `address` (string, optional): The address of the location.
    - `description` (string, optional): A description of the location.
  - 500 Internal Server Error: If there is an issue with the server or database.

## Server Port

- **Port**: The server listens on port 3000.

## Database Connection

- **Database**: The application connects to a PostgreSQL database using the `client.connect()` method.
