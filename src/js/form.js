var ath = document.querySelector("#ath"); 

let navn = document.querySelector(".input-navn");
let alder = document.querySelector(".input-alder");
let email1 = document.querySelector(".input-email");
let email2 = document.querySelector(".input-email2");
let mobil = document.querySelector(".input-mobil");
let besked = document.querySelector("textarea");

function validation(){ 
	if(navn.value ===""){
		ath.textContent = "Angiv et navn!"; 
		navn.focus();
		navn.style.border="solid 2px red";
		return false; 
	}else{
		navn.style.border="none";
	}

	if(alder.value ===""){
		ath.textContent = "Angiv en alder!"; 
		alder.focus();
		alder.style.border="solid 2px red";
		return false; 
	}else{
		alder.style.border="none";
	}

	if(isNaN(alder.value)){
		ath.textContent = "Angiv alder med tal!";
		alder.focus();
		alder.style.border="solid 2px red";		
		return false; 
	}else{
		alder.style.border="none";
	}

	if(alder.value < 18){ 
		ath.textContent = "Du skal være mindst 18 år!"; 
		alder.focus();
		alder.style.border="solid 2px red";		
		return false; 
	}else{
		alder.style.border="none";
	}

//-------------------------------------------------------EMAIL------------------------------
var at = email1.value.indexOf("@"); 
var dot = email1.value.lastIndexOf("."); 

	if(email1.value ===""){
		ath.textContent = "Angiv en email-adresse!"; 
		email1.focus();
		email1.style.border="solid 2px red";
		return false; 
	}
	if(at<= 0){ 
		ath.textContent ="Skal indeholde et @ som ikke må være det første tegn!";
		email1.focus();	
		email1.style.border="solid 2px red";	
		return false;
	}

	if(dot < at +2){
		ath.textContent ="Tilføj minst et tegn mellem @ og det sidste punktum!";
		email1.focus();
		email1.style.border="solid 2px red";		
		return false;		
	}

	if(email1.value.length <= dot+2){
		ath.textContent = "Der skal være mindst 2 tegn efter det sidste punktum!";
		email1.focus();
		email1.style.border="solid 2px red";
		return false;
	}else{
			email1.style.border="none";
	}

	if(email1.value ==="" || email2.value !== email1.value){ 
		ath.textContent = "Email-adresserne skal være ens!";
		email2.focus();
		email1.style.border="solid 2px red";
		email2.style.border="solid 2px red";
		return false; 
	}else{
		email1.style.border="none";
		email2.style.border="none";
	}

//---------------------------------------------------mobil----------------------------------
	if(mobil.value ===""){
		ath.textContent = "Angiv et mobil nummer!";
		mobil.focus();
		mobil.style.border="solid 2px red";
		return false;
	}else{
		mobil.style.border="none";
	}

	if(isNaN(mobil.value)){
		ath.textContent = "Angiv et gyldigt mobil nummer!";
		mobil.focus();
		mobil.style.border="solid 2px red";
		return false;
	}else{
		mobil.style.border="none";
	}

	if(mobil.value.length > 8){
		ath.textContent = "Dit mobilnummer har for mange tal!";
		mobil.focus();
		mobil.style.border="solid 2px red";
		return false;
	}else{
		mobil.style.border="none";
	}

	if(mobil.value.length < 8){
		ath.textContent = "Dit mobilnummer mangler nogle tal!";
		mobil.focus();
		mobil.style.border="solid 2px red";
		return false;
	}else{
		mobil.style.border="none";
	}

	if(besked.value ===""){
		ath.textContent = "Angiv en besked!"; 
		besked.focus();
		besked.style.border="solid 2px red";
		return false; 
	}else{
		besked.style.border="none";
	}

	ath.textContent = "";
	return true;
}