const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send('Hello from mailing service')
});

module.exports = router;
