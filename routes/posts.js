const router = require('express').Router();
const verify = require('../middleware/verifyToken')

// Test route that uses verify as middleware to created private routes based off JWT auth
router.get('/', verify, (req, res) => {
    res.json({ posts: { title: 'Test Post', description: 'test test test'}})
})

module.exports = router