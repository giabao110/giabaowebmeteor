import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const GroundsCol = new Mongo.Collection('grounds');

Meteor.methods({
  'grounds.insert'(namesta, location,price,rating,hoursfree,img,status) {
    check(namesta, String);
 
    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }
 
    GroundsCol.insert({
      _id: new Mongo.ObjectID(),
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
    });
  },
  'grounds.remove'(groundId) {
    // check(groundId, String);
    GroundsCol.remove(groundId);
  }
});