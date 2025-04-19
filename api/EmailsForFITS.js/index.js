const { app } = require('@azure/functions');
const axios = require('axios');

app.http('EmailsForFITS', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Proxying request to Logic App...`);

        const logicAppUrl = process.env.LOGIC_APP_EMAILS_FOR_FITS_URL;

        try {
            const payload = await request.json();

            const logicAppResponse = await axios.post(logicAppUrl, payload);

            return {
                status: 200,
                jsonBody: {
                    message: 'Email sent successfully.',
                    result: logicAppResponse.data
                }
            };
        } catch (err) {
            context.log.error('Error:', err.message);
            return {
                status: 500,
                jsonBody: {
                    error: 'Failed to send email.',
                    details: err.message
                }
            };
        }
    }
});
