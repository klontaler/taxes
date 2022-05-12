let buttonF = document.getElementById('buttonF');
let buttonS = document.getElementById('buttonS');
let buttonA = document.getElementById('buttonA');

let selectBS = document.getElementById('selectBS');
let selectCPR = document.getElementById('selectCPR');
let selectR = document.getElementById('selectR');

let disclaimerAside = document.getElementById('disclaimerAside');
let input = document.getElementById('input');
let firstBlock = document.getElementById('firstBlock');
let clarificationBlock = document.getElementById('clarificationsBlock')
let secondBlock = document.getElementById('secondBlock');
let preTaxSalaryText = document.getElementById('preTaxSalaryText');
let taxesText = document.getElementById('taxesText');

let width = document.documentElement.clientWidth;

let taxesPercent;
let salary;
let taxes;
let ndfl;
let PFR;
let OMS;
let VNiM;
let SoNS;
let preTaxSalary;
let CPR;

function secondBlockHiding() {
    secondBlock.style.display = 'none';
    clarificationBlock.style.display = 'none';
    buttonA.style.display = 'none';
    disclaimerAside.style.display = 'none';
}

function goToClarBlock() {
    firstBlock.style.display = 'none';
    clarificationBlock.style.display = '';
    input.innerHTML = '';
}

function goToLastBlock() {
    firstBlock.style.display = 'none';
    clarificationBlock.style.display = 'none';
    secondBlock.style.display = '';
    buttonA.style.display = '';
    disclaimerAside.style.display = '';
    if (width < 460) {
        disclaimerAside.style.display = 'none';
    }
}

function checkCPR() {
    let CPRValue;
    CPRValue = selectCPR.value;

    if (CPRValue == '1') {
        CPR = 0.2;
    }
    else if (CPRValue == '2') {
        CPR = 0.3;
    }
    else if (CPRValue == '3') {
        CPR = 0.4;
    }
    else if (CPRValue == '4') {
        CPR = 0.5;
    }
    else if (CPRValue == '5') {
        CPR = 0.6;
    }
    else if (CPRValue == '6') {
        CPR = 0.7;
    }
    else if (CPRValue == '7') {
        CPR = 0.8;
    }
    else if (CPRValue == '8') {
        CPR = 0.9;
    }
    else if (CPRValue == '9') {
        CPR = 1;
    }
    else if (CPRValue == '10') {
        CPR = 1.1;
    }
    else if (CPRValue == '11') {
        CPR = 1.2;
    }
    else if (CPRValue == '12') {
        CPR = 1.3;
    }
    else if (CPRValue == '13') {
        CPR = 1.4;
    }
    else if (CPRValue == '14') {
        CPR = 1.5;
    }
    else if (CPRValue == '15') {
        CPR = 1.7;
    }
    else if (CPRValue == '16') {
        CPR = 1.9;
    }
    else if (CPRValue == '17') {
        CPR = 2.1;
    }
    else if (CPRValue == '18') {
        CPR = 2.3;
    }
    else if (CPRValue == '19') {
        CPR = 2.5;
    }
    else if (CPRValue == '20') {
        CPR = 2.8;
    }
    else if (CPRValue == '21') {
        CPR = 3.1;
    }
    else if (CPRValue == '22') {
        CPR = 3.4;
    }
    else if (CPRValue == '23') {
        CPR = 3.7;
    }
    else if (CPRValue == '24') {
        CPR = 4.1;
    }
    else if (CPRValue == '25') {
        CPR = 4.5;
    }
    else if (CPRValue == '26') {
        CPR = 5;
    }
    else if (CPRValue == '27') {
        CPR = 5.5;
    }
    else if (CPRValue == '28') {
        CPR = 6.1;
    }
    else if (CPRValue == '29') {
        CPR = 6.7;
    }
    else if (CPRValue == '30') {
        CPR = 7.4;
    }
    else if (CPRValue == '31') {
        CPR = 8.1;
    }
    else if (CPRValue == '32') {
        CPR = 8.5;
    }
}


function ndflCalc() {
    // расчет НДФЛ
    let ResValue;
    ResValue = selectR.value;

    if (ResValue == 'yes') {
        if (salary * 12 < 5000000) {
            ndfl = salary * 0.13;
        }
        else {
            ndfl = salary * 0.15;
        }
    }

    else if (ResValue == 'no') {
        ndfl = salary * 0.3;
    }
}

function OPSCalc() {
    // расчет ОПС
    let BSValue;
    BSValue = selectBS.value;
    let OPSRate;
    if (BSValue == 'MSB') {
        OPSRate = 0.10;
        OPS = salary * OPSRate;
        return
    }

    else if (BSValue == 'IT') {
        OPSRate = 0.06;
        OPS = salary * OPSRate;
        return
    }

    if (salary * 12 < 1565000) {
        OPS = salary * 0.22;
    }
    else {
        OPS = (1565000/12 * 0.22) + (salary - 1565000/12) * 0.1;
    }
}

function VNiMCalc() {
    // расчет ВНиМ
    let BSValue;
    let VNiMRate;
    BSValue = selectBS.value;
    if (BSValue == 'BB') {
        VNiMRate = 0.029;
        if (salary * 12 < 1032000) {
            VNiM = salary * 0.029;
        }
        else {
            VNiM = 1032000/12 *0.029;
        }
        return
    }

    else if (BSValue == 'MSB') {
        VNiMRate = 0;
    }

    else if (BSValue == 'IT') {
        VNiMRate = 0.015;
        OPS = salary * VNiMRate;
    }
    VNiM = salary * VNiMRate;
}

function OMSCalc() {
    // расчет ОМС
    let BSValue;
    BSValue = selectBS.value;
    let OMSRate;

    if (BSValue == 'BB') {
        OMSRate = 0.051;
    }

    else if (BSValue == 'MSB') {
        OMSRate = 0.05;
    }

    else if (BSValue == 'IT') {
        OMSRate = 0.001;
    }
    
    OMS = salary * OMSRate;
}

function SoNSCalc() {
    checkCPR();
    // расчет СоНС
    SoNS = salary / 100 * CPR;
}

function taxesCalculator() {
    // Вызов расчета налогов по отдельности
    ndflCalc();
    OPSCalc();
    VNiMCalc();
    OMSCalc();
    SoNSCalc();
    console.log(ndfl + '=' + OMS + '=' + VNiM + '=' + OPS + '=' + SoNS)
    // Расчет полных сумм налогов
    taxes = ndfl + OMS + VNiM + OPS + SoNS; // Сумма налогов
    taxesPercent = taxes/salary*100; // Процент налога
    preTaxSalary = Number(salary) + Number(taxes); // Заработная плата до вычета налогов
}

function results() {
    preTaxSalaryText.innerHTML = preTaxSalary.toFixed(0);
    taxesText.innerHTML = taxes.toFixed(0) + '₽'  + ' ≈ ' + taxesPercent.toFixed(1)  + '%';
    taxesText.innerHTML = taxes.toFixed(0) + '₽'  + ' ≈ ' + taxesPercent.toFixed(1) + '%';
}

secondBlockHiding();

input.oninput = function() {
    salary = input.value;
}

buttonF.onclick = function() {
    goToClarBlock();
}

buttonS.onclick = function() {
    taxesCalculator();
    goToLastBlock();
    results();
}