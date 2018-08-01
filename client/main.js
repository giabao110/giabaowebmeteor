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

// Template.loginButtons.events({
// 	"click #login-buttons-logout": function(e) {
//     e.preventDefault();
// 		Meteor.logout((error) => {
//         if(error)
//         {
//           console.log(error);
//         }
//         else{
//           console.log("Logout Succesfully");
//         return () => history.push('/login')
//         }
			
// 		});
// 	}
// });