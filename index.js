const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use("/proxy", createProxyMiddleware({
  target: "https://www.google.com",
  changeOrigin: true,
  pathRewrite: { "^/proxy": "" }
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
