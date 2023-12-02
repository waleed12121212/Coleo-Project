let firstName=document.querySelector("#fname");
let lastName=document.querySelector("#lname");
let email=document.querySelector("#Email");
let userName=document.querySelector("#userName");
let password=document.querySelector("#password");
let creatAccount=document.querySelector("#creatAccount");
let inputs=document.querySelectorAll(".inputs");
let nameErrorFname=document.querySelector(".nameErrorFname");
let nameErrorLname=document.querySelector(".nameErrorLname");
let nameErrorEmail=document.querySelector(".nameErrorEmail");
let nameErrorUname=document.querySelector(".nameErrorUname");
let nameErrorPassword=document.querySelector(".nameErrorPassword");
var isfNameTrue=false;
var islNameTrue=false;
var isEmailTrue=false;
var isPasswordTrue=false;
var isUserNameTrue=false;
let users=[]; 
if(JSON.parse(localStorage.getItem("users"))!=null){   
    users=JSON.parse(localStorage.getItem("users"));
    console.log(users); 
}
creatAccount.addEventListener("click",function(e){
    e.preventDefault();
    createAccount();
    clearInputs();
});
function createAccount(){
    let User={
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        userName:userName.value,
        password:password.value
    }
    users.push(User);
    localStorage.setItem("users",JSON.stringify(users));
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Account Created Successfully'
    })
}
function clearInputs(){
    for(let i=0; i<inputs.length; i++){
        inputs[i].value='';
    }
}

firstName.addEventListener("keyup",function(e){
    const pattern =/^[A-Z][a-z]{3,10}$/;

    if(pattern.test(firstName.value)){
        if(firstName.classList.contains("is_invalid")){
            firstName.classList.remove("is_invalid");
            firstName.classList.add("is_valid");
        }
        firstName.classList.add("is_valid");
        nameErrorFname.style.cssText='display:none';
        isfNameTrue=true;
    }else{
        if(firstName.classList.contains("is_valid")){
            firstName.classList.remove("is_valid");
            firstName.classList.add("is_invalid");
        }
        firstName.classList.add("is_invalid");
        nameErrorFname.style.cssText='display:block';
        isfNameTrue=false;
    }
    if(!isPasswordTrue && !isEmailTrue && !isfNameTrue && !islNameTrue && !isUserNameTrue){
        creatAccount.removeAttribute('disabled');
    }
    else{
        creatAccount.setAttribute('disabled', 'disabled');
    }
});
lastName.addEventListener("keyup",function(e){
    const pattern =/^[A-Z][a-z]{3,10}$/;

    if(pattern.test(lastName.value)){
        if(lastName.classList.contains("is_invalid")){
            lastName.classList.remove("is_invalid");
            lastName.classList.add("is_valid");
        }
        lastName.classList.add("is_valid");
        nameErrorLname.style.cssText='display:none';
        islNameTrue=true;
    }else{
        if(lastName.classList.contains("is_valid")){
            lastName.classList.remove("is_valid");
            lastName.classList.add("is_invalid");
        }
        lastName.classList.add("is_invalid");
        nameErrorLname.style.cssText='display:block';
        islNameTrue=false;
    }
    if(!isPasswordTrue && !isEmailTrue && !isfNameTrue && !islNameTrue && !isUserNameTrue){
        creatAccount.removeAttribute('disabled');
    }
    else{
        creatAccount.setAttribute('disabled', 'disabled');
    }
});
email.addEventListener("keyup",function(e){
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(pattern.test(email.value)){
        if(email.classList.contains("is_invalid")){
            email.classList.remove("is_invalid");
            email.classList.add("is_valid");
        }
        email.classList.add("is_valid");
        nameErrorEmail.style.cssText='display:none';
        isEmailTrue=true;
    }else{
        if(email.classList.contains("is_valid")){
            email.classList.remove("is_valid");
            email.classList.add("is_invalid");
        }
        email.classList.add("is_invalid");
        nameErrorEmail.style.cssText='display:block';
        isEmailTrue=false;
    }
    if(!isPasswordTrue && !isEmailTrue && !isfNameTrue && !islNameTrue && !isUserNameTrue){
        creatAccount.removeAttribute('disabled');
    }
    else{
        creatAccount.setAttribute('disabled', 'disabled');
    }
});
userName.addEventListener("keyup",function(e){
    const pattern =/^[a-zA-Z0-9_]{3,20}$/;

    if(pattern.test(userName.value)){
        if(userName.classList.contains("is_invalid")){
            userName.classList.remove("is_invalid");
            userName.classList.add("is_valid");
        }
        userName.classList.add("is_valid");
        nameErrorUname.style.cssText='display:none';
        isUserNameTrue=true;
    }else{
        if(userName.classList.contains("is_valid")){
            userName.classList.remove("is_valid");
            userName.classList.add("is_invalid");
        }
        userName.classList.add("is_invalid");
        nameErrorUname.style.cssText='display:block';
        isUserNameTrue=false;
    }
    if(!isPasswordTrue && !isEmailTrue && !isfNameTrue && !islNameTrue && !isUserNameTrue){
        creatAccount.removeAttribute('disabled');
    }
    else{
        creatAccount.setAttribute('disabled', 'disabled');
    }
});
password.addEventListener("keyup",function(e){
    const pattern =/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;

    if(pattern.test(password.value)){
        if(password.classList.contains("is_invalid")){
            password.classList.remove("is_invalid");
            password.classList.add("is_valid");
        }
        password.classList.add("is_valid");
        nameErrorPassword.style.cssText='display:none';
        isPasswordTrue=true;
    }else{
        if(password.classList.contains("is_valid")){
            password.classList.remove("is_valid");
            password.classList.add("is_invalid");
        }
        password.classList.add("is_invalid");
        nameErrorPassword.style.cssText='display:block';
        isPasswordTrue=false;
    }
    if(!(!isPasswordTrue && !isEmailTrue && !isfNameTrue && !islNameTrue && !isUserNameTrue)){
        creatAccount.removeAttribute('disabled');
    }
    else{
        creatAccount.setAttribute('disabled', 'disabled');
    }
});