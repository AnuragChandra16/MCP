MCP Server Tester
Overview
MCP Server Tester is a simple, elegant web application built with Bootstrap that allows users to test MCP server connectivity with a clean, responsive interface. This tool provides immediate feedback on server responses in a formatted display, making it easy to verify connections and debug API responses.
Features

Simple Interface: Clean, minimalist design focused on the primary task
Automatic Testing: Server is tested immediately when a URL is entered and the field loses focus
Formatted Responses: JSON and text responses are displayed with syntax highlighting
Responsive Design: Works well on both desktop and mobile devices

Setup Instructions
Prerequisites

Node.js (v14.x or higher)
npm (v6.x or higher)

Installation
Frontend Setup

Clone this repository
Copygit clone https://github.com/AnuragChandra16/MCP
cd server

Install dependencies
npm install

Install Bootstrap
npm install bootstrap@5.2.3

To start the frontend:
cd public

Use VS Code's Live Server extension or any other static file server to serve the frontend

In VS Code: Right-click on index.html and select "Open with Live Server"



Backend Setup

Navigate to the server directory
cd server

Install server dependencies
npm install express cors body-parser

Start the server
node server.js
The server will start on port 3000.

Usage

Navigate to the frontend in your browser (usually http://127.0.0.1:5500/public/index.html if using Live Server)
Enter one of the following MCP server URLs in the input field:

(https://registry.smithery.ai/servers/@smithery-ai/server-sequential-thinking)
https://registry.smithery.ai/servers/@browserbasehq/mcp-browserbase
https://registry.smithery.ai/servers/e2b


Click outside the input field or press Tab to test the connection
View the formatted response in the display area below

