const express = require('express');

// Creating an Express app
const app = express();
app.use("/api/v1/user", userrouter);

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});