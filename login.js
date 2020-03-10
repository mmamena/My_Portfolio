function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad; //ซ้ายคือเหตุกาณ์ ขวาคือสิ่งที่เกิดขึ้น
function loginLoad(){
	// วิธีใช้ getParams()
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
	var parameter = getParams();
	user = parameter["username"];
	pass = parameter["password"];


}

function checkLogin(){
	var username2 = document.forms["myLogin"]["username"].value;
	var password2 = document.forms["myLogin"]["password"].value;

	if(user == username2 && pass == password2){
		alert("Login");
		return true;

	}
	else{
		alert("Incorrect");
		return false;
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			