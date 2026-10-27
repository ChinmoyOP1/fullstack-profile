const express = require("express");

const app = express();
const PORT = 5001;

app.get("/health", (req, res) => {
  res.json({
    status: "success",
    service: "auth-service",
    message: "Auth service is running!",
  });
});

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
