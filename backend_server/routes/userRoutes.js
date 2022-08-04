import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';


router.post('/post-reviews', UserController.addReviews)
router.get('/getData', UserController.getDetails)
router.post('/support', UserController.addSupportCount)


export default router