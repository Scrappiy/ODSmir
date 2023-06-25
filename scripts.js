
function obr1() {
    let a = "", b = "", c = "", d = "", res1 = "", res2 = "", Rx = 0, Px = 0;
    a = document.getElementById("max1").value;
    b = document.getElementById("min1").value;
    c = document.getElementById("C1").value;
    d = document.getElementById("X1").value;
    e = document.getElementById("ost1").value;
    if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "")) {
        alert(`ERROR!`);
    } else {
        let Xmas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        //  let Ymas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if ((d.length % 2) == 1) { d = d + " "; }

        for (let index = 0; index < (d.length / 2); index++) {
            res1 = d[2 * index] + d[2 * index + 1];
            Xmas[index] = +res1;
            Rx = index;
        }

        if ((e.length % 2) == 1) { e = e + " "; }

        Px = parseInt(a) - parseInt(b) + 1;
        for (let index = 0; index < Px; index++) {
            res1 = e[0] + e[1];
            Xmas[index + Rx + 1] = +res1;
        }

        res1 = "";
        res2 = "";

        for (let index = 0; index < (d.length / 2) + Px; index++) {
            res2 = Xmas[index];
            res1 = res1 + res2 + `<br>`;
        }
        Rx = 0;
        res1 = "";
        res2 = "";

        for (let index = 0; index < ((d.length / 2) + Px) - parseInt(a); index++) {

            for (let index1 = parseInt(b); index1 < parseInt(a) + 1; index1++) {
                if (index + index1 < 0) {
                    Rx = Rx + 0;
                } else {
                    Rx = Xmas[index + index1] + Rx;
                }
            }
            Rx = Rx * parseFloat(c);
            res1 = res1 + `y(` + (index + 1) + `)=` + Rx + `<br>`;
            Rx = 0;
        }

        document.getElementById("vvd1").innerHTML = res1;
    }
}

function obr2() {
    let a = "", b = "", c = "", d = "", res1 = "", res2 = "", Rx = 0, Px = 0;
    b = document.getElementById("b01").value;
    a = document.getElementById("a01").value;
    c = document.getElementById("Y1").value;
    d = document.getElementById("X2").value;
    e = document.getElementById("ost2").value;
    f = document.getElementById("ots").value;
    if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "")) {
        alert(`ERROR!`);
    } else {
        let Xmas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let Ymas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Ymas[0] = parseInt(c);

        if ((d.length % 2) == 1) { d = d + " "; }

        for (let index = 0; index < (d.length / 2); index++) {
            res1 = d[2 * index] + d[2 * index + 1];
            Xmas[index] = +res1;
            Rx = index;
        }

        if ((e.length % 2) == 1) { e = e + " "; }

        for (let index = 0; index < 2; index++) {
            res1 = e[0] + e[1];
            Xmas[index + Rx + 1] = +res1;
        }

        res1 = "";
        res2 = "";

        for (let index = 0; index < (d.length / 2) + parseInt(f); index++) {
            Px = b * Xmas[index] - a * Ymas[index];
            Ymas[index + 1] = Px;
            res1 = res1 + `y(` + (index + 1) + `)=` + Px + `<br>`;
        }


        document.getElementById("vvd2").innerHTML = res1;
    }
}

function obr3() {
    let a = "", b = "", c = "", d = "", res1 = "", res2 = "", Rx = 0, Px = 0;
    a = document.getElementById("Y2").value;
    b = document.getElementById("X4").value;
    d = document.getElementById("X3").value;
    c = document.getElementById("Y3").value;
    e = document.getElementById("ost3").value;
    if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "")) {
        alert(`ERROR!`);
    } else {
        let Xmas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let Ymas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Xmas[0] = parseInt(b);
        Ymas[0] = parseInt(a);
        if ((d.length % 2) == 1) { d = d + " "; }

        for (let index = 0; index < (d.length / 2); index++) {
            res1 = d[2 * index] + d[2 * index + 1];
            Xmas[index] = +res1;
            Rx = index;
        }

        if ((e.length % 2) == 1) { e = e + " "; }

        for (let index = 0; index < 2; index++) {
            res1 = e[0] + e[1];
            Xmas[index + Rx + 1] = +res1;
        }

        res1 = "";
        res2 = "";

        for (let index = 1; index < (d.length / 2) + 3; index++) {
            Px = (Xmas[index] + Xmas[index - 1]) / 2 + parseInt(c) * Ymas[index - 1];
            Ymas[index] = Px;
            res1 = res1 + `y(` + (index) + `)=` + Px + `<br>`;
        }

        document.getElementById("vvd3").innerHTML = res1;
    }
}

