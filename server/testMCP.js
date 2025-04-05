// const { testMCPAPI, testMCPWebSocket } = require('../utils/helper');
// const config = require('../server/config');

// (async () => {
//     console.log("Running MCP Tests...");

//     // Test REST API MCP Server
//     const restApiUrl = config.MCP_REST_URL; // Example: "https://registry.smithery.ai/servers/@smithery-ai/server-sequential-thinking"
//     const restApiHeaders = { 'Authorization': `Bearer ${config.API_KEY}` }; // Use API key if needed

//     const apiTestResult = await testMCPAPI(restApiUrl, restApiHeaders);
//     console.log("REST API Test Result:", apiTestResult);

//     // Test WebSocket MCP Server
//     const wsUrl = config.MCP_WS_URL; // Example: "wss://server.smithery.ai/@smithery-ai/server-sequential-thinking/ws"
    
//     const wsTestResult = await testMCPWebSocket(wsUrl);
//     console.log("WebSocket Test Result:", wsTestResult);

//     console.log("MCP Tests Completed.");
// })();



const { testMCPAPI, testMCPWebSocket } = require('../utils/helper');
const config = require('../server/config');

(async () => {
    console.log("Running MCP Tests...\n");

    // --- Test REST API MCP Server ---
    const restApiUrl = config.MCP_REST_URL;  // Example: "https://registry.smithery.ai/servers/@smithery-ai/github"
    const restApiHeaders = config.API_KEY ? { 'Authorization': `Bearer ${config.API_KEY}` } : {};

    const apiTestResult = await testMCPAPI(restApiUrl, restApiHeaders);
    console.log("✅ REST API Test Result:", apiTestResult);

    // --- Test WebSocket MCP Server ---
    const wsUrl = config.MCP_WS_URL;  // Example: "wss://server.smithery.ai/@browserbasehq/mcp-browserbase"

    const wsConfig = {
        browserbaseApiKey: config.BROWSERBASE_API_KEY,
        browserbaseProjectId: config.BROWSERBASE_PROJECT_ID
    };

    const wsTestResult = await testMCPWebSocket(wsUrl, wsConfig);
    console.log("🌐 WebSocket Test Result:", wsTestResult);

    console.log("\n✅ MCP Tests Completed.");
})();
