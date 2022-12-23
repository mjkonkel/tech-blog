const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// route for viewing a sinlge blog post
router.get("/update/:id", withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {});
  
      const post = postData.get({ plain: true });
  
      res.render("postUpdate", {
        ...post,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // route for creating a new blog post
router.get("/postCreate", withAuth, async (req, res) => {
    res.render("postCreate", {
      logged_in: req.session.logged_in,
    });
  });

  
// display all posts on dashboard
router.get("/", withAuth, async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const postData = await Post.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render("dashboard", {
        posts,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports = router;
