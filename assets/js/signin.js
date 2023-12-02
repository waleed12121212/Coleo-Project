let userName=document.querySelector("#userName");
let password=document.querySelector("#userPassword");
let loginPage=document.querySelector("#loginpage");
let openLogin=document.querySelector("#openLogin");
let loginSpace=document.querySelector("#loginSpace");
let Login=document.querySelector("#Login");
let closed=document.querySelector("#close");
//----------------------------
//=================================================================
openLogin.addEventListener("click",function(){
    loginPage.classList.remove("d-none");
    loginPage.classList.add("d-flex");
});
closed.addEventListener("click",function(){
    loginPage.classList.remove("d-flex");
    loginPage.classList.add("d-none");
});   
loginPage.addEventListener("click",function(){
    loginPage.classList.remove("d-flex");
    loginPage.classList.add("d-none");
});   
loginSpace.addEventListener("click", function (e) {
    e.stopPropagation();
});

//=================================================================

Login.addEventListener("click", function (e) {
    let notFound = false;
    let usernameNotFound = false;
    let user=JSON.parse(localStorage.getItem("users"));
    for(let i=0; i<user.length; i++){
        if(user[i].userName==userName.value) {
         usernameNotFound=false;
         if( user[i].password==password.value){
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
                title: `hello ${userName.value}`
            })
            break;
         }
         else{
            notFound=true;
         }
         break;
        }
        else{
            usernameNotFound=true;
        }
    }
    if(notFound==true){
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
            icon: 'error',
            title: 'Password Error'
        })
    }
    if(usernameNotFound==true){
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
            icon: 'error',
            title: 'User name not found'
        })
    }
    

});