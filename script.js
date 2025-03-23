function showMessage() {
    let userName = prompt("What's your name?");
    if (userName) {
        alert("Hello," + userName + "! Welcome to my website.");  
    } else {
        alert("Hello,Guest! Welcome to my website. ")
    }
}