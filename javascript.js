function semana() {
    var s1 = document.getElementById("sem1").value || 0;
    var s2 = document.getElementById("sem2").value || 0;
    var s3 = document.getElementById("sem3").value || 0;
    var s4 = document.getElementById("sem4").value || 0;

    var sum = (Number(s1) + Number(s2) + Number(s3) + Number(s4));

    var sum_sem = document.getElementById("sum_sem").innerText = sum;
    var uf = 8;
    var valoruf = document.getElementById("uf").innerText;
    var valor = (uf * valoruf) * sum;
    document.getElementById("monto").innerText = Math.round(valor).toLocaleString("de-DE", 1);
}

function onLoad() {
    fetch('https://mindicador.cl/api/uf/')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("uf").innerText = data["serie"][0].valor;

        });
}

function login() {
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(function () {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
        })
        .catch(function (error) {
            // Some error occurred, you can inspect the code: error.code
            console.log(error.code);
        });
}