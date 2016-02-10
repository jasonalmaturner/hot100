import User from './models/userModel';
import random from 'mongoose-simple-random';
import q from 'q';
import Firebase from 'firebase';

const usersRef = new Firebase(process.env.USERS_REF || 'https://phokit.firebaseio.com/users');
const phokitRef = new Firebase(process.env.PHOKIT_REF || 'https://phokit.firebaseio.com/startups/114/upVotes');

function findRando() {
  var dfd = q.defer();
  User.findOneRandom((err, result) => {
    if (err) {
      dfd.reject(err);
    } else {
      dfd.resolve(result);
    }
  });
  return dfd.promise;
}

function checkFB(id) {
  phokitRef.on('value', (snap) => {
    
  });
}
