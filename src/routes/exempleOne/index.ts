import express from 'express';
import {
  getMethod,
  errorMethod,
  postMethod,
} from '../../controllers/exampleOneController/index';

const router = express.Router();

router.get('/v1/exemple-one/index', getMethod);
router.get('/v1/exemple-one-error/index', errorMethod);
router.post('/v1/exemple-one', postMethod);

export = router;
