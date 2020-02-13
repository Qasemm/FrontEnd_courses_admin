let cancle_btn=document.getElementById('cancle');
let save_btn=document.getElementById('save');
let dialog=document.getElementById("dialog")
let ok=document.getElementById("ok")
save_btn.addEventListener('click',check);
cancle_btn.addEventListener('click',goBack);
 function check() {
    let OldPassword=document.getElementById('OldPassword').value;
    let NewPassword=document.getElementById('NewPassword').value;
    let ConfirmPassword=document.getElementById('ConfirmPassword').value;

     if(check_passwprd(NewPassword,ConfirmPassword,OldPassword)){
       update()
     }
 }
function goBack(){
  window.location="ProfileNGO.html"
}

function update(){
  let OldPassword=document.getElementById('OldPassword').value;
  let NewPassword=document.getElementById('NewPassword').value;
  let header=new Headers()
  header.append("authorization","Bearer:"+localStorage.getItem("token"))
  header.append("content-type" , "application/json")
  fetch("http://localhost:3000/ngo/password",{
    method:"PUT",
    headers:header,
    body:JSON.stringify({new_password:NewPassword,old_password:OldPassword})
  }).then(res=>res.json()).then(data=>{
    if(!data.state){
      show_dialog('Old Password Falied !',"red")
      
    }else{
      window.location="../NGO/ProfileNGO.html"
    }
  })

}
ok.addEventListener("click",e=>{
  dialog.style.display="none"

})
function show_dialog(msg,color){
  document.getElementById("msg").innerText=msg
  dialog.style.display="block"
  document.getElementById("msg").style.color=color

}
function check_passwprd(new_pass,conf_pass,old_pass){
let OF=0
if((new_pass=='')&&(conf_pass=='')){
show_dialog('Fields are empty. Please fill in','red')
}else{
OF++
}
if(new_pass!==conf_pass){
  show_dialog("field does not match",'red')
}else{
OF++
}

if(old_pass==''){
  show_dialog("Enter the old password",'red')

}else{
OF++
}
if(OF==3){
  return true
}

}

