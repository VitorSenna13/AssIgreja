// Função para passar imagens com a seta direita

function seta_direita(){
    const label1 = document.querySelectorAll(".labels label[for=radio1]");
    const label2 = document.querySelectorAll('.labels label[for=radio2]');
    const label3 = document.querySelectorAll('.labels label[for=radio3]');
    const label4 = document.querySelectorAll('.labels label[for=radio4]');
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const radio3 = document.getElementById('radio3');
    const radio4 = document.getElementById('radio4');

    const efeito_carro = document.querySelectorAll('.carousel img');

    if (radio1.checked == true) {

        radio2.checked = true;

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "#FFFFFF";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "-200vw"
    }

    else if (radio2.checked == true) {

        radio3.checked = true;

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "#FFFFFF";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "-400vw"
    }

    else if (radio3.checked == true) {
        radio4.checked = true;

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "#FFFFFF";

        efeito_carro[0].style.marginLeft = "-600vw"
    }

    else if (radio4.checked == true) {
        radio1.checked = true;

        label1[0].style.backgroundColor = "#FFFFFF";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "0px"
    }
}

// Fim da Função para passar imagens com a seta direita


// Função para passar imagens com a seta esquerda

function seta_esquerda(){
    const label1 = document.querySelectorAll(".labels label[for=radio1]");
    const label2 = document.querySelectorAll('.labels label[for=radio2]');
    const label3 = document.querySelectorAll('.labels label[for=radio3]');
    const label4 = document.querySelectorAll('.labels label[for=radio4]');
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const radio3 = document.getElementById('radio3');
    const radio4 = document.getElementById('radio4');

    const efeito_carro = document.querySelectorAll('.carousel img');

    if (radio1.checked == true) {

        radio4.checked = true;

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "#FFFFFF";

        efeito_carro[0].style.marginLeft = "-600vw"
    }

    else if (radio2.checked == true) {

        radio1.checked = true;

        label1[0].style.backgroundColor = "#FFFFFF";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "0px"
    }

    else if (radio3.checked == true) {
        radio2.checked = true;

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "#FFFFFF";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "-200vw"
    }

    else if (radio4.checked == true) {
        radio3.checked = true;

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "#FFFFFF";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "-400vw"
    }
}

// Fim da Função para passar imagens com a seta esquerda


// Funções do tempo para Passar as imagens (Contador) 

let contador = 1;

setInterval(function () {
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const radio3 = document.getElementById('radio3');
    const radio4 = document.getElementById('radio4');

    if (radio1.checked == true){
        contador = 1;
    }
    
    if (radio2.checked == true){
        contador = 2;
    }
    
    if (radio3.checked == true){
        contador = 3;
    }
    
    if (radio4.checked == true){
        contador = 4;
    }

    passar_image();

}, 10000)

function passar_image() {
    const label1 = document.querySelectorAll(".labels label[for=radio1]");
    const label2 = document.querySelectorAll('.labels label[for=radio2]');
    const label3 = document.querySelectorAll('.labels label[for=radio3]');
    const label4 = document.querySelectorAll('.labels label[for=radio4]');
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const radio3 = document.getElementById('radio3');
    const radio4 = document.getElementById('radio4');
    
    const efeito_carro = document.querySelectorAll('.carousel img');
    
    contador++;

    if (contador > 4){
        contador = 1;
    }
    
    document.getElementById('radio' + contador).checked = true;
    
    if (radio1.checked == true) { 
        
        label1[0].style.backgroundColor = "#FFFFFF";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "0px"
    }

    else if (radio2.checked == true) {

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "#FFFFFF";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "-200vw"
    }

    else if (radio3.checked == true) {

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "#FFFFFF";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "-400vw"
    }

    else if (radio4.checked == true) {

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "#FFFFFF";

        efeito_carro[0].style.marginLeft = "-600vw"
    }
}

// Fim das Funções do Contador


// Função de click: label for="radio1"

function mudar_carousel1() {
    const label1 = document.querySelectorAll(".labels label[for=radio1]");
    const label2 = document.querySelectorAll('.labels label[for=radio2]');
    const label3 = document.querySelectorAll('.labels label[for=radio3]');
    const label4 = document.querySelectorAll('.labels label[for=radio4]');
    const radio1 = document.getElementById('radio1');

    const efeito_carro = document.querySelectorAll('.carousel img');

    radio1.checked = true;

    if (radio1.checked == true) {

        label1[0].style.backgroundColor = "#FFFFFF";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "0px"

    }
}

// Fim da Função de click: label for="radio1"


// Função de click: label for="radio2"

function mudar_carousel2() {
    const label1 = document.querySelectorAll(".labels label[for=radio1]");
    const label2 = document.querySelectorAll('.labels label[for=radio2]');
    const label3 = document.querySelectorAll('.labels label[for=radio3]');
    const label4 = document.querySelectorAll('.labels label[for=radio4]');
    const radio2 = document.getElementById('radio2');

    const efeito_carro = document.querySelectorAll('.carousel img');

    radio2.checked = true;

    if (radio2.checked == true) {

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "#FFFFFF";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "-200vw"

    }
}

// Fim da Função de click: label for="radio2"


// Função de click: label for="radio3"

function mudar_carousel3() {
    const label1 = document.querySelectorAll(".labels label[for=radio1]");
    const label2 = document.querySelectorAll('.labels label[for=radio2]');
    const label3 = document.querySelectorAll('.labels label[for=radio3]');
    const label4 = document.querySelectorAll('.labels label[for=radio4]');
    const radio3 = document.getElementById('radio3');

    const efeito_carro = document.querySelectorAll('.carousel img');

    radio3.checked = true;

    if (radio3.checked == true) {

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "#FFFFFF";
        label4[0].style.backgroundColor = "transparent";

        efeito_carro[0].style.marginLeft = "-400vw"
    }
}

// Fim da Função de click: label for="radio3"


// Função de click: label for="radio4"

function mudar_carousel4() {
    const label1 = document.querySelectorAll(".labels label[for=radio1]");
    const label2 = document.querySelectorAll('.labels label[for=radio2]');
    const label3 = document.querySelectorAll('.labels label[for=radio3]');
    const label4 = document.querySelectorAll('.labels label[for=radio4]');
    const radio4 = document.getElementById('radio4');

    const efeito_carro = document.querySelectorAll('.carousel img');

    radio4.checked = true;

    if (radio4.checked == true) {

        label1[0].style.backgroundColor = "transparent";
        label2[0].style.backgroundColor = "transparent";
        label3[0].style.backgroundColor = "transparent";
        label4[0].style.backgroundColor = "#FFFFFF";

        efeito_carro[0].style.marginLeft = "-600vw"

    }
}

// Fim da Função de click: label for="radio4"


