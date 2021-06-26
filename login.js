function getTime(){
    var now= new Date();
    var nowMinutes =now.getMinutes() <10 ? "0"+now.getMinutes() :now.getMinutes()    
    var nowTime = now.getHours()>12 ? now.getHours()-12+":"+nowMinutes : now.getHours()+":"+nowMinutes ; 
    var clock = document.getElementById("time");
    clock.innerHTML = nowTime;
}

function checkForm(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username.value==""){
        alert("ID를 입력해주세요.");
        username.focus();
        return false;
    }else if(password.value==""){
        alert("PASSWORD를 입력해주세요.");
        password.focus();
        return false;
    }else{
        localStorage.setItem("username",username.value.trim());
        localStorage.setItem("password",password.value.trim());
        return true;
    } 
}

window.onload = function(){
    getTime();
}
