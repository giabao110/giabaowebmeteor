import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
export const HistoryCol = new Mongo.Collection('historys');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('historys', function tasksPublication() {
    return HistoryCol.find();
  });
}

// Meteor.methods({
//   'historys.insert'(text) {
//     if (! this.userId) {
//       throw new Meteor.Error('not-authorized');
//     }
//     HistoryCol.insert({
//       _id: new Mongo.ObjectID(),
//       author: Meteor.users.findOne(this.userId).username,
//       text,
//       team: Meteor.users.findOne(this.userId).profile.teamname,
//       logo: Meteor.users.findOne(this.userId).profile.logoteam,
//      });
//   },
// });