import express from 'express';
import termsRouter from './terms';
import exempleOneRouter from './exempleOne/index';
import exempleConsumerAPIRouter from './exampleConsumerAPI/index';
import generateTokenRouter from './generateToken/index';
import { authorizeJWT } from '../middlewares/authJWT/index';

const router = express.Router();

router.use(termsRouter);
router.use(generateTokenRouter);

router.use(authorizeJWT);
router.use(exempleOneRouter);
router.use(exempleConsumerAPIRouter);

export = router;
