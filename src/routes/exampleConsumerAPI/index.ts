import express from 'express';
import { get } from '../../controllers/exampleConsumerAPI/index';

const router = express.Router();

router.get('/index', get);

export = router;
