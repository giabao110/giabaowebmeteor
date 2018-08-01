// import { Meteor } from 'meteor/meteor';
// import { Mongo } from 'meteor/mongo';

// // var day = new Date();
// export const AccoutsCol = new Mongo.Collection('accouts');
 
// if (Meteor.isServer) {
//   // This code only runs on the server
//   Meteor.publish('accouts', function tasksPublication() {
//     return AccoutsCol.find();
//   });
// }

// Meteor.methods({
//   'accouts.insert'(username,email) {
//     if (! this.userId) {
//       throw new Meteor.Error('not-authorized');
//     }
//     AccoutsCol.insert({
//       _id: new Mongo.ObjectID(),
//       username,
//       email,
//       createdAt: new Date(),
//       // owner: this.userId,
//       // team: Meteor.users.findOne(this.userId).team,
//       // avatar: Meteor.users.findOne(this.userId).avt,
//       // username: Meteor.users.findOne(this.userId).username,
//       // author: Meteor.users.findOne(this.email),
//     });
//   },
//   // 'accouts.remove'(groundId) {
//   //   AccoutsCol.remove(groundId);
//   // }
// });