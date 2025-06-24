# MERN Portfolio Backend

This is the backend server for my personal portfolio website, built using Node.js, Express.js, and MongoDB. It provides APIs to manage portfolio data such as projects, contact forms, experience, skills, and more. The backend is designed to be integrated with a React frontend for full MERN stack functionality.

## 🚀 Project Overview

The MERN Portfolio Backend enables you to:
- Store and retrieve project data
- Handle contact form submissions
- Manage personal information like experience, education, skills, etc.
- Perform CRUD operations via RESTful APIs
- Connect seamlessly with a frontend (e.g., React.js)

## 📁 Folder Structure

```
MERNPB/
├── models/        # MongoDB models/schema definitions
├── routes/        # Express routes for different API endpoints
├── node_modules/  # Installed npm packages
├── app.js         # Main Express app entry point
├── conn.js        # MongoDB connection logic
├── package.json   # Project metadata and dependencies
├── .gitignore     # Files/folders ignored by Git
```

## 💡 Features

- 📦 RESTful APIs for portfolio components (projects, contact, about, etc.)
- 💬 Contact form submission endpoint
- 🔐 Structured model-based MongoDB storage
- ⚙️ Configurable and scalable Express.js setup
- 🌐 CORS and middleware integration for frontend connectivity

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Language**: JavaScript
- **Others**: CORS, dotenv (recommended), body-parser, nodemon (for development)

## 🔧 Installation & Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/ayush123-bit/MERBPB.git
cd MERBPB
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Setup Environment Variables
Create a `.env` file in the root with:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Step 4: Start the Server
```bash
node app.js
```
Or for development:
```bash
npx nodemon app.js
```

Server will run at: `http://localhost:5000`

## 📬 API Endpoints (Example)

- `GET /projects` — fetch all portfolio projects
- `POST /contact` — submit a contact form
- `GET /skills` — retrieve skills data
- More routes defined in the `routes/` folder

## 🔐 Security & Production Tips

- Use `dotenv` to manage environment variables
- Validate and sanitize inputs
- Add rate limiting and logging middleware for production
- Deploy with services like Render, Railway, or on a VPS with NGINX + PM2

## 🙌 Author

**Ayush Rai**  
GitHub: [@ayush123-bit](https://github.com/ayush123-bit)

## 📜 License

This project is licensed under the [MIT License](LICENSE).
