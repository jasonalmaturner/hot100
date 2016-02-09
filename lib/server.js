import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import testCtrl from '../server-assets/controllers/testCtrl';
import firebaseCtrl from '../server-assets/controllers/firebaseCtrl';

const app = express();
const port = process.env.EXPRESS_PORT || 9001;

app.use(bodyParser.json(), cors(), express.static(__dirname + '/../public'));

app.get('/api/test', testCtrl.firstGet);

app.post('/api/getstuff', firebaseCtrl.getStuff);

app.listen(port, function() {
  console.log(`listening on port: ${port}`);
});
