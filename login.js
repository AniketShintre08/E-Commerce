// let username = document.querySelectorAll("input")[0];
// let pass = document.querySelectorAll("input")[1];
// let form = document.querySelector("form");
// let euser = document.getElementById("uname");
// let epass = document.getElementById("upass");
// let ebtn = document.getElementById("btn");
// let storage = JSON.parse(localStorage.getItem("data"));
// // form.addEventListener("submit",(e)=>{
// //     if(username.value=="" && pass.value==""){
// //         // alert("Enter useraname or password..");
// //     } 
// //     else if(username.value==""){
// //         // alert("Enter the username");
// //     }
// //     else if( pass.value==""){
// //         // alert("Enter the password");
// //     } 
// //     else if(username.value=="aniket" && pass.value=="1234"){
// //         alert("loged in successfully..");
// //     }
// //     else{
// //         // alert("wrong password..");
// //     }
// // });

// form.addEventListener("submit", (e) => {
//     euser.innerHTML="";
//     ebtn.innerHTML="";
//     epass.innerHTML="";

//     let oneUser=storage.find(
//         (e)=>{
//             if ((e.userNum==username.value && e.userPass==pass.value) || (e.userEmail==username.value && e.userPass==pass.value)) {
//                 return e;
//             }
//         }
//     );
   

//     if (username.value == "" && pass.value == "") {
//         e.preventDefault();
//         euser.innerHTML = "Enter useraname.";
//         epass.innerHTML = "Enter the password"
//     } else if (username.value == "") {
//         e.preventDefault();
//         euser.innerHTML = "Enter useraname.";
//     } else if (pass.value == "") {
//         e.preventDefault();
//         epass.innerHTML = "Enter password.";
//     } 
//     else if(oneUser){
//         localStorage.setItem("oneUser",JSON.stringify(oneUser));
//        alert( "boss!!! welcome to the page...");
//     }  
//     else {
//         alert("match not found.");
//     }

// })


let username = document.querySelectorAll("input")[0];
let pass = document.querySelectorAll("input")[1];
let form = document.querySelector("form");
let euser = document.getElementById("uname");
let epass = document.getElementById("upass");
let ebtn = document.getElementById("btn");
let storage = JSON.parse(localStorage.getItem("data"));



// console.log(username, pass, form, euser, epass, ebtn, storage);


form.addEventListener("submit", (e) => {
    euser.innerHTML="";
    ebtn.innerHTML="";
    epass.innerHTML="";

    let oneUser=storage.find(
        (e)=>{
            if ((e.mobile==username.value && e.password==pass.value) || (e.mail==username.value && e.password==pass.value)) {
                return e;
            }
        }
    );
   

    if (username.value == "" && pass.value == "") {
        e.preventDefault();
        euser.innerHTML = "Enter useraname.";
        epass.innerHTML = "Enter the password"
    } else if (username.value == "") {
        e.preventDefault();
        euser.innerHTML = "Enter useraname.";
    } else if (pass.value == "") {
        e.preventDefault();
        epass.innerHTML = "Enter password.";
    } 
    else if(oneUser){
        alert("logged in successfully");
        // e.preventDefault();
        localStorage.setItem("oneUser",JSON.stringify(oneUser));
    }  
    else {
        e.preventDefault();
        alert("match not found.");
    }

})

let h3=document.querySelector("h3");
h3.addEventListener("click", ()=>{
    if (h3.innerHTML=="show") {
        pass.type="text";
        h3.innerHTML="hide";
    }else{
        h3.innerHTML="show";
        pass.type="password";
    }
})