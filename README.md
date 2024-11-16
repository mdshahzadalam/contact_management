# contact_management

This is a full-stack contact management application where users can **add**, **update**, and **delete** contact details. The application consists of a **backend server** and a **frontend UI**. The backend is powered by Node.js, while the frontend is built with React.

## Getting Started

Follow the steps below to get the project up and running on your local machine:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- [npm](https://www.npmjs.com/)

### Installation

#### 1. **Clone the repository**

First, clone the repository to your local machine:


git clone https://github.com/your-username/contact-management.git
cd contact-management
2. Set up the Backend (Server)
Navigate to the backend directory and install the required dependencies:


cd backend
npm install
Now, run the backend server using nodemon (you can also use node but nodemon will auto-reload the server when changes are made):


nodemon server.js
This will start the backend server on the default port (usually http://localhost:8080 or as configured in your server.js).

3. Set up the Frontend (UI)
Next, navigate to the frontend directory and install the necessary dependencies:


cd ../frontend
npm install
Start the React frontend application:


npm start
This will launch the React application, and it should be accessible on http://localhost:3000 (or another port if configured).

Using the Application
Once both the backend and frontend are running, you can use the application through the browser interface.

Add Contact:

Click the "Add" button to add a new contact. You will be prompted to fill out the contact details (name, email, phone number, etc.) and save them.
Update Contact:

To modify an existing contact, click the "Edit" button next to the contact. The contact details will appear in a form, where you can modify the fields and save the changes.
Delete Contact:

To remove a contact from the list, click the "Delete" button next to the contact. The contact will be removed from the list permanently.
Endpoints (Backend)
GET /contacts: Fetch all contacts from the database.
POST /contacts: Add a new contact.
PUT /contacts/:id: Update an existing contact by ID.
DELETE /contacts/:id: Delete a contact by ID.
Technologies Used
Backend:
Node.js
Express.js
MongoDB (or other database)
Frontend:
React.js
Axios for API calls
Troubleshooting
If you encounter issues with starting the backend server, make sure your MongoDB (or database) is properly configured and running.
If there are issues with the frontend, make sure your backend server is up and running.
