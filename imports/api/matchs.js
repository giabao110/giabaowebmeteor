import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const MatchsCol = new Mongo.Collection('matchs');


Meteor.methods({
  'matchs.insert'(text) {
    check(text, String);

    Tasks.insert({
      text,
      createdAt: new Date(),
      
    /*   owner: this.userId,
      username: Meteor.users.findOne(this.userId).username, */
    });
  },

  'matchs.remove'(taskId) {
    check(taskId, String);
 
    Tasks.remove(taskId);
  },
});
