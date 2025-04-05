🌐 MCP Server Tester
Overview
MCP Server Tester is a simple, elegant web application built with Bootstrap that allows users to test MCP server connectivity through a clean, responsive interface. This tool provides instant feedback on server responses, making it easy to debug and validate server behavior.

🚀 Features
✅ Simple Interface – Clean, minimalist UI focused on one task.

⚡ Automatic Testing – Tests the server as soon as a URL is entered and the field loses focus.

🎨 Formatted Responses – JSON and plain text responses shown with syntax highlighting.

📱 Responsive Design – Works beautifully on both desktop and mobile screens.

🔧 Setup Instructions
Prerequisites
Node.js (v14.x or higher)

npm (v6.x or higher)

📁 Installation
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/AnuragChandra16/MCP
cd MCP
🖥 Frontend Setup
bash
Copy
Edit
cd public
Use VS Code Live Server or any static server to run the frontend:

In VS Code: Right-click on index.html → Open with Live Server

You can now visit:

pgsql
Copy
Edit
http://127.0.0.1:5500/public/index.html
🔙 Backend Setup
bash
Copy
Edit
cd server
npm install
Start the backend:

bash
Copy
Edit
node server.js
Local server will run on:

arduino
Copy
Edit
http://localhost:3000
🌐 Hosted Backend (Render)
We also host the backend live on Render here:

👉 https://mcp-emi0.onrender.com

Note: If the app hasn’t been accessed in a while, Render may take ~20–30 seconds to wake up on the free tier.

⚙️ Usage
Open the frontend in your browser:

pgsql
Copy
Edit
http://127.0.0.1:5500/public/index.html
Enter one of the following MCP server URLs:

https://registry.smithery.ai/servers/@smithery-ai/server-sequential-thinking

https://registry.smithery.ai/servers/@browserbasehq/mcp-browserbase

https://registry.smithery.ai/servers/e2b

Click outside the input field or press Tab to trigger the test.

View the formatted server response instantly below the input.
