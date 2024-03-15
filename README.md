
# Node.js Backend Inventory System
## Project Overview

This project aims to develop a robust inventory management system using Node.js. The system allows users to perform CRUD operations on items in the inventory and record transactions associated with those items. It utilizes RESTful API design principles and integrates with a chosen database to persist data.

## Demo and Deployment
+ **Demo Explanation Link**: Demo Explanation
+ **Deployed Server Link**: Deployed Server

## Technologies Used
1. `Node.js`
2. `Express.js` (as the chosen framework)
3. `MongoDB`(as the selected database)
4. `Git` (for version control)
5. `GitHub`(for repository hosting)

## Folder Structure

	├── SWIVL_BACKEND_14_MARCH/
	│ ├── controllers/
	│ │ ├── itemController.js
	│ │ └── transactionController.js
	│ ├── models/
	│ │ ├── ItemModel.js
	│ │ └── TransactionModel.js
	│ ├── routes/
	│ │ ├── itemRoutes.js
	│ │ └── transactionRoutes.js
	│ ├── db/
	│ │ ├── connectToDB.js
	│
	├── .gitignore
	├── package.json
	├── README.md
	├── package-lock.json
	├── server.js
	└── .env

## Database Schema

> ### Item Collection

+ **id**: *ObjectId*
+ **name**: *String*
+ **description**: *String*
+ **quantity**: *Number*
+ **lastUpdated**: *Date*


### Transaction Collection

+ **id**: *ObjectId*
+ **itemId**: *ObjectId (references Item collection)*
+ **type**: *String (IN or OUT)*
+ **quantity**: *Number*
+ **timestamp**: *Date*


## API Endpoints

### Items

+ `GET /items-api/items`:

+ **Description**: Retrieve all items
+ **Request**: None
+ **Response**:
```
{

"message": "items found successfully",

"items": [
    {
        "id": "item_id",
        "name": "item_name",
        "description": "item_description",
        "quantity": 10,
        "last_updated_timestamp": "2024-03-15T12:00:00Z"
    },
    {
        "id": "item_id",
        "name": "item_name",
        "description": "item_description",
        "quantity": 5,
        "last_updated_timestamp": "2024-03-14T10:00:00Z"
    },
    ...
]

```

+ `POST /items-api/items`:

+ **Description**: Add a new item
+ **Request**:
```
{
    "name": "new_item_name",
    "description": "new_item_description",
    "quantity": 20
}

}
```

+ **Response**:

```
{
"message": "item added successfully",
"newItem": {
    "id": "new_item_id",
    "name": "new_item_name",
    "description": "new_item_description",
    "quantity": 20,
    "last_updated_timestamp": "2024-03-15T14:00:00Z"
}
}

```

+ `GET /items-api/items/:id`:

+ **Description**: Retrieve a specific item
+ **Request**: None
+ **Response**:

```
{
"message": "item found successfully",
{
    "id": "item_id",
    "name": "item_name",
    "description": "item_description",
    "quantity": 10,
    "last_updated_timestamp": "2024-03-15T12:00:00Z"
}
}
```

+ `PUT /items-api/items/:id`:

+ **Description**: Update a specific item
+ **Request**:

```
{
    "name": "updated_item_name",
    "description": "updated_item_description",
    "quantity": 15
}

```
+ **Response**:

```
{
"message": "item updated successfully",
{
    "id": "item_id",
    "name": "updated_item_name",
    "description": "updated_item_description",
    "quantity": 15,
    "last_updated_timestamp": "2024-03-15T16:00:00Z"
}
}

```

+ `DELETE /items-api/items/:id`:

+ **Description**: Delete a specific item
+ **Request**: None
+ **Response**:

```
{
    "message": "Item deleted successfully",
	{
	"deletedItem":
		 {
		    	"id": "item_id",
    			"name": "updated_item_name",
    			"description": "updated_item_description",
    			"quantity": 15,
    			"last_updated_timestamp": "2024-03-15T16:00:00Z"
		}
	}
}

```


### Transactions

+ `POST /transactions-api/items/:id/transaction`:

+ **Description**: Record a transaction for a specific item
+ **Request**:

```
{
    "type": "IN",
    "quantity": 5
}

```
+ **Response**:

```
{
    "message": "Transaction created to specific Item successfully!",
    "newTransaction": {
        "item_id": "65f33c8d62fa148bb5f61e45",
        "type": "IN",
        "quantity": 90,
        "transaction_timestamp": "2024-03-15T16:07:01.487Z",
        "_id": "65f47225b380b6127ca7117c",
        "createdAt": "2024-03-15T16:07:01.488Z",
        "updatedAt": "2024-03-15T16:07:01.488Z",
        "__v": 0
    }
}

```

+ `GET /transactions-api/items/:id/transactions`:

+ **Description**: Retrieve all transactions for a specific item
+ **Request**: None
+ **Response**:

```
{
    "message": "Transactions found by Item id successfully!",
    "transactionsByItemId": [
        {
            "_id": "65f33cdfb98e45bcaebe7659",
            "item_id": "65f33c8d62fa148bb5f61e45",
            "type": "IN",
            "quantity": 5,
            "transaction_timestamp": "2024-03-14T18:07:27.303Z",
            "createdAt": "2024-03-14T18:07:27.321Z",
            "updatedAt": "2024-03-14T18:07:27.321Z",
            "__v": 0
        },
        {
            "_id": "65f33d14b98e45bcaebe765c",
            "item_id": "65f33c8d62fa148bb5f61e45",
            "type": "OUT",
            "quantity": 10,
            "transaction_timestamp": "2024-03-14T18:08:20.733Z",
            "createdAt": "2024-03-14T18:08:20.735Z",
            "updatedAt": "2024-03-14T18:08:20.735Z",
            "__v": 0
        },
        {
            "_id": "65f33d1bb98e45bcaebe765f",
            "item_id": "65f33c8d62fa148bb5f61e45",
            "type": "OUT",
            "quantity": 70,
            "transaction_timestamp": "2024-03-14T18:08:27.467Z",
            "createdAt": "2024-03-14T18:08:27.471Z",
            "updatedAt": "2024-03-14T18:08:27.471Z",
            "__v": 0
        },
  ]
}

```

## How to Use

### Prerequisites
Before running the application, ensure you have the following installed:
- Node.js
- MongoDB (or any other preferred database)
- Git

### Installation
1. Clone the repository:
    ```bash
    git clone [https://github.com/your-username/nodejs-backend-inventory-system.git](https://github.com/vijaykumardumpeti/swivl_vijay_assignment.git)
    ```

2. Navigate to the project directory:
    ```bash
    cd SWIVL_BACKEND_14_MARCH
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Define environment variables such as database connection details.

5. Start the server:
    ```bash
    npm start
    ```

### Usage
Once the server is running, you can interact with the API using tools like cURL, Postman, or any HTTP client.


