let loginForm = document.getElementById("LoginForm");
let RegisterForm = document.getElementById("RegisterForm");
let hl = document.getElementById("indicator");
let spans = document.getElementsByClassName("idclassforclick");
let onRegister = true;


for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click', function(){
    moveItems()
    })

}




function moveItems() {
    if (onRegister) {
        // hl.style.transform -= 100
        console.log("hifunction");
        onRegister = true;
    }
}