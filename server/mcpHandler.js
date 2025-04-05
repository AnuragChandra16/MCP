// const axios = require('axios');
// const WebSocket = require('ws');

// /**
//  * Test MCP HTTP (REST) API.
//  */
// async function testMCPAPI(url, headers = {}) {
//     try {
//         const response = await axios.get(url, { headers });
//         return { success: true, type: 'http', data: response.data };
//     } catch (error) {
//         return {
//             success: false,
//             type: 'http',
//             error: error.response?.statusText || error.message,
//             statusCode: error.response?.status || null
//         };
//     }
// }

// /**
//  * Test MCP WebSocket.
//  */
// // async function testMCPWebSocket(wsUrl, config = {}) {
// //     return new Promise((resolve) => {
// //         const ws = new WebSocket(wsUrl, {
// //             headers: {
// //                 'BROWSERBASE_API_KEY': config.browserbaseApiKey || '',
// //                 'BROWSERBASE_PROJECT_ID': config.browserbaseProjectId || ''
// //             }
// //         });

// //         let receivedMessages = [];

// //         ws.on('open', () => {
// //             console.log("✅ WebSocket connected successfully.");
// //             resolve({
// //                 success: true,
// //                 type: 'ws',
// //                 message: "WebSocket connected successfully.",
// //                 receivedMessages
// //             });
// //         });

// //         ws.on('message', (data) => {
// //             console.log("📩 Received from server:", data.toString());
// //             receivedMessages.push(data.toString());
// //         });

// //         ws.on('close', (code, reason) => {
// //             console.log(`⚠️ WebSocket closed (Code: ${code}) Reason: ${reason}`);
// //         });

// //         ws.on('error', (err) => {
// //             console.error("🚨 WebSocket Error:", err);
// //             resolve({ success: false, type: 'ws', error: err.message });
// //         });
// //     });
// // }

// async function testMCPWebSocket(wsUrl, config = {}) {
//     return new Promise((resolve) => {
//         console.log(`🔗 Connecting to WebSocket: ${wsUrl}`);

//         const ws = new WebSocket(wsUrl, {
//             headers: {
//                 'BROWSERBASE_API_KEY': config.browserbaseApiKey || '',
//                 'BROWSERBASE_PROJECT_ID': config.browserbaseProjectId || ''
//             }
//         });

//         let receivedMessages = [];

//         ws.on('open', () => {
//             console.log("✅ WebSocket connected successfully.");
//         });

//         ws.on('message', (data) => {
//             console.log("📩 Received from server:", data.toString());
//             receivedMessages.push(data.toString());
//         });

//         ws.on('close', (code, reason) => {
//             console.log(`⚠️ WebSocket closed (Code: ${code}) Reason: ${reason}`);
//             resolve({
//                 success: true,
//                 type: 'ws',
//                 message: "WebSocket connection closed.",
//                 receivedMessages
//             });
//         });

//         ws.on('error', (err) => {
//             console.error("🚨 WebSocket Error:", err);
//             resolve({ success: false, type: 'ws', error: err.message });
//         });

//         // Close after 10s to see if any messages arrive
//         setTimeout(() => {
//             console.log("⌛ Closing WebSocket after 10s...");
//             ws.close();
//         }, 10000);
//     });
// }




// /**
//  * Test MCP Server (Auto-detects type).
//  */
// async function testMCPServer(url, type = null, config = {}) {
//     if (!type) {
//         type = url.startsWith('ws://') || url.startsWith('wss://') ? 'ws' : 'http';
//     }

//     if (type === 'http') {
//         return await testMCPAPI(url, config.headers || {});
//     } else if (type === 'ws') {
//         return await testMCPWebSocket(url, config);
//     } else {
//         return { success: false, error: `Unsupported type: ${type}` };
//     }
// }

// // ✅ Ensure the functions are exported properly
// module.exports = { testMCPAPI, testMCPWebSocket, testMCPServer };


const axios = require('axios');
const WebSocket = require('ws');

/**
 * Test MCP HTTP (REST) API.
 */
//recent
// async function testMCPAPI(url, headers = {}) {
//     try {
//         const response = await axios.get(url, { headers });
//         return { success: true, type: 'http', data: response.data };
//     } catch (error) {
//         return {
//             success: false,
//             type: 'http',
//             error: error.response?.statusText || error.message,
//             statusCode: error.response?.status || null
//         };
//     }
// }

async function testMCPAPI(url, headers = {}) {
    try {
        const response = await axios.get(url, { headers });
        return {
            success: true,
            type: 'http',
            data: response.data,
            status: response.status
        };
    } catch (error) {
        return {
            success: false,
            type: 'http',
            error: error.response?.statusText || error.message,
            status: error.response?.status || 500
        };
    }
}


/**
 * Test MCP WebSocket.
 */
// async function testMCPWebSocket(wsUrl, config = {}) {
//     return new Promise((resolve) => {
//         console.log(`🔗 Connecting to WebSocket: ${wsUrl}`);
        
//         const ws = new WebSocket(wsUrl);
//         let receivedMessages = [];
        
//         ws.on('open', () => {
//             console.log("✅ WebSocket connected successfully.");
            
