function setCookie(){
    const name = document.getElementById("name").value;
    const days = 7;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = "username=" + name + ";" + expires + ";path=/";
    displayWelcomeMessage();
}

function getCookie(name){
    const nameEQ = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiearray = decodedCookie.split(';');
    for(let i = 0; i < cookiearray.length; i++){
        let cookie = cookiearray[i];
        while(cookie.charAt(0) == ' '){
            cookie = cookie.substring(1);
        }
        if(cookie.indexOf(nameEQ) == 0){
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return '';
}

function displayWelcomeMessage(){
    const user = getCookie("username");
    const welcomeMessageDiv = document.getElementById("welcomeMessage");
    if (user != "") {
        welcomeMessageDiv.innerHTML = "Bem vindo de Volta," + user + "!";
    }else{
        welcomeMessageDiv.innerHTML = "";
    }
}

function deleteCookie(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    displayWelcomeMessage();
}

window.onload = displayWelcomeMessage;
