# SIT737-2.1P: Developing and Deploying a Node.js Web Server

## Introduction
This project demonstrates how to set up a basic Node.js web server using Express.js and deploy it to a GitHub repository. The server renders student-specific data upon request.

## Technologies & Tools Used
- **Node.js** - JavaScript runtime for backend development
- **Express.js** - Web framework for Node.js
- **Git** - Version control system
- **GitHub** - Remote repository hosting
- **Visual Studio Code** - Code editor
- **Command Line Interface (CLI)** - For executing commands

---

## Step-by-Step Implementation

### 1. Setting Up the Development Environment
Before implementing the server, ensure the development environment is properly configured.

#### Install Required Tools
- **Visual Studio Code**: Download and install from [VS Code](https://code.visualstudio.com/)
- **Node.js**: Download and install from [Node.js](https://nodejs.org/)
- **Git**: Install from [Git](https://git-scm.com/)

### 2. Creating the Node.js Web Server

#### Initialize the Project
1. Open terminal and create a project directory:
   ```sh
   mkdir SIT737-NodeServer
   cd SIT737-NodeServer
   ```
2. Initialize a Node.js project:
   ```sh
   npm init -y
   ```
   This generates `package.json` for dependency management.

#### Install Express.js
```sh
npm install express
```

#### Create the Server File
1. Inside the project folder, create a file named `server.js`.
2. Add the following code:
   ```js
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
       res.send('Welcome to SIT737 Node.js Web Server!');
   });

   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
   ```

#### Run the Server
```sh
node server.js
```
Open `http://localhost:3000` in a browser to verify.

---

## 3. Configuring Git & GitHub

### Initialize Git Repository
```sh
git init
git add .
git commit -m "Initial commit - Setting up Node.js web server"
```

### Push Project to GitHub
1. Create a new repository on GitHub (e.g., `sit737-2025-prac2p`).
2. Link the local repository to GitHub:
   ```sh
   git remote add origin https://github.com/himanshudhaka17/sit737-2025-prac2p.git
   git branch -M main
   git push -u origin main
   ```

---

## Screenshots
1. **Server Running in Terminal:**
   ![Server Running](./screenshots/server_running.png)
2. **Browser Output:**
   ![Webpage Output](./screenshots/webpage_output.png)
3. **GitHub Repository:**
   ![GitHub Repo](./screenshots/github_repo.png)

---

## Conclusion
This project successfully demonstrates the setup and deployment of a basic Node.js web server using Express.js. The repository is now live on GitHub for future development and collaboration.

**GitHub Repository:** [https://github.com/himanshudhaka17/sit737-2025-prac2p](https://github.com/himanshudhaka17/sit737-2025-prac2p)