//             // Send initialization/authentication message
//             if (config.browserbaseApiKey && config.browserbaseProjectId) {
//                 const initMessage = {
//                     type: 'init',
//                     data: {
//                         browserbaseApiKey: config.browserbaseApiKey,
//                         browserbaseProjectId: config.browserbaseProjectId
//                     }
//                 };
//                 console.log("📤 Sending initialization data...");
//                 ws.send(JSON.stringify(initMessage));
//             }
            
//             // Optional: Send a test message
//             if (config.testMessage) {
//                 setTimeout(() => {
//                     console.log("📤 Sending test message...");
//                     ws.send(JSON.stringify(config.testMessage));
//                 }, 1000);
//             }
//         });
        
//         ws.on('message', (data) => {
//             try {
//                 const parsedData = JSON.parse(data.toString());
//                 console.log("📩 Received from server:", JSON.stringify(parsedData, null, 2));
//                 receivedMessages.push(parsedData);
//             } catch (e) {
//                 console.log("📩 Received from server:", data.toString());
//                 receivedMessages.push(data.toString());
//             }
//         });
        
//         ws.on('close', (code, reason) => {
//             console.log(`⚠️ WebSocket closed (Code: ${code}) Reason: ${reason}`);
//             resolve({
//                 success: true,
//                 type: 'ws',
//                 message: "WebSocket connection closed.",
//                 receivedMessages
//             });
//         });
        
//         ws.on('error', (err) => {
//             console.error("🚨 WebSocket Error:", err);
//             resolve({ success: false, type: 'ws', error: err.message });
//         });
        
//         // Close after specified timeout or default 10s
//         const timeout = config.timeout || 10000;
//         setTimeout(() => {
//             console.log(`⌛ Closing WebSocket after ${timeout/1000}s...`);
//             ws.close();
//         }, timeout);
//     });
// }

async function testMCPWebSocket(wsUrl, config = {}) {
    return new Promise((resolve) => {
        const headers = {
            'BROWSERBASE_API_KEY': config.browserbaseApiKey || '',
            'BROWSERBASE_PROJECT_ID': config.browserbaseProjectId || ''
        };

        console.log(`🔗 Connecting to WebSocket: ${wsUrl}`);
        console.log(`📡 Sending Headers:`, headers);

        const ws = new WebSocket(wsUrl, { headers });
        let receivedMessages = [];

        ws.on('open', () => {
            console.log("✅ WebSocket connected successfully.");
        });

        ws.on('message', (data) => {
            console.log("📩 Received from server:", data.toString());
            receivedMessages.push(data.toString()); // Store messages
        });

        ws.on('close', (code, reason) => {
            console.log(`⚠️ WebSocket closed (Code: ${code}) Reason: ${reason}`);
            resolve({
                success: true,
                type: 'ws',
                //messages: receivedMessages.length > 0 ? receivedMessages : "No messages received."
            });
        });

        ws.on('error', (err) => {
            console.error("🚨 WebSocket Error:", err);
            resolve({ success: false, type: 'ws', error: err.message });
        });

        // Keep WebSocket open for 10 seconds to receive data
        setTimeout(() => {
            console.log("⌛ Closing WebSocket after 10s...");
            ws.close();
        }, 10000);
    });
}



/**
 * Test MCP Server (Auto-detects type).
 */
async function testMCPServer(url, type = null, config = {}) {
    if (!type) {
        type = url.startsWith('ws://') || url.startsWith('wss://') ? 'ws' : 'http';
    }
    
    if (type === 'http') {
        // For HTTP, construct headers from config if provided
        const headers = config.headers || {};
        
        // Add Browserbase credentials to headers if they exist
        if (config.browserbaseApiKey) {
            headers['BROWSERBASE_API_KEY'] = config.browserbaseApiKey;
        }
        if (config.browserbaseProjectId) {
            headers['BROWSERBASE_PROJECT_ID'] = config.browserbaseProjectId;
        }
        
        return await testMCPAPI(url, headers);
    } else if (type === 'ws') {
        return await testMCPWebSocket(url, config);
    } else {
        return { success: false, error: `Unsupported type: ${type}` };
    }
}

// Example usage:
async function run() {
    // Example configuration
    const config = {
        browserbaseApiKey: "YOUR_BROWSERBASE_API_KEY",
        browserbaseProjectId: "YOUR_BROWSERBASE_PROJECT_ID",
        testMessage: {
            type: "request",
            action: "getStatus"
        },
        timeout: 15000 // 15 seconds
    };
    
    // Test WebSocket connection
    const wsResult = await testMCPServer(
        "wss://server.smithery.ai/@browserbasehq/mcp-browserbase", 
        "ws", 
        config
    );
    console.log("WebSocket Test Result:", JSON.stringify(wsResult, null, 2));
    
    // Test HTTP connection
    const httpResult = await testMCPServer(
        "https://server.smithery.ai/@browserbasehq/mcp-browserbase", 
        "http", 
        config
    );
    console.log("HTTP Test Result:", JSON.stringify(httpResult, null, 2));
}

// Uncomment to run the example
// run();

module.exports = { testMCPAPI, testMCPWebSocket, testMCPServer };
