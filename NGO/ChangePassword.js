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

      check_passwprd(NewPassword,ConfirmPassword,OldPassword)
 }
function goBack(){}

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
    if(data.s==false){
      show_dialog('Typed passwords do not match Please re - enter',"red")
    }else{
      show_dialog('Typed passwords do not match Please re - enter','green')
    
    }
  })

}
ok.addEventListener("click",e=>{
  dialog.style.display="none"

})
function show_dialog(msg,color){
  document.getElementById("msg").innerText=msg
  dialog.style.display="block"
  dialog.style.color=color

}
function check_passwprd(new_pass,conf_pass,old_pass){
if((new_pass=='')&&(conf_pass=='')){
show_dialog('Fields are empty. Please fill in','red')
}else{

}
if(new_pass!==conf_pass){
  show_dialog("One field does not match the other",'red')
}

if(old_pass==''){
  show_dialog("Enter the old password",'red')

}


}

