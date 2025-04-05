// // const axios = require('axios');
// // const WebSocket = require('ws');

// // /**
// //  * Helper function to test an MCP REST API endpoint.
// //  * @param {string} url - The MCP API URL.
// //  * @param {object} headers - Headers for authentication.
// //  * @returns {Promise<object>} - The response data or error.
// //  */
// // async function testMCPAPI(url, headers = {}) {
// //     try {
// //         const response = await axios.get(url, { headers });
// //         return { success: true, data: response.data };
// //     } catch (error) {
// //         return { success: false, error: error.message };
// //     }
// // }

// // /**
// //  * Helper function to test an MCP WebSocket connection.
// //  * @param {string} wsUrl - The WebSocket URL.
// //  * @returns {Promise<object>} - The connection result.
// //  */
// // async function testMCPWebSocket(wsUrl) {
// //     return new Promise((resolve) => {
// //         const ws = new WebSocket(wsUrl);

// //         ws.on('open', () => {
// //             resolve({ success: true, message: "WebSocket connected successfully." });
// //             ws.close();
// //         });

// //         ws.on('error', (err) => {
// //             resolve({ success: false, error: err.message });
// //         });
// //     });
// // }

// // module.exports = { testMCPAPI, testMCPWebSocket };

// const axios = require('axios');
// const WebSocket = require('ws');

// /**
//  * Test an MCP HTTP (REST) endpoint.
//  */
// async function testMCPAPI(url, headers = {}) {
//     try {
//         const response = await axios.get(url, { headers });
//         return { success: true, type: 'http', data: response.data };
//     } catch (error) {
//         return { success: false, type: 'http', error: error.message };
//     }
// }

// /**
//  * Test an MCP WebSocket endpoint.
//  */
// async function testMCPWebSocket(wsUrl, config = {}) {
//     return new Promise((resolve) => {
//         const ws = new WebSocket(wsUrl, {
//             headers: {
//                 // Add any custom auth headers from config if needed
//                 'Authorization': config.browserbaseApiKey || ''
//             }
//         });

//         ws.on('open', () => {
//             resolve({ success: true, type: 'ws', message: "WebSocket connected successfully." });
//             ws.close();
//         });

//         ws.on('error', (err) => {
//             resolve({ success: false, type: 'ws', error: err.message });
//         });
//     });
// }

// /**
//  * Main handler to test any MCP server (HTTP or WebSocket).
//  */
// async function testMCPServer(url, type, config = {}) {
//     if (type === 'http') {
//         return await testMCPAPI(url, config.headers || {});
//     } else if (type === 'ws') {
//         return await testMCPWebSocket(url, config);
//     } else {
//         return { success: false, error: `Unsupported type: ${type}` };
//     }
// }

// module.exports = { testMCPServer };



const axios = require('axios');
const WebSocket = require('ws');

/**
 * Test MCP HTTP (REST) endpoint.
 */
async function testMCPAPI(url, headers = {}) {
    try {
        const response = await axios.get(url, { headers });
        return { success: true, type: 'http', data: response.data };
    } catch (error) {
        return {
            success: false,
            type: 'http',
            error: error.response?.statusText || error.message,
            statusCode: error.response?.status || null
        };
    }
}

/**
 * Test MCP WebSocket endpoint.
 */
async function testMCPWebSocket(wsUrl, config = {}) {
    return new Promise((resolve) => {
        const ws = new WebSocket(wsUrl, {
            headers: config.headers || {}
        });

        ws.on('open', () => {
            resolve({ success: true, type: 'ws', message: "WebSocket connected successfully." });
            ws.close();
        });

        ws.on('error', (err) => {
            resolve({ success: false, type: 'ws', error: err.message });
        });
    });
}

/**
 * Auto-detect and test MCP server based on URL.
 * You can also explicitly pass type: 'http' or 'ws'
 */
async function testMCPServer(url, type = null, config = {}) {
    if (!type) {
        type = url.startsWith('ws://') || url.startsWith('wss://') ? 'ws' : 'http';
    }

    if (type === 'http') {
        return await testMCPAPI(url, config.headers || {});
    } else if (type === 'ws') {
        return await testMCPWebSocket(url, config);
    } else {
        return { success: false, error: `Unsupported type: ${type}` };
    }
}

module.exports = { testMCPServer };
