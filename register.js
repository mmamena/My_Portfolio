
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"]["password"].value;
    var repass = document.forms["myForm"]["repassword"].value;

    if (pass != repass){
        var checkpass = document.getElementById("errormsg");
        checkpass.innerHTML = "Error!";

        return false;
    }
    else{
        return true;

    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}