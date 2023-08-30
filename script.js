function funksiya() {
    let message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if (x == "") {
            throw "Ismingizni kiriting";
        } else if (parseInt(x)) {
            throw "Raqam bo'lmasinda eee dscds sdsdsd!";
        }
    } catch (err) {
        message.innerHTML = err;
    }
}