function obr4() {
    let a = "", b = "", res1 = "", res2 = "", Rx = 0, Px = 0, Tx = 0, Ty = 0;
    a = document.getElementById("Y4").value;
    b = document.getElementById("X5").value;
    if ((a == "") || (b == "")) {
        alert(`ERROR!`);
    } else {
        let Xmas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let Ymas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        if ((a.length % 2) == 1) { a = a + " "; }

        for (let index = 0; index < (a.length / 2); index++) {
            res1 = a[2 * index] + a[2 * index + 1];
            Ymas[index] = parseInt(res1);
        }
        res1 = "";
        for (let index = 0; index < (a.length / 2); index++) {
            res1 = b[2 * index] + b[2 * index + 1];
            Xmas[index] = parseInt(res1);
        }
        res1 = "";

        for (let index = 0; index < (a.length / 2); index++) {
            Rx = Rx + Xmas[index];
            Px = Px + Ymas[index];
        }
        Rx = Rx / (a.length / 2);
        Px = Px / (a.length / 2);
res2="Xср :"+ Rx + ",  Yср :" + Px;

        for (let index = 0; index < (a.length / 2); index++) {
            Tx = Tx + (Xmas[index] - Rx) * (Ymas[index] - Px);
            Ty = Ty + (Xmas[index] - Rx) * (Xmas[index] - Rx);
        }

        res2=res2 + `<br> ` + "Сумма отклонений по X: " + Tx + `<br>` +"Cумма отклонений по Y: " + Ty;

res1= Tx/Ty;
res1 = res2 +`<br>`+ "Коэффициент линейной регрессии :" + res1;

Rx = 0; 
Px = 0;
Tx = 0;
Ty = 0;


for (let index = 0; index < (a.length / 2); index++) {
    Rx = Rx + Xmas[index];
    Px = Px + Ymas[index];
    Tx=Tx+Xmas[index]*Xmas[index];
    Ty=Ty+Ymas[index]*Xmas[index];
}

b=((Px*Tx-Rx*Ty)/((a.length / 2)*Tx-Rx*Rx));
a=(((a.length / 2)*Ty-Px*Rx)/((a.length / 2)*Tx-Rx*Rx));

res1=res1 +`<br>`+ " a : " + a + ", b : " + b;

document.getElementById("vvd4").innerHTML =res1;
    }
}

function obr5(){
    let a = "", b = "", res1 = "", Rx = 0, Px = 0, Tx = 0, Ty = 0;
    let x1= 0,x2= 0,x3= 0,x4= 0,x5= 0, x6= 0;
    a = document.getElementById("Y5").value;
    b = document.getElementById("X6").value;
    if ((a == "") || (b == "")) {
        alert(`ERROR!`);
    } else {
        let Xmas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let Ymas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        if ((a.length % 2) == 1) { a = a + " "; }

        for (let index = 0; index < (a.length / 2); index++) {
            res1 = a[2 * index] + a[2 * index + 1];
            Ymas[index] = parseInt(res1);
        }
        res1 = "";
        for (let index = 0; index < (a.length / 2); index++) {
            res1 = b[2 * index] + b[2 * index + 1];
            Xmas[index] = parseInt(res1);
        }
        res1 = "";

        for (let index = 0; index < (a.length / 2); index++) {
            Rx = Rx + Xmas[index];
            Px = Px + Xmas[index]*Xmas[index];
            Tx=Tx+Math.log(Ymas[index]);
            Ty=Ty+Xmas[index]*Math.log(Ymas[index]);
        }

        res1 = "Сумма X = " + Rx +`<br>`+ "Сумма X^2 = "+ Px +`<br>`+ "Сумма ln(y) = " +Tx+`<br>`+ "Сумма xln(y) = " + Ty;

// Px + Rx = Ty
// Rx + n = Tx

x1=(Px*(a.length / 2)-Rx*Rx);

x2=(Ty*(a.length / 2)-Rx*Tx);

x3= (Px*Tx-Rx*Ty);

x4=x2/x1;
x5=x3/x1;
x6=Math.exp(x5);


res1=res1 +`<br>`+ "Определитель = " + x1 +`<br>`+ " a : " + x4 +`<br>`+ "exp(A) : " + x5 +`<br>`+" A = " + x6;

document.getElementById("vvd5").innerHTML =res1;
    }
}