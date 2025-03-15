const express = require('express');
const app = express();

const PORT = 3000;

const studentDetails = {
    fullName: "Himanshu Dhaka",
    courseTitle: "Masters of Data Science",
    studentID: "223904638"
};

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Himanshu's Personal Web Server</title>
                <style>
                    body { 
                        font-family: 'Roboto', sans-serif; 
                        background-color: #f4f7f6; 
                        color: #333;
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        height: 100vh; 
                        margin: 0;
                    }
                    h1 { color:rgb(243, 33, 124); }
                    p { font-size: 20px; line-height: 1.6; }
                    .container { text-align: center; padding: 30px; background: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
                    .footer { margin-top: 20px; font-size: 14px; color: #888; }
                    .button { background-color:rgb(243, 33, 121); color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
                    .button:hover { background-color:rgb(218, 11, 90); }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Welcome to Himanshu's Personal Server</h1>
                    <p><strong>Name:</strong> ${studentDetails.fullName}</p>
                    <p><strong>Course:</strong> ${studentDetails.courseTitle}</p>
                    <p><strong>Student ID:</strong> ${studentDetails.studentID}</p>
                    <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                    <a href="/about" class="button">About Me</a>
                    <a href="/contact" class="button" style="margin-left: 10px;">Contact Info</a>
                </div>
                <div class="footer">
                    <p>📡 Powered by Himanshu Dhaka</p>
                </div>
            </body>
        </html>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>About Me</title>
                <style>
                    body { font-family: 'Roboto', sans-serif; background-color:rgb(229, 246, 240); color: #333; }
                    h1 { color:rgb(243, 33, 131); }
                    .content { padding: 30px; text-align: center; }
                </style>
            </head>
            <body>
                <div class="content">
                    <h1>About Me</h1>
                    <p>Hi! I'm ${studentDetails.fullName}, a student in the ${studentDetails.courseTitle} program.</p>
                    <p>I'm passionate about data science and enjoy working on various projects related to machine learning and AI.</p>
                    <p>Feel free to explore this web server to learn more about me!</p>
                    <a href="/" class="button">Home</a>
                </div>
            </body>
        </html>
    `);
});

app.get('/contact', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Contact Info</title>
                <style>
                    body { font-family: 'Roboto', sans-serif; background-color:rgb(223, 243, 236); color: #333; }
                    h1 { color:rgb(243, 33, 114); }
                    .content { padding: 30px; text-align: center; }
                </style>
            </head>
            <body>
                <div class="content">
                    <h1>Contact Information</h1>
                    <p>Email: himanshu.dhaka@gmail.com</p>
                    <p>Phone: +61413394746</p>
                    <a href="/" class="button">Back to Home</a>
                </div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
