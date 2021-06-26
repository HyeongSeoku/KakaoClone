function getTime(){
    var now= new Date();
    var nowMinutes =now.getMinutes() <10 ? "0"+now.getMinutes() :now.getMinutes()    
    var nowTime = now.getHours()>12 ? now.getHours()-12+":"+nowMinutes : now.getHours()+":"+nowMinutes ; 
    var clock = document.getElementById("time");
    clock.innerHTML = nowTime;
}

function getUserInfo(){
    var name = localStorage.getItem("username");
    var pwd = localStorage.getItem("password");
    document.getElementById("user-name-text").innerHTML = name ;
    
}

function friendsClick(){
    var friendsForm = document.getElementById("friends");
    var friendsName = document.getElementsByClassName("user-name")
    friendsForm.onclick=function(){
        console.log(`${this.friendsName}`);
    }
    
}

window.onload = function(){
    getTime();
    getUserInfo();
    friendsClick();
}
