

function regi()
{
    let name=document.getElementById("regname").value;
    let email=document.getElementById("regemail").value;
    let password=document.getElementById("regpassword").value;

    if(name!="" && email!="" && password!="")
    {
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    document.getElementById("ans").innerText="Registration complete";
    hide();
    }
}
function logi(){
 let email=document.getElementById("logemail").value;
 let password=document.getElementById("logpassword").value;
 let savedemail=localStorage.getItem("email");
 let savedpassword=localStorage.getItem("password");
 if(savedemail==email && savedpassword==password)
 {
    window.location.href="Home.html";
    alert("login complete");
 }else{
    Document.getElementById("logans").innerText="not match";
   
 }

}