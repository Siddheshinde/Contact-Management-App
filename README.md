# Contact Management App

A full-stack web application for managing contacts. Built with the MERN stack to provide a simple and intuitive interface for creating, viewing, and managing your contacts.

## Features

- Create new contacts
- View all contacts
- Update existing contacts
- Delete contacts
- Clean and responsive user interface

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other**: Axios for API calls

## Project Structure

```
Contact Management App/
├── frontend/          # React frontend application
│   ├── src/
│   └── package.json
├── backend/           # Express backend API
│   ├── src/
│   │   ├── controller/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── db/
│   │   └── utils/
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Contact Management App"
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017
CORS_ORIGIN=http://localhost:5173
```

For MongoDB Atlas, use:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```
The backend server will run on `http://localhost:8000`

2. Start the frontend development server (in a new terminal):
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:5173`

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

Base URL: `http://localhost:8000/api/v1/contacts`

- `POST /` - Create a new contact
- `GET /` - Get all contacts
- `DELETE /:id` - Delete a contact by ID
- `PUT /:id` - Update a contact by ID

## Screenshots

Screenshots will be added soon.

## Future Improvements

- User authentication and authorization
- Contact image upload
- Search and filter functionality
- Contact categories and tags
- Export contacts to CSV/PDF
- Pagination for large contact lists
- Contact groups management
- Email and phone number validation

## Author

Siddhesh Shinde

