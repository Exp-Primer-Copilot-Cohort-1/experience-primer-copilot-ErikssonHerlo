//Create a web server

const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// Handle Requests to the /comments path
router.get('/', commentsCtrl.index);
router.get('/new', commentsCtrl.new);
router.post('/', commentsCtrl.create);
router.delete('/:id', commentsCtrl.delete);
