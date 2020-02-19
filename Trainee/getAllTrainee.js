const url = window.location.href;
console.log( getParameterByName("id", url));
function getParameterByName(name, url) {
    
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let div = document.getElementById("div1");
if(localStorage.getItem("token")==undefined){
    window.location="../Login/Login.html"
  
  }
   function LogOut() {
    localStorage.removeItem('token');
    window.location = "../Login/LogIn.html"
  }
  
let page = 1;
op();
window.addEventListener('scroll' , ()=>{
    let hh = document.documentElement.scrollHeight - window.innerHeight;
    let hamza = window.scrollY;
    if(Math.ceil(hamza) === hh) {
        op();
    }
});
function op() {
    let id=getParameterByName("id", url);
    console.log(id);
    fetch('http://localhost:3000/courses/trainee/' + id, {
        method: 'GET'
    }).then(re => {
        return re.json();
    }).then(data => {
        console.log(data)
        let trainee = data;
        console.log(trainee);
        page++
        for (let i = 0; i < 9; i++) {
            div.innerHTML +=   `<div id = ${trainee[i].id_trainee} class="list">
    <div id = ${trainee[i].id_trainee} class="im">
    </div><div id = ${trainee[i].id_trainee} class="im contnt desc">
    <h3 id = ${trainee[i].id_trainee} >${trainee[i].name} </h3>
    <p id = ${trainee[i].id_trainee} > ${trainee[i].email} </p>
    <p id = ${trainee[i].id_trainee} > ${trainee[i].address} </p>
    <p id = ${trainee[i].id_trainee} > ${trainee[i].mobile} </p>
    </div></div></a></div>`
        }
    });
    
} 