const db = require('../models');
const Post = db.Post;

// Create a new Post
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const slug = title.toLowerCase().replace(/ /g, '-'); // simple slug generation
        const post = await Post.create({ title, slug, content });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
};

// Read all Posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
};

// Read a single Post
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) res.json(post);
        else res.status(404).json({ message: 'Post not found' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post', error });
    }
};

// Update a Post
exports.updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const slug = title.toLowerCase().replace(/ /g, '-'); // update slug on title change
        const [updated] = await Post.update({ title, slug, content }, {
            where: { id: req.params.id }
        });
        if (updated) res.json({ message: 'Post updated successfully' });
        else res.status(404).json({ message: 'Post not found' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
};

// Delete a Post
exports.deletePost = async (req, res) => {
    try {
        const deleted = await Post.destroy({ where: { id: req.params.id } });
        if (deleted) res.json({ message: 'Post deleted successfully' });
        else res.status(404).json({ message: 'Post not found' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
};
