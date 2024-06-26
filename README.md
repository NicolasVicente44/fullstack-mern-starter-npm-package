# MERN Stack Starter Framework Instructions

This is a starter framework for building full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Installation

1. Clone or download the repository:
   git clone https://github.com/NicolasVicente44/fullstack-mern-starter-npm-package

2. Navigate to the project directory:
   cd your-project

3. Install dependencies for both the client and server:

   - For the client:
     cd client && npm install
   - For the server:
     cd api && npm install

4. Set up environment variables by creating a `.env` file in the `api` directory, and one in the client folder if needed. Use the following variables:

   # MongoDB connection URI in the api

   MONGODB_URI=mongodb://localhost:27017/your-database-name

   # Port for the server to run on

   PORT=5000

5. Start the development server:
   - For the client:
     cd client && npm start
   - For the server:
     cd api && npm start

## Usage

- The client folder contains the frontend React application.
- The api folder contains the backend Node.js and Express.js server.
- connect the two to have a full stack project.
- deploy the api as a backend and configure it with multiple presentation layers if desired
- feel free to add packages and configuration as require, this is just a starter to bootstrap your way and rapidly develop large fullstack MVC web services
- add gitignore and other configurations as needed

## MongoDB Configuration

Ensure that you have MongoDB configured and preferable mongo db compass on your local machine. Update the `MONGODB_URI` environment variable in the `.env` file with the connection URI string for your MongoDB database.

## secret key for jwt Configuration

Ensure that you have secret configured. Update the `secret` environment variable in the `.env` .

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License with the following additional requirement:

You are free to use and modify this project for personal and commercial purposes. However, you must provide credit to Nick Vicente by including a link to the original repository in your project's documentation or credits section.
#   f u l l s t a c k - m e r n - s t a r t e r - n p m - p a c k a g e 
 
 