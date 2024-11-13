const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.post('/', pageController.createPost);
router.get('/', pageController.getAllPosts);
router.get('/:id', pageController.getPostById);
router.put('/:id', pageController.updatePost);
router.delete('/:id', pageController.deletePost);

module.exports = router;
