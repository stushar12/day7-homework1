var para = document.createElement("p");
para.className = "para";
para.innerHTML = "CRICKET 10";
document.body.appendChild(para);
var div1 = document.createElement("div"); //main div
div1.className = "div1 row";
para.appendChild(div1);
var manipulate = /** @class */ (function () {
    function manipulate(i) {
        var a = document.createElement("div");
        a.className = "sub_div col-lg-3 col-sm-3";
        div1.appendChild(a);
        for (var j = 1; j <= 2; j++) {
            var b = document.createElement("div");
            b.className = "sub_div11 col-lg-12 col-sm-12";
            a.appendChild(b);
            if (j == 1)
                b.innerHTML = "TEAM " + i + " SCORE";
            else {
                b.innerHTML = "0";
                b.id = "team" + i + "score";
            }
        }
        var c = document.createElement("button");
        c.className = "sub_div1button col-lg-12 col-sm-12";
        a.appendChild(c);
        c.innerHTML = "HIT " + i;
        c.id = "HIT " + i;
        if (i == 1)
            c.onclick = hit1;
        if (i == 2)
            c.onclick = hit2;
    }
    return manipulate;
}());
new manipulate(1); //nested div1
// Middle  div starting
var sub_div = document.createElement("div");
sub_div.className = "sub_div col-lg-3 col-sm-3";
div1.appendChild(sub_div);
var sub_div_middle = document.createElement("div");
sub_div_middle.className = "sub_div_middle col-lg-12 col-sm-12";
sub_div.appendChild(sub_div_middle);
sub_div_middle.innerHTML = "TIMER";
var sub_div_middle2 = document.createElement("div");
sub_div_middle2.className = "sub_div_middle col-lg-12 col-sm-12";
sub_div.appendChild(sub_div_middle2);
sub_div_middle2.innerHTML = "60";
sub_div_middle2.id = "timer";
var timer_button = document.createElement("button");
timer_button.className = "sub_div1button col-lg-12 col-sm-12";
sub_div.appendChild(timer_button);
timer_button.innerHTML = "Start Timer";
timer_button.id = "timer_button";
timer_button.onclick = timer_starts;
var sub_div_middle3 = document.createElement("div");
sub_div_middle3.className = "sub_div_middle2 col-lg-12 col-sm-12";
sub_div.appendChild(sub_div_middle3);
sub_div_middle3.innerHTML = "Click to start the timer before starting innings for any team";
// Middle div ending
new manipulate(2); // nested div 3
var div2 = document.createElement("div");
div2.className = "row div2";
para.appendChild(div2);
function create_rows(i, j, o, direction) {
    var a = window["tr2_" + direction];
    a = document.createElement("tr");
    o.appendChild(a);
    var b = window["th9_" + direction];
    b = document.createElement("th");
    b.setAttribute("scope", "row");
    b.innerHTML = "PLAYER " + i;
    b.id = "team" + j + "player" + i;
    a.appendChild(b);
    for (var itr = 1; itr <= 7; itr++) {
        var c = window["td" + itr + "_" + direction];
        c = document.createElement("td");
        c.innerHTML = "";
        if (itr == 7)
            c.id = "player" + i + "totalteam" + j;
        else
            c.id = "player" + i + "ball" + itr + "team" + j;
        a.appendChild(c);
    }
}
var addTable = /** @class */ (function () {
    function addTable(i, direction) {
        var j = window["div2_" + direction];
        j = document.createElement("div");
        j.className = "col-lg-3 col-sm-12";
        div2.appendChild(j);
        var heading = document.createElement("div");
        j.appendChild(heading);
        heading.className = "col-lg-12 col-sm-12";
        heading.innerHTML = "TEAM " + i + " SCORE BOARD";
        var k = window["sub_" + j];
        k = document.createElement("div2");
        k.className = "col-lg-12 col-sm-12";
        j.appendChild(k);
        var l = window["table" + i]; //table
        l = document.createElement("table");
        l.className = "table table-bordered table-striped";
        k.appendChild(l);
        var m = window["thead_" + direction];
        m = document.createElement("thead");
        l.appendChild(m);
        var n = window["tr1_" + direction];
        n = document.createElement("tr");
        m.appendChild(n);
        for (var itr = 1; itr <= 8; itr++) {
            var a = window["th" + itr + "_" + direction];
            a = document.createElement("th");
            a.setAttribute("scope", "col");
            if (itr == 1)
                a.innerHTML = "TEAM " + i;
            else if (itr == 8)
                a.innerHTML = "TOTAL";
            else
                a.innerHTML = "B" + (itr - 1);
            n.appendChild(a);
        }
        var o = window["tbody_" + direction];
        o = document.createElement("tbody");
        l.appendChild(o);
        for (var itr = 1; itr <= 10; itr++) {
            create_rows(itr, i, o, direction);
        }
    }
    return addTable;
}());
// left-table
new addTable(1, "start");
// middle button 
var div2middle = document.createElement("div2");
div2middle.className = "col-lg-3 col-sm-12 sub_div2";
div2.appendChild(div2middle);
div2.id = "lower_middle_div";
var sub_div2middle = document.createElement("div");
sub_div2middle.className = "col-lg-12 col-sm-12";
div2middle.appendChild(sub_div2middle);
var div2_button = document.createElement("button");
div2_button.className = "div2_button";
div2_button.innerHTML = "GENERATE RESULT";
sub_div2middle.appendChild(div2_button);
div2_button.id = "generate";
div2_button.onclick = generate;
var matchwon = document.createElement("div");
matchwon.className = "col-lg-12 col-sm-12 match";
div2middle.appendChild(matchwon);
matchwon.id = "matchwon";
matchwon.innerHTML = "MATCH WON BY: ";
var mom = document.createElement("div");
mom.className = "col-lg-12 col-sm-12 match";
div2middle.appendChild(mom);
mom.id = "mom";
mom.innerHTML = "MAN OF THE MATCH: ";
//right table
new addTable(2, "end");
// game logic
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var timer_started = false;
var hit1_button = document.getElementById('HIT 1');
timer_started = false;
var hit2_button = document.getElementById('HIT 2');
hit2_button.disabled = true;
//timer
function timer_starts() {
    timer_started = true;
    if (hit2_button.disabled)
        hit1_button.disabled = false;
    var timer = document.getElementById('timer_button');
    timer.disabled = true;
    var generate = document.getElementById('generate');
    generate.disabled = true;
    var i = 1;
    var time = setInterval(function () {
        (document.getElementById("timer")).innerHTML = "" + (60 - i);
        i++;
        if (i == 61) {
            clearInterval(time);
            (document.getElementById("timer")).innerHTML = "" + 60;
            i = 1;
            timer.disabled = false;
            generate.disabled = false;
            timer_started = false;
            if (hit1_button.disabled)
                hit2_button.disabled = false;
        }
    }, 1000);
}
var player = 1;
var ball = 1;
var total = 0;
var teamtotal = 0;
// team 1 batting
function hit1() {
    var val = parseInt(document.getElementById("timer").textContent);
    if (timer_started) {
        if (val >= 0 && player <= 10 && ball <= 6) {
            var run = randomInteger(0, 6);
            document.getElementById("player" + player + "ball" + ball + "team1").innerHTML = "" + run;
            total += run;
            teamtotal += run;
            if (run == 0) {
                document.getElementById("player" + player + "totalteam1").innerHTML = "" + total;
                player++;
                ball = 1;
                total = 0;
            }
            else {
                ball++;
                if (ball == 7) {
                    document.getElementById("player" + player + "totalteam1").innerHTML = "" + total;
                    player++;
                    ball = 1;
                    total = 0;
                }
            }
            document.getElementById("team1score").innerHTML = "" + teamtotal;
        }
        else if (player > 10 || ball > 6) {
            alert("Team 1 batting over" + "\n" + "Now team 2 batting");
            hit1_button.disabled = true;
            player = 1;
            ball = 1;
            total = 0;
            teamtotal = 0;
        }
    }
    else {
        alert("Please start the timer first");
    }
}
// team 2 batting
function hit2() {
    var val = parseInt(document.getElementById("timer").textContent);
    if (timer_started) {
        if (val >= 0 && player <= 10 && ball <= 6) {
            var run = randomInteger(0, 6);
            document.getElementById("player" + player + "ball" + ball + "team2").innerHTML = "" + run;
            total += run;
            teamtotal += run;
            if (run == 0) {
                document.getElementById("player" + player + "totalteam2").innerHTML = "" + total;
                player++;
                ball = 1;
                total = 0;
            }
            else {
                ball++;
                if (ball == 7) {
                    document.getElementById("player" + player + "totalteam2").innerHTML = "" + total;
                    player++;
                    ball = 1;
                    total = 0;
                }
            }
            document.getElementById("team2score").innerHTML = "" + teamtotal;
        }
        else if (player > 10 || ball > 6) {
            alert("Team 2 batting over" + "\n" + "Match Over");
            hit2_button.disabled = true;
        }
    }
    else {
        alert("Please start the timer first");
    }
}
function result(team) {
    document.getElementById("matchwon").innerHTML = "MATCH WON BY : TEAM" + team;
    var max = 0;
    for (var i = 1; i <= 10; i++) {
        var score = parseInt(document.getElementById("player" + i + "totalteam" + team).textContent);
        if (score > max)
            max = score;
    }
    for (var i = 1; i <= 10; i++) {
        var score = parseInt(document.getElementById("player" + i + "totalteam" + team).textContent);
        if (score == max) {
            var player_1 = document.getElementById("team" + team + "player" + i).textContent;
            document.getElementById("mom").innerHTML = "MAN OF THE MATCH " + player_1 + "\n    " + "TEAM" + team + "\n" + "SCORE: " + max;
        }
    }
}
// generate result
function generate() {
    var team1_total = parseInt(document.getElementById("team1score").textContent);
    var team2_total = parseInt(document.getElementById("team2score").textContent);
    if (team1_total > team2_total) {
        result(1);
    }
    else if (team2_total > team1_total) {
        result(2);
    }
    else {
        result(1);
    }
    console.log(team1_total);
    console.log(team2_total);
}
