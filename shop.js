let cloths=document.getElementById("cloths");
let review=document.getElementById("review");
let contacts=document.getElementById("contacts");
let blogs=document.getElementById("blogs");

cloths.addEventListener("click",function(){
    cloths.style.color="red";
    review.style.color="black";
    contacts.style.color="black";
    blogs.style.color="black";
})
review.addEventListener("click",function(){
    cloths.style.color="black";
    review.style.color="red";
    contacts.style.color="black";
    blogs.style.color="black";
})
blogs.addEventListener("click",function(){
    cloths.style.color="black";
    review.style.color="black";
    contacts.style.color="black";
    blogs.style.color="red";
})
contacts.addEventListener("click",function(){
    cloths.style.color="black";
    review.style.color="black";
    contacts.style.color="red";
    blogs.style.color="black";
})

let login = document.getElementById("login");

login.addEventListener("click",function(){

    let loginpage = document.querySelector(".loginpage").style;
    if(loginpage.display==='block'){
        loginpage.display='none' 
    }else{
        loginpage.display='block' 
    }
})

let loged = document.getElementById("loged");

loged.addEventListener("click",function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
        if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Passwaord")
        }else{
        alert("You Loged In")
        document.querySelector(".loginpage").style.display="none";
        }
})

let submit = document.getElementById("submit");
submit.addEventListener("click",function(){
    //console.log("Aa");
    let name = document.getElementById("name");
    let pass = document.getElementById("pass");

    console.log(name.value)
    if(name.value == "" || pass.value == ""){
        alert("Please Enter Name and Passwaord")
    }else if (name.value == "" && pass.value == ""){
        alert("Thanks for connecting")
    }
})