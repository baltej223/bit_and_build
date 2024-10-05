function togglePasswordVisibility(id, toogleBtnId) {
    const passwordInput = document.getElementById(id);
    const toggleIcon = document.getElementById(toogleBtnId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.innerHTML = "&#128275;"; // Unlocked icon
    } else {
        passwordInput.type = "password";
        toggleIcon.innerHTML = "&#128274;"; // Locked icon
    }
}


function handleLogin() {
    // Handle login logic here
    alert("handleLogin() function is called");
}

function validate(pageNum) {
    switch (pageNum) {
        case 2:
            alert()
            break;
    }
}

function slideNext(pageNum) {
    // disappear previous page and show next page
    var prevPageNum = pageNum - 1;
    document.getElementById('page'+prevPageNum).style.display = 'none';
    document.getElementById('page'+pageNum).style.display = 'block';

    // update dots slider
    switch (pageNum) {
        case 2:
            document.getElementById('dot1').classList.remove("active");
            document.getElementById('dot1').classList.add("passed");
            document.getElementById('dot2').classList.add("active");
            //change btn
            document.getElementById('btn1').style.display = "none";
            document.getElementById('btn2').style.display = "block";
            //change caption
            document.getElementById('caption').innerHTML = '<strong>Step 2 of 3: </strong>Answer the Security Question. It will be used in case you forget your password in future.';
            break;
        case 3:
            document.getElementById('dot2').classList.remove("active");
            document.getElementById('dot2').classList.add("passed");
            document.getElementById('dot3').classList.add("active");
            //change btn
            document.getElementById('btn2').style.display = "none";
            document.getElementById('btn3').style.display = "block";
            //change caption
            document.getElementById('caption').innerHTML = '<strong>Step 3 of 3: </strong>Enter your college name and passing year.';
            break;
    }


}
