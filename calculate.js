function calculate() {
    warning_reset();

    let a = document.getElementById('ValueX').value;
    let b = document.getElementById('ValueY').value;
    let c = document.getElementById('ValueZ').value;

    if (a != '' && b != '' && c != '') {

        let s = ((parseFloat(a) + parseFloat(b) + parseFloat(c)) / 2);
        let feet = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        let marla = feet / 272.251;
        let kanal = feet / 5445;
        let acre = feet / 43560;

        if (isNaN(feet)) {
            warning();
            answers_reset();
            return 0;
        }

        let a1 = feet.toFixed(3);
        let a2 = marla.toFixed(3);
        let a3 = kanal.toFixed(3);
        let a4 = acre.toFixed(3);

        document.getElementById('ans1').innerHTML = a1;
        document.getElementById('ans2').innerHTML = a2;
        document.getElementById('ans3').innerHTML = a3;
        document.getElementById('ans4').innerHTML = a4;
    }
}

function reset() {
    // Set Input Values to null
    document.getElementById('ValueX').value = '';
    document.getElementById('ValueY').value = '';
    document.getElementById('ValueZ').value = '';
    warning_reset();
    answers_reset();
}

function answers_reset() {
    document.getElementById('ans1').innerHTML = "0.000";
    document.getElementById('ans2').innerHTML = "0.000";
    document.getElementById('ans3').innerHTML = "0.000";
    document.getElementById('ans4').innerHTML = "0.000";

}

function warning() {
    document.getElementById('warn-box').style.marginTop = "2rem";
    document.getElementById('warn').style.background = "rgba(255, 193, 7, 0.50)";
    document.getElementById('warn').style.margin = "0.30rem";
    document.getElementById('warn').style.padding = "1.25rem";
    document.getElementById('warning').innerHTML = 'One side is bigger than the other two combined';
}

function warning_reset() {
    document.getElementById('warn-box').style.marginTop = "0";
    document.getElementById('warn').style.background = "none";
    document.getElementById('warn').style.margin = "0";
    document.getElementById('warn').style.padding = "0";
    document.getElementById('warning').innerHTML = "";
}