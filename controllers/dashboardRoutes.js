// show all loggedin users posts
// create a post
// edit and delete a post
// 

const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
     where:  {
        user_id: req.session.user_id
     }
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', { 
        posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/add', withAuth, async (req, res) => {
    res.render('add', { 
      logged_in: req.session.logged_in 
    });
})




module.exports = router