const express = require("express");
const app = express();
const PORT = 3000;

//jsonの受け取りを可能にするミドルウェア
app.use(express.json());

//ルーティング例: トップページにアクセスしたら "Hello World" と返す
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
