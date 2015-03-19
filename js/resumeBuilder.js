/**
 * Created by Taban on 3/18/15.
 */
////using the replace method.
//
//var email = "taban@gmail.com";
//
//var newEmail = email.replace("gmail", "tabancosmos");
//
////log the original email and the old email to console
//
//console.log(email);
//console.log(newEmail);
var name = "Taban Cosmos";
var role = "Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


