// async function testServer() {
//     const serverUrl = document.getElementById('serverUrl').value;
//     const responseBox = document.getElementById('response');

//     if (!serverUrl) {
//         responseBox.textContent = "Please enter a server URL.";
//         return;
//     }

//     try {
//         const response = await fetch('http://localhost:3000/test-server', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ url: serverUrl })
//         });

//         const result = await response.json();
//         responseBox.textContent = JSON.stringify(result, null, 2);
//     } catch (error) {
//         responseBox.textContent = "Error connecting to server.";
//     }
// }


// async function testServer() {
//     const serverUrl = document.getElementById('serverUrl').value;
//     const connectionType = document.getElementById('connectionType').value;
//     const configInput = document.getElementById('configJson').value;
//     const responseBox = document.getElementById('response');

//     if (!serverUrl) {
//         responseBox.textContent = "Please enter a server qualified name.";
//         return;
//     }

//     let config = {};
//     if (configInput.trim()) {
//         try {
//             config = JSON.parse(configInput);
//         } catch (err) {
//             responseBox.textContent = "Invalid JSON config.";
//             return;
//         }
//     }

//     try {
//         const response = await fetch('http://localhost:3000/test-server', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 url: serverUrl,
//                 type: connectionType,
//                 config: config
//             })
//         });

//         const result = await response.json();
//         responseBox.textContent = JSON.stringify(result, null, 2);
//     } catch (error) {
//         responseBox.textContent = "Error connecting to server.";
//     }
// }


// async function testServer() {
//     const serverUrl = document.getElementById('serverUrl').value;
//     const responseBox = document.getElementById('response');

//     if (!serverUrl) {
//         responseBox.textContent = "Please enter a server URL.";
//         return;
//     }

//     // Detect WebSocket or HTTP
//     const isWebSocket = serverUrl.startsWith("ws");

//     const payload = {
//         url: serverUrl,
//         type: isWebSocket ? 'ws' : 'http',
//         config: isWebSocket ? {
//             browserbaseApiKey: "bb_live_migd9G7dX5ecn-Vfa0vfuJ58tgg",
//             browserbaseProjectId: "973ee63b-9ebc-449a-b4da-05f55b66c539"
//         } : {}
//     };

//     try {
//         const response = await fetch('http://localhost:3000/test-server', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(payload)
//         });

//         const result = await response.json();
//         responseBox.textContent = JSON.stringify(result, null, 2);
//     } catch (error) {
//         responseBox.textContent = "Error connecting to server.";
//     }
// }




    async function testServer() {
        const url = document.getElementById('serverUrl').value;
        const responseBox = document.getElementById('responseBox');

        if (!url) {
            responseBox.innerHTML = "<strong>⚠️ Please enter a server URL.</strong>";
            return;
        }

        try {
            const response = await fetch(url);
            const text = await response.text();

            try {
                const json = JSON.parse(text);
                responseBox.innerHTML = formatJSON(json);
            } catch (err) {
                // Not JSON, just show as plain text
                responseBox.innerHTML = `<pre>${text}</pre>`;
            }
        } catch (error) {
            responseBox.innerHTML = `<span class="brown">Error:</span> <span class="blue">${error.message}</span>`;
        }
    }

    function formatJSON(json) {
        let jsonString = JSON.stringify(json, null, 2);

        jsonString = jsonString.replace(
            /"([^"]+)":/g, '<span class="blue">"$1"</span>:'
        ).replace(
            /: ("[^"]*")/g, ': <span class="brown">$1</span>'
        ).replace(
            /: (\d+)/g, ': <span class="brown">$1</span>'
        ).replace(
            /: (true|false|null)/g, ': <span class="brown">$1</span>'
        );

        return `<pre>${jsonString}</pre>`;
    }


