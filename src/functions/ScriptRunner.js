const { app } = require('@azure/functions');

app.http('run', {
    methods: ['POST'],
    authLevel: 'function',
    handler: async (request, context) => {
        const body = await request.text();

        const isEncoded = request.query.get('encoded');
        if (isEncoded === "true") {
            // Convert body from base64 to string
            scriptContent = Buffer.from(body, 'base64').toString('utf8');
        } else {
            scriptContent = body;
        }

        // Run scriptContent as inline Javascript and get the result
        var scriptFunction = new Function(scriptContent);

        try {
            return {
                body: JSON.stringify({ response: scriptFunction() }),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        } catch (error) {
            // Get the entire exception as a string
            return {
                body: JSON.stringify({ error: error.toString() }),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
    }
});
