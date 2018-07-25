import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import MatchsCol from './matchs';
 
export const GroundsCol = new Mongo.Collection('grounds');
 
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('grounds', function tasksPublication() {
    return GroundsCol.find();
  });
}

Meteor.methods({
  'grounds.insert'(groundId,namesta,location,price,rating,hoursfree,img,status) {
    check(namesta, String);
    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }
    GroundsCol.insert({
      _id: new Mongo.ObjectID(),
      // matchsID: Meteor.users.findOne(this.userId).username,
      groundId,
      namesta,
      location,
      price,
      rating,
      hoursfree,
      img,
      status,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
      author: Meteor.users.findOne(this.userId).username,
    });
  },
  'grounds.remove'(groundId) {
    // check(groundId, String);
    GroundsCol.remove(groundId);
  }
});