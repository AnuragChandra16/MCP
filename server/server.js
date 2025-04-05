// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mcpHandler = require('./mcpHandler');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post('/test-server', async (req, res) => {
//     const { url } = req.body;
//     if (!url) return res.status(400).json({ error: "No URL provided" });

//     const result = await mcpHandler.testMCPServer(url);
//     res.json(result);
// });

// app.listen(3000, () => console.log("Server running on port 3000"));


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mcpHandler = require('./mcpHandler');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post('/test-server', async (req, res) => {
//     const { url, type, config } = req.body;

//     if (!url || !type) {
//         return res.status(400).json({ error: "Missing 'url' or 'type' in request body" });
//     }

//     try {
//         const result = await mcpHandler.testMCPServer(url, type, config || {});
//         res.json(result);
//     } catch (error) {
//         console.error("Error testing server:", error);
//         res.status(500).json({ error: error.message || "Server test failed" });
//     }
// });

// app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mcpHandler = require('./mcpHandler');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/test-server', async (req, res) => {
    const { url, type, config } = req.body;

    if (!url || !type) {
        return res.status(400).json({ error: "Missing 'url' or 'type' in request body" });
    }

    try {
        const result = await mcpHandler.testMCPServer(url, type, config || {});
        res.json(result);
    } catch (error) {
        console.error("Error testing server:", error);
        res.status(500).json({ error: error.message || "Server test failed" });
    }
});

app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));
