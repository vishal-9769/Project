export function login(){
    let username = document.getElementById("uname").value;
    let password = document.getElementById("pass").value;
    
    if(username.includes("admin") && password.includes("admin")){
        window.location.assign('/admindashboard')
    }
    
    if(username.includes("faculty") && password.includes("faculty")){
        window.location.assign('/facultydashboard')

    }
    
    if(username.includes("student") && password.includes("student")){
        window.location.assign('/stdhome')
        
    }
    }
    