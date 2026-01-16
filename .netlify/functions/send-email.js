const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Initialize SendGrid with API key from environment variable
        const apiKey = process.env.SENDGRID_API_KEY;
        if (!apiKey) {
            console.error('SENDGRID_API_KEY environment variable is not set');
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Email service not configured' })
            };
        }

        sgMail.setApiKey(apiKey);

        // Parse the request body
        const data = JSON.parse(event.body);
        const { name, email, message } = data;

        // Validate required fields
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields: name, email, message' })
            };
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid email format' })
            };
        }

        // Prepare the email
        const msg = {
            to: 'pkoordominic@gmail.com', // Your email address
            replyTo: email, // Reply to the visitor's email
            from: 'noreply@dominic-kipkorir.netlify.app', // Must be verified in SendGrid
            subject: `New Portfolio Contact from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
        };

        // Send the email
        await sgMail.send(msg);

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ success: true, message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: false,
                error: 'Failed to send email. Please try again later.'
            })
        };
    }
};
