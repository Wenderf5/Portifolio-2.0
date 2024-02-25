var one = document.getElementById("1");
var oner = one.dataset.aberto;
var two = document.getElementById("2");
var twor = two.dataset.aberto;
var three = document.getElementById("3");
var threer = three.dataset.aberto;
var ha = document.getElementById("1h");
var har = ha.dataset.aberto;
var hb = document.getElementById("2h");
var hbr = hb.dataset.aberto;
var ht = document.getElementById("3h");
var htr = ht.dataset.aberto;
var hz = document.getElementById("4h");
var hzr = hz.dataset.aberto;
var hj = document.getElementById("5h");
var hjr = hj.dataset.aberto;
var hk = document.getElementById("6h");
var hkr = hk.textContent;
var jk = document.getElementById("7h");
var jkr = jk.dataset.aberto;
var jt = document.getElementById("8h");
var jtr = jk.dataset.aberto;
var ji = document.getElementById("9h");
var jir = jk.dataset.aberto;
var jl = document.getElementById("10h");
var jlr = jk.dataset.aberto;
function ax1() {
    if (oner == "1" &&
        twor == "2" &&
        threer == "3") {
        oner = "3"
        twor = "1"
        threer = "2"
    } else if (
        oner == "3" &&
        twor == "1" &&
        threer == "2") {
        oner = "2"
        twor = "3"
        threer = "1"
    } else if (
        oner == "2" &&
        twor == "3" &&
        threer == "1") {
        oner = "1"
        twor = "2"
        threer = "3"
    }
    one.dataset.aberto = oner;
    two.dataset.aberto = twor;
    three.dataset.aberto = threer;
}
function ax2() {
    if (oner == "1" &&
        twor == "2" &&
        threer == "3") {
        oner = "2"
        twor = "3"
        threer = "1"
    } else if (
        oner == "2" &&
        twor == "3" &&
        threer == "1") {
        oner = "3"
        twor = "1"
        threer = "2"
    } else if (
        oner == "3" &&
        twor == "1" &&
        threer == "2") {
        oner = "1"
        twor = "2"
        threer = "3"
    }
    one.dataset.aberto = oner;
    two.dataset.aberto = twor;
    three.dataset.aberto = threer;
}
function ax3() {
    if (har == "close" &&
        hbr == "close" &&
        htr == "close" &&
        hzr == "close" &&
        hjr == "close" &&
        jtr == "close" &&
        jir == "close" &&
        jlr == "close" &&
        hkr == "Ver mais") {
        har = "open"
        hbr = "open"
        htr = "open"
        hzr = "open"
        hjr = "open"
        jtr = "open"
        jir = "open"
        jlr = "open"
        hkr = "Ver menos"
    } else if
        (har == "open" &&
        hbr == "open" &&
        htr == "open" &&
        hzr == "open" &&
        hjr == "open" &&
        jtr == "open" &&
        jir == "open" &&
        jlr == "open" &&
        hkr == "Ver menos") {
        har = "close"
        hbr = "close"
        htr = "close"
        hzr = "close"
        hjr = "close"
        jtr = "close"
        jir = "close"
        jlr = "close"
        hkr = "Ver mais"
    }
    ha.dataset.aberto = har;
    hb.dataset.aberto = hbr;
    ht.dataset.aberto = htr;
    hz.dataset.aberto = hzr;
    hj.dataset.aberto = hjr;
    jt.dataset.aberto = jtr;
    ji.dataset.aberto = jir;
    jl.dataset.aberto = jlr;
    hk.textContent = hkr;
}
function ax4() {
    if (jkr == "close") {
        jkr = "open"
    } else if (jkr == "open") {
        jkr = "close"
    }
    jk.dataset.aberto = jkr;
}