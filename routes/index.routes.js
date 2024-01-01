const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("some page render here");
});

module.exports = router;
