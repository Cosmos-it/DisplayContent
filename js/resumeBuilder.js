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
var phoneNumber = "(425)-209-8052";
var email = "taban@tabancosmos.com";
var github = "https://github.com/Cosmos-it";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedPhone = HTMLcontactGeneric.replace("%data%", phoneNumber);
var formattedEmail = HTMLcontactGeneric.replace("%contact%", email);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#topContacts").append(formattedPhone);
$("#topContacts").append(formattedEmail);



