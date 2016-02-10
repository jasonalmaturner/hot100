import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import testCtrl from '../server-assets/controllers/testCtrl';

// import firebaseCtrl from '../server-assets/controllers/firebaseCtrl';
import User from '../server-assets/models/userModel';
import mongoose from 'mongoose';
import seeder from 'mongoose-seed';
import { CronJob } from 'cron';
import users from '../users.json';

const app = express();
const port = process.env.EXPRESS_PORT || 9001;
const mongoUri = process.env.MONGOURI || 'mongodb://localhost:27017/hot100';

app.use(bodyParser.json(), cors(), express.static(__dirname + '/../public'));

app.get('/api/test', testCtrl.firstGet);

// app.post('/api/getstuff', firebaseCtrl.getStuff);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

// mongoose.connect(mongoUri);
// mongoose.connection.once('open', () => {
//   console.log('db connected');
// });

seeder.connect(mongoUri, () => {
  console.log(111, 'db connected');
  seeder.loadModels(['./server-assets/models/userModel']);
  console.log(222, 'userModel loaded');
  seeder.clearModels(['Users'], () => {
    console.log(333, 'Users cleared');
    seeder.populateModels([
      {
        model: 'Users',
        documents: users,
      },
    ]);
  });
  console.log(444);
});

// const job = new CronJob('00 00 01 ')
