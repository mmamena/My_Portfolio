var num = 1;
function postFunction(){

    var text1 = document.getElementById("text1").value;
    if (num==1)
    {
        var post = document.getElementById("post1");
        post.innerHTML = text1;
    }
    else if (num==2)
    {
        var post = document.getElementById("reply1");
        post.innerHTML = text1;
    }
    else if (num==3)
    {
        var post = document.getElementById("reply2");
        post.innerHTML = text1;
    }
    num+=1;
    document.getElementById("text1").value = "";

}
function clearFunction(){   
    document.getElementById("post1").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    num = 1;
}
 