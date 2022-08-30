import express from 'express';
import { generateToken } from '../../controllers/generateTokenController';

const router = express.Router();

router.get('/v1/generate-token', generateToken);

export = router;
