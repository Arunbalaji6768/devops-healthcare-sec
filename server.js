const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <body style="font-family: sans-serif; text-align: center; padding-top: 50px; background-color: #f0f4f8;">
            <h1 style="color: #004a99;">Healthcare Secure Portal</h1>
            <div style="border: 2px solid #004a99; display: inline-block; padding: 20px; border-radius: 10px; background: white;">
                <h2 style="color: #2e7d32;">DevSecOps Status: SECURE</h2>
                <p>Security Scan: <b>Trivy Passed ✅</b></p>
                <p>Compliance: <b>HIPAA Standards Meta</b></p>
                <hr>
                <p>Developed by: <b>Arunbalaji</b></p>
            </div>
        </body>
    `);
});

app.listen(PORT, () => {
    console.log('Secure Healthcare App running on port 3000');
});