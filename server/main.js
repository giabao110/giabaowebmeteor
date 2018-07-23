import '../imports/api/matchs';

import '../imports/api/grounds';

import '../imports/api/comments';

import { ServiceConfiguration } from 'meteor/service-configuration';

// if(Meteor.isClient){
//   Template.LoginMenu.events({
//     'click [data-action=login]'(e,tmpl){
//       e.preventDefault();
//       Meteor.loginWithGithub({
//         requestPermissions: [ema]
//       }, (error) => {
//         if (error) {
//           Session.set('errorMessage', error.reason || 'Unknown error');
//         }
//       });
//     },
//     'click [data-action=logout]'(e,tmpl){
//       e.preventDefault();
//       Meteor.logout();
//     }
//   });
//   Template.LoginMenu.helpers({
//     isLoginServicesConfigured(){
//       return Accounts.loginServicesConfigured();
//     }
//   });
// }

// if(Meteor.isServer){
//     ServiceConfiguration.configurations.remove({
//       service: "github"
//     });
//     ServiceConfiguration.configurations.insert({
//       service: "github",
//       appId: '4af611cc0a0e811827a4',
//       secret: '05593727f2e52e8284be898baa5b38a2f5649859'
//     });
// }

