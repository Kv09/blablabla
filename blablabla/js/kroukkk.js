var i = 0;
var op = 0;

function suivant() {
    if (i % 3 == 0) {
        $('.un').fadeTo("slow", 0);
        $('.deux').fadeTo("slow", 1);
    }
    if (i % 3 == 1) {
        $('.deux').fadeTo("slow", 0);
        $('.trois').fadeTo("slow", 1);
    }
    if (i % 3 == 2) {
        $('.trois').fadeTo("slow", 0);
        $('.un').fadeTo("slow", 1);
    }
    i++;
};

function retour() {
    i--;
    if (i == -1) {
        i = 2;
    }
    if (i % 3 == 0) {
        $('.un').fadeTo("slow", 1);
        $('.deux').fadeTo("slow", 0);
    }
    if (i % 3 == 1) {
        $('.deux').fadeTo("slow", 1);
        $('.trois').fadeTo("slow", 0);
    }
    if (i % 3 == 2) {
        $('.trois').fadeTo("slow", 1);
        $('.un').fadeTo("slow", 0);
    }
};

function hover_suivant() {
    $('.suivant').attr("src", "../img/suivant_hover.png");
};

function hover_suivant_out() {
    $('.suivant').attr("src", "../img/suivant.png");
};

function hover_retour() {
    $('.retour').attr("src", "../img/retour_hover.png");
};

function hover_retour_out() {
    $('.retour').attr("src", "../img/retour.png");
};
