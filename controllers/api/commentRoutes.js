const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
console.log(req.body)
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      //   from front end in req.body send comment contents and post id
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
