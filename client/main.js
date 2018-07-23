import  './main.html';
import 'jquery/dist/jquery.min'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import {renderRoutes} from '../imports/startup/client/routes';
import '../imports/startup/accounts-config.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('root'))
});

// if(Meteor.isClient){
//   Template.LoginMenu.events({
//     'click [data-action=login]'(events,Template){
//       console.log("login");
//       event.preventDefault();
//       Meteor.loginWithGithub({
//         requestPermissions: ['email']
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