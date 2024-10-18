const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.post('/api/collect-email', (req, res) => {
  const email = req.body.email;
  const emailFilePath = path.join(__dirname, 'public', 'emaillist.html');

  // Append the email to the HTML file
  fs.appendFile(emailFilePath, `<p>${email}</p>\n`, (err) => {
    if (err) {
      return res.status(500).send('Error writing to file');
    }
    res.status(200).send('Email collected successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
