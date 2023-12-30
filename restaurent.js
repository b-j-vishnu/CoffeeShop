let amount = 0;
let order = document.querySelector('.clic');
let tab = document.querySelector('.tab');
order.addEventListener('click', () => {
    tab.classList.toggle('.tab')

    let trh = document.createElement('tr');
    trh.id = "trowhead";
    document.querySelector('thead').appendChild(trh);

    let th1 = document.createElement('th');

    th1.innerHTML = "PRODUCT";
    document.getElementById('trowhead').appendChild(th1);
    let th2 = document.createElement('th');
    th2.innerHTML = "RATE";
    document.getElementById('trowhead').appendChild(th2);
    let th3 = document.createElement('th');
    th3.innerHTML = "QUANTITY";
    document.getElementById('trowhead').appendChild(th3);
    let th4 = document.createElement('th');
    th4.innerHTML = "RS";
    document.getElementById('trowhead').appendChild(th4)

    let espr = document.getElementById('espr');
    if (espr.checked) {
        let tr1 = document.createElement('tr');
        tr1.id = "row1";
        document.querySelector('tbody').appendChild(tr1);

        let trd1 = document.createElement('td');
        document.getElementById('row1').appendChild(trd1);
        trd1.innerHTML = "Espresso";

        let trd2 = document.createElement('td');
        document.getElementById('row1').appendChild(trd2);
        trd2.innerHTML = "3.25";

        let trd3 = document.createElement('td');
        document.getElementById('row1').appendChild(trd3);
        trd3.innerHTML = document.getElementById('esp').value;


        let trd4 = document.createElement('td');
        document.getElementById('row1').appendChild(trd4);
        let tot1 = 3.25 * Number(document.getElementById('esp').value);
        trd4.innerHTML = tot1;
        amount += tot1;
    }
    let cappu = document.getElementById('cappuc');
    if (cappu.checked) {
        let tr2 = document.createElement('tr');
        tr2.id = "row2";
        document.querySelector('tbody').appendChild(tr2);

        let trd1 = document.createElement('td');
        document.getElementById('row2').appendChild(trd1);
        trd1.innerHTML = "Cappuccino";

        let trd2 = document.createElement('td');
        document.getElementById('row2').appendChild(trd2);
        trd2.innerHTML = "4.00";

        let trd3 = document.createElement('td');
        document.getElementById('row2').appendChild(trd3);
        trd3.innerHTML = document.getElementById('cappu').value;


        let trd4 = document.createElement('td');
        document.getElementById('row2').appendChild(trd4);
        let tot2 = 4 * Number(document.getElementById('cappu').value);
        trd4.innerHTML = tot2;
        amount += tot2;
    }
    let ame = document.getElementById('ameri');
    if (ame.checked) {
        let tr3 = document.createElement('tr');
        tr3.id = "row3";
        document.querySelector('tbody').appendChild(tr3);

        let trd1 = document.createElement('td');
        document.getElementById('row3').appendChild(trd1);
        trd1.innerHTML = "Americano";

        let trd2 = document.createElement('td');
        document.getElementById('row3').appendChild(trd2);
        trd2.innerHTML = "3.25";

        let trd3 = document.createElement('td');
        document.getElementById('row3').appendChild(trd3);
        trd3.innerHTML = document.getElementById('ame').value;


        let trd4 = document.createElement('td');
        document.getElementById('row3').appendChild(trd4);
        let tot3 = 3.25 * Number(document.getElementById('ame').value);
        trd4.innerHTML = tot3;
        amount += tot3;
    }
    let latte = document.getElementById('latteee');
    if (latte.checked) {
        let tr4 = document.createElement('tr');
        tr4.id = "row4";
        document.querySelector('tbody').appendChild(tr4);

        let trd1 = document.createElement('td');
        document.getElementById('row4').appendChild(trd1);
        trd1.innerHTML = "Latte";

        let trd2 = document.createElement('td');
        document.getElementById('row4').appendChild(trd2);
        trd2.innerHTML = "4.70";

        let trd3 = document.createElement('td');
        document.getElementById('row4').appendChild(trd3);
        trd3.innerHTML = document.getElementById('latte').value;


        let trd4 = document.createElement('td');
        document.getElementById('row4').appendChild(trd4);
        let tot4 = 4.70 * Number(document.getElementById('latte').value);
        trd4.innerHTML = tot4;
        amount += tot4;
    }

    let mocha = document.getElementById('mochaa');
    if (mocha.checked) {
        let tr5 = document.createElement('tr');
        tr5.id = "row5";
        document.querySelector('tbody').appendChild(tr5);

        let trd1 = document.createElement('td');
        document.getElementById('row5').appendChild(trd1);
        trd1.innerHTML = "Mocha";

        let trd2 = document.createElement('td');
        document.getElementById('row5').appendChild(trd2);
        trd2.innerHTML = "5.25";

        let trd3 = document.createElement('td');
        document.getElementById('row5').appendChild(trd3);
        trd3.innerHTML = document.getElementById('mocha').value;


        let trd4 = document.createElement('td');
        document.getElementById('row5').appendChild(trd4);
        let tot5 = 5.25 * Number(document.getElementById('mocha').value);
        trd4.innerHTML = tot5;
        amount += tot5;
    }


    let hot = document.getElementById('hotc');
    if (hot.checked) {
        let tr6 = document.createElement('tr');
        tr6.id = "row6";
        document.querySelector('tbody').appendChild(tr6);

        let trd1 = document.createElement('td');
        document.getElementById('row6').appendChild(trd1);
        trd1.innerHTML = "Hot Chocolate";

        let trd2 = document.createElement('td');
        document.getElementById('row6').appendChild(trd2);
        trd2.innerHTML = "4.30";

        let trd3 = document.createElement('td');
        document.getElementById('row6').appendChild(trd3);
        trd3.innerHTML = document.getElementById('hot').value;


        let trd4 = document.createElement('td');
        document.getElementById('row6').appendChild(trd4);
        let tot6 = 4.30 * Number(document.getElementById('hot').value);
        trd4.innerHTML = tot6;
        amount += tot6;
    }
    let cold = document.getElementById('coldb');
    if (cold.checked) {
        let tr7 = document.createElement('tr');
        tr7.id = "row7";
        document.querySelector('tbody').appendChild(tr7);

        let trd1 = document.createElement('td');
        document.getElementById('row7').appendChild(trd1);
        trd1.innerHTML = "Cold Brew";

        let trd2 = document.createElement('td');
        document.getElementById('row7').appendChild(trd2);
        trd2.innerHTML = "4.00";

        let trd3 = document.createElement('td');
        document.getElementById('row7').appendChild(trd3);
        trd3.innerHTML = document.getElementById('cold').value;


        let trd4 = document.createElement('td');
        document.getElementById('row7').appendChild(trd4);
        let tot7 = 4 * Number(document.getElementById('cold').value);
        trd4.innerHTML = tot7;
        amount += tot7;
    }
    document.getElementById('total').innerHTML = "Total";
    document.getElementById('amt').innerHTML = amount;
    order.disabled = true;
})
let menu = document.querySelector('.menu')
let menuslist = document.querySelector('nav ul')
menu.addEventListener('click', () => {
    menuslist.classList.toggle('showmenu')
})