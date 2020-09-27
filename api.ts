import { Router } from 'express';
import admin from './firebase';

const router = Router();

router.get('/', async (req, res) => {
  const ref = admin.database().ref('server/log');

  await ref.set({
    message: 'test',
    time: new Date().toUTCString()
  });

  res.status(200).send('Hello, welcome to my-app');
});

export default router;