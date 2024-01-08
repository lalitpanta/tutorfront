 //  yo bata chai javascript ko part aayo let chai datatype ho

        // signin login form ko box interactive banaune kan garchha
        let signupbtn = document.getElementById("signupbtn");
        let signinbtn = document.getElementById("signinbtn");
        let namefield = document.getElementById("namefield");
        let title = document.getElementById("title");

// sign in ma click garda name hatera janxa
        signinbtn.onclick = function() {
            namefield.style.maxHeight="0";
            title.innerHTML="sign in";
            signupbtn.classlist.add("disable");
            signinbtn.classlist.remove("disable");
        }

        // signup ma click garda user name aauxa
        signupbtn.onclick = function() {
            namefield.style.maxHeight="60px";
            title.innerHTML="sign up";
            signupbtn.classlist.remove("disable");
            signinbtn.classlist.add("disable");
        }

        // yo sabbai popup button ko lagi 
        document.addEventListener("DOMContentLoaded", function () {
        let popupButton = document.getElementById("popupbotton");
        let popup = document.getElementById("popup");
        let closeButton = document.getElementById("closeButton");
        let loginForm = document.getElementById("loginForm");
    
        popupButton.addEventListener("click", function () {
            popup.style.display = "block";
        });
    // close button ma click garda login/signin page gayab hunchha
        closeButton.addEventListener("click", function () {
            popup.style.display = "none";
        });
    // window ma click garda pani login/signin page gayab hunchha
        window.addEventListener("click", function (event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    });




















    