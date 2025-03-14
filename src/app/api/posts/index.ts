import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

app.use(bodyParser.json());

interface Post {
    id: number;
    title: string;
    content: string;
}

let posts: Post[] = [];

// Get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Get a single post by ID
app.get('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// Create a new post
app.post('/api/posts', (req, res) => {
    const newPost: Post = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Update an existing post
app.put('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
        posts[postIndex] = {
            id: postId,
            title: req.body.title,
            content: req.body.content,
        };
        res.json(posts[postIndex]);
    } else {
        res.status(404).send('Post not found');
    }
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    posts = posts.filter(p => p.id !== postId);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});