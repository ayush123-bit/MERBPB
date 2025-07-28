// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    deployedLink: String,
    githubLink: String,
    youtubeLink: String,
    category: String,
    priority: { type: Number, default: 0 }, // <-- NEW: For custom ordering
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
