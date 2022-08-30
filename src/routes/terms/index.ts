import express from 'express';
import { get } from '../../controllers/termsController/index';

const router = express.Router();

router.get('/terms', get);

export = router;
