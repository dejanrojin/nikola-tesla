$(document).ready(function(){
	
$("#username_error_message").hide();
$("#email_error_message").hide();

$("#message_error_message").hide();


var user_name=false;
var email_v=false;
var mess=false;

$("#form_username").focusout(function(){
	
	
checkuser();	
	
	
	
});

function checkuser(){
	var username =$("#form_username").val().length;
if( username <5 || username>20){
	
$("#username_error_message").text("Mora biti od 5 do 20 slova");

$("#username_error_message").show();
	user_name=true;
		
}
else{
	
$("#username_error_message").hide();	

}		
}

	
	
	
	
	
	
	
$("#form_email").focusout(function(){
	
	
checkemail();	
	
	
	
});

function checkemail(){
	
var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		
	
if(pattern.test($("#form_email").val())){
	

		$("#email_error_message").hide();
}else{
	
$("#email_error_message").html("Prazno polje ili neispravan mejl");	
	$("#email_error_message").show();
email_v=true;
}
		
}	
	
	

	
$("#form_message").focusout(function(){
	
	
checktext();	
	
	
	
});	
	
	
function checktext(){
	var message =$("#form_message").val().length;
if( message <1){
	
$("#message_error_message").text("Prazna poruka");

$("#message_error_message").show();
	mess=true;
		
}
else{
	
$("#username_error_message").hide();	

}		
}
	
	
	$("#registration_form").submit(function() {
 user_name=false;
email_v=false;
 mess=false;
 
 
		checkuser();
	checkemail();
	checktext();
	


if(user_name == false && email_v == false && mess == false) {
			return true;
		} else {
			return false;	
		}

	
		
	});
	
	
	
	
	
	
});