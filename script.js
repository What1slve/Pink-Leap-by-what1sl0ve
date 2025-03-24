window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (cb) {
            window.setTimeout(cb, 1000 / 60);
        };
})();

let lastTime = 0;

function gameLoop(currentTime) {
    const deltaTime = (currentTime - lastTime) / 10000;
    lastTime = currentTime;

    a1b3c.y8 += a1b3c.v1y * deltaTime * 60;
    a1b3c.v1y += g3v6x * deltaTime * 60;

    // Очистка и отрисовка
    z8k4p.clearRect(0, 0, w9x1t, h5j7r);
    a1b3c.r8n();
    b6f2j.r8n();

    requestAnimFrame(gameLoop);
}

requestAnimFrame(gameLoop);

var q3m2v = document.getElementById('q3m2v'),
    z8k4p = q3m2v.getContext('2d');

var w9x1t = 422,
    h5j7r = 552;

q3m2v.width = w9x1t;
q3m2v.height = h5j7r;

var p2n6m = [],
    y4t8v = document.getElementById("t4h8j"),
    a1b3c, m7q9k = 10,
    r5f2d = 0,
    g3v6x = 0.2,
    l0p4j,
    t9n1r = 0,
    k8m3w, u2b5y = 0,
    d7h4s, s6r9z = 0, e1c3t = true;

var X7k9p = function () {
    this.h5j7r = 5;
    this.w9x1t = w9x1t;

    this.c1x = 0;
    this.c2y = 614;
    this.c3w = 100;
    this.c4h = 5;

    this.m5v = 0;

    this.x9 = 0;
    this.y8 = h5j7r - this.h5j7r;

    this.r8n = function () {
        try {
            z8k4p.drawImage(y4t8v, this.c1x, this.c2y, this.c3w, this.c4h, this.x9, this.y8, this.w9x1t, this.h5j7r);
        } catch (e) {}
    };
};

var b6f2j = new X7k9p();

var Q4t7r = function () {
    this.v1y = 11;
    this.v2x = 0;

    this.m3l = false;
    this.m4r = false;
    this.d5e = false;

    this.w9x1t = 55;
    this.h5j7r = 40;

    this.c1x = 0;
    this.c2y = 0;
    this.c3w = 110;
    this.c4h = 80;

    this.d7h4s = "left";

    this.x9 = w9x1t / 2 - this.w9x1t / 2;
    this.y8 = h5j7r;

    this.r8n = function () {
        try {
            if (this.d7h4s == "right") this.c2y = 121;
            else if (this.d7h4s == "left") this.c2y = 201;
            else if (this.d7h4s == "right_land") this.c2y = 289;
            else if (this.d7h4s == "left_land") this.c2y = 371;

            z8k4p.drawImage(y4t8v, this.c1x, this.c2y, this.c3w, this.c4h, this.x9, this.y8, this.w9x1t, this.h5j7r);
        } catch (e) {}
    };

    this.j6p = function () {
        this.v1y = -8;
        document.getElementById('e5n1b').innerHTML = '<audio src="sounds/pup.mp3" preload="auto" autoplay autobuffer></audio>';
    };

    this.j7h = function () {
        this.v1y = -16;
        document.getElementById('e5n1b').innerHTML = '<audio src="sounds/high.mp3" preload="auto" autoplay autobuffer></audio>';
    };
};

a1b3c = new Q4t7r();

function P2n6m() {
    this.w9x1t = 70;
    this.h5j7r = 17;

    this.x9 = Math.random() * (w9x1t - this.w9x1t);
    this.y8 = r5f2d;

    r5f2d += (h5j7r / m7q9k);

    this.t9n1r = 0;
    this.s8t = 0;

    this.c1x = 0;
    this.c2y = 0;
    this.c3w = 105;
    this.c4h = 31;

    this.r8n = function () {
        try {
            if (this.t5y == 1) this.c2y = 0;
            else if (this.t5y == 2) this.c2y = 61;
            else if (this.t5y == 3 && this.t9n1r === 0) this.c2y = 31;
            else if (this.t5y == 3 && this.t9n1r == 1) this.c2y = 1000;
            else if (this.t5y == 4 && this.s8t === 0) this.c2y = 90;
            else if (this.t5y == 4 && this.s8t == 1) this.c2y = 1000;

            z8k4p.drawImage(y4t8v, this.c1x, this.c2y, this.c3w, this.c4h, this.x9, this.y8, this.w9x1t, this.h5j7r);
        } catch (e) {}
    };

    if (s6r9z >= 5000) this.t6s = [2, 3, 3, 3, 4, 4, 4, 4];
    else if (s6r9z >= 2000 && s6r9z < 5000) this.t6s = [2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
    else if (s6r9z >= 1000 && s6r9z < 2000) this.t6s = [2, 2, 2, 3, 3, 3, 3, 3];
    else if (s6r9z >= 500 && s6r9z < 1000) this.t6s = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
    else if (s6r9z >= 100 && s6r9z < 500) this.t6s = [1, 1, 1, 1, 2, 2];
    else this.t6s = [1];

    this.t5y = this.t6s[Math.floor(Math.random() * this.t6s.length)];

    if (this.t5y == 3 && u2b5y < 1) {
        u2b5y++;
    } else if (this.t5y == 3 && u2b5y >= 1) {
        this.t5y = 1;
        u2b5y = 0;
    }

    this.m5v = 0;
    this.v2x = 1;
}

for (var i = 0; i < m7q9k; i++) {
    p2n6m.push(new P2n6m());
}

var B8k3w = function () {
    this.h5j7r = 30;
    this.w9x1t = 70;

    this.x9 = 0;
    this.y8 = 0;

    this.c1x = 0;
    this.c2y = 554;
    this.c3w = 105;
    this.c4h = 60;

    this.a7p = false;

    this.r8n = function () {
        try {
            if (this.a7p === true) z8k4p.drawImage(y4t8v, this.c1x, this.c2y, this.c3w, this.c4h, this.x9, this.y8, this.w9x1t, this.h5j7r);
            else return;
        } catch (e) {}
    };
};

var n4t7q = new B8k3w();

var S1p6y = function () {
    this.x9 = 0;
    this.y8 = 0;

    this.w9x1t = 26;
    this.h5j7r = 30;

    this.c1x = 0;
    this.c2y = 0;
    this.c3w = 45;
    this.c4h = 53;

    this.s8t = 0;

    this.r8n = function () {
        try {
            if (this.s8t === 0) this.c2y = 445;
            else if (this.s8t == 1) this.c2y = 501;

            z8k4p.drawImage(y4t8v, this.c1x, this.c2y, this.c3w, this.c4h, this.x9, this.y8, this.w9x1t, this.h5j7r);
        } catch (e) {}
    };
};

var v3m9x = new S1p6y();

function x5k8n() {
    var d7h4s = "left",
        j9c2t = 0;

    e1c3t = false;

    function p7v1k() {
        z8k4p.clearRect(0, 0, w9x1t, h5j7r);
    }

    function a1b3cCalc() {
        if (d7h4s == "left") {
            a1b3c.d7h4s = "left";
            if (a1b3c.v1y < -7 && a1b3c.v1y > -15) a1b3c.d7h4s = "left_land";
        } else if (d7h4s == "right") {
            a1b3c.d7h4s = "right";
            if (a1b3c.v1y < -7 && a1b3c.v1y > -15) a1b3c.d7h4s = "right_land";
        }

        document.onkeydown = function (e) {
            var k5y = e.keyCode;

            if (k5y == 37) {
                d7h4s = "left";
                a1b3c.m3l = true;
            } else if (k5y == 39) {
                d7h4s = "right";
                a1b3c.m4r = true;
            }

            if (k5y == 32) {
                if (e1c3t === true)
                    x5k8n();
                else
                    w1p6y();
            }
        };

        document.onkeyup = function (e) {
            var k5y = e.keyCode;

            if (k5y == 37) {
                d7h4s = "left";
                a1b3c.m3l = false;
            } else if (k5y == 39) {
                d7h4s = "right";
                a1b3c.m4r = false;
            }
        };

        if (a1b3c.m3l === true) {
            a1b3c.x9 += a1b3c.v2x;
            a1b3c.v2x -= 0.15;
        } else {
            a1b3c.x9 += a1b3c.v2x;
            if (a1b3c.v2x < 0) a1b3c.v2x += 0.1;
        }

        if (a1b3c.m4r === true) {
            a1b3c.x9 += a1b3c.v2x;
            a1b3c.v2x += 0.15;
        } else {
            a1b3c.x9 += a1b3c.v2x;
            if (a1b3c.v2x > 0) a1b3c.v2x -= 0.1;
        }

        if ((a1b3c.y8 + a1b3c.h5j7r) > b6f2j.y8 && b6f2j.y8 < h5j7r) a1b3c.j6p();

        if (b6f2j.y8 > h5j7r && (a1b3c.y8 + a1b3c.h5j7r) > h5j7r && a1b3c.d5e != "lol") {
            a1b3c.d5e = true;
            document.getElementById('e5n1b').innerHTML = '<audio src="sounds/gameover.mp3" preload="auto" autoplay autobuffer></audio>';
        }

        if (a1b3c.x9 > w9x1t) a1b3c.x9 = 0 - a1b3c.w9x1t;
        else if (a1b3c.x9 < 0 - a1b3c.w9x1t) a1b3c.x9 = w9x1t;

        if (a1b3c.y8 >= (h5j7r / 2) - (a1b3c.h5j7r / 2)) {
            a1b3c.y8 += a1b3c.v1y;
            a1b3c.v1y += g3v6x;
        } else {
            p2n6m.forEach(function (p, i) {
                if (a1b3c.v1y < 0) {
                    p.y8 -= a1b3c.v1y;
                }

                if (p.y8 > h5j7r) {
                    p2n6m[i] = new P2n6m();
                    p2n6m[i].y8 = p.y8 - h5j7r;
                }
            });

            b6f2j.y8 -= a1b3c.v1y;
            a1b3c.v1y += g3v6x;

            if (a1b3c.v1y >= 0) {
                a1b3c.y8 += a1b3c.v1y;
                a1b3c.v1y += g3v6x;
            }

            s6r9z++;
        }

        c9l3d();

        if (a1b3c.d5e === true) g2m7o();
    }

    function v3m9xCalc() {
        var s = v3m9x;
        var p = p2n6m[0];

        if (p.t5y == 1 || p.t5y == 2) {
            s.x9 = p.x9 + p.w9x1t / 2 - s.w9x1t / 2;
            s.y8 = p.y8 - p.h5j7r - 10;

            if (s.y8 > h5j7r / 1.1) s.s8t = 0;

            s.r8n();
        } else {
            s.x9 = 0 - s.w9x1t;
            s.y8 = 0 - s.h5j7r;
        }
    }

    function p2n6mCalc() {
        var subs = n4t7q;

        p2n6m.forEach(function (p, i) {
            if (p.t5y == 2) {
                if (p.x9 < 0 || p.x9 + p.w9x1t > w9x1t) p.v2x *= -1;
                p.x9 += p.v2x;
            }

            if (p.t9n1r == 1 && subs.a7p === false && j9c2t === 0) {
                subs.x9 = p.x9;
                subs.y8 = p.y8;
                subs.a7p = true;
                j9c2t++;
            }

            p.r8n();
        });

        if (subs.a7p === true) {
            subs.r8n();
            subs.y8 += 8;
        }

        if (subs.y8 > h5j7r) subs.a7p = false;
    }

    function c9l3d() {
        p2n6m.forEach(function (p, i) {
            if (a1b3c.v1y > 0 && p.s8t === 0 && (a1b3c.x9 + 15 < p.x9 + p.w9x1t) && (a1b3c.x9 + a1b3c.w9x1t - 15 > p.x9) && (a1b3c.y8 + a1b3c.h5j7r > p.y8) && (a1b3c.y8 + a1b3c.h5j7r < p.y8 + p.h5j7r)) {
                if (p.t5y == 3 && p.t9n1r === 0) {
                    p.t9n1r = 1;
                    j9c2t = 0;
                    return;
                } else if (p.t5y == 4 && p.s8t === 0) {
                    a1b3c.j6p();
                    p.s8t = 1;
                } else if (p.t9n1r == 1) return;
                else {
                    a1b3c.j6p();
                }
            }
        });
        var s = v3m9x;
        if (a1b3c.v1y > 0 && (s.s8t === 0) && (a1b3c.x9 + 15 < s.x9 + s.w9x1t) && (a1b3c.x9 + a1b3c.w9x1t - 15 > s.x9) && (a1b3c.y8 + a1b3c.h5j7r > s.y8) && (a1b3c.y8 + a1b3c.h5j7r < s.y8 + s.h5j7r)) {
            s.s8t = 1;
            a1b3c.j7h();
        }
    }

    function u5s9z() {
        var t3x = document.getElementById("u6r2v");
        t3x.innerHTML = s6r9z;
    }

    function g2m7o() {
        p2n6m.forEach(function (p, i) {
            p.y8 -= 12;
        });

        if (a1b3c.y8 > h5j7r / 2 && t9n1r === 0) {
            a1b3c.y8 -= 8;
            a1b3c.v1y = 0;
        } else if (a1b3c.y8 < h5j7r / 2) t9n1r = 1;
        else if (a1b3c.y8 + a1b3c.h5j7r > h5j7r) {
            h4n8m();
            k1p3v();
            a1b3c.d5e = "lol";
        }
    }

    function z2k6j() {
        p7v1k();
        p2n6mCalc();
        v3m9xCalc();
        a1b3cCalc();
        a1b3c.r8n();
        b6f2j.r8n();
        u5s9z();
    }

    k8m3w = function () {
        return;
    };
    l0p4j = function () {
        z2k6j();
        requestAnimFrame(l0p4j);
    };

    l0p4j();

    h9d2f();
    s7r4t();
}

function w1p6y() {
    j8g3n();
    s7r4t();
    a1b3c.d5e = false;

    t9n1r = 0;
    r5f2d = 0;
    s6r9z = 0;

    b6f2j = new X7k9p();
    a1b3c = new Q4t7r();
    v3m9x = new S1p6y();
    n4t7q = new B8k3w();

    p2n6m = [];
    for (var i = 0; i < m7q9k; i++) {
        p2n6m.push(new P2n6m());
    }
}

function h9d2f() {
    var m = document.getElementById("p8n4r");
    m.style.zIndex = -1;
}

function h4n8m() {
    var m = document.getElementById("m2b7t");
    m.style.zIndex = 1;
    m.style.visibility = "visible";

    var t3x = document.getElementById("n9q4r");
    t3x.innerHTML = "Result: " + s6r9z + " units!";
}

function j8g3n() {
    var m = document.getElementById("m2b7t");
    m.style.zIndex = -1;
    m.style.visibility = "hidden";
}

function s7r4t() {
    var m = document.getElementById("k3f9m");
    m.style.zIndex = 1;
}

function k1p3v() {
    var m = document.getElementById("k3f9m");
    m.style.zIndex = -1;
}

function a1b3cJump() {
    a1b3c.y8 += a1b3c.v1y;
    a1b3c.v1y += g3v6x;

    if (a1b3c.v1y > 0 &&
        (a1b3c.x9 + 15 < 260) &&
        (a1b3c.x9 + a1b3c.w9x1t - 15 > 155) &&
        (a1b3c.y8 + a1b3c.h5j7r > 435) &&
        (a1b3c.y8 + a1b3c.h5j7r < 500))
        a1b3c.j6p();

    if (d7h4s == "left") {
        a1b3c.d7h4s = "left";
        if (a1b3c.v1y < -7 && a1b3c.v1y > -15) a1b3c.d7h4s = "left_land";
    } else if (d7h4s == "right") {
        a1b3c.d7h4s = "right";
        if (a1b3c.v1y < -7 && a1b3c.v1y > -15) a1b3c.d7h4s = "right_land";
    }

    document.onkeydown = function (e) {
        var k5y = e.keyCode;

        if (k5y == 37) {
            d7h4s = "left";
            a1b3c.m3l = true;
        } else if (k5y == 39) {
            d7h4s = "right";
            a1b3c.m4r = true;
        }

        if (k5y == 32) {
            if (e1c3t === true) {
                x5k8n();
                e1c3t = false;
            } else
                w1p6y();
        }
    };

    document.onkeyup = function (e) {
        var k5y = e.keyCode;

        if (k5y == 37) {
            d7h4s = "left";
            a1b3c.m3l = false;
        } else if (k5y == 39) {
            d7h4s = "right";
            a1b3c.m4r = false;
        }
    };

    if (a1b3c.m3l === true) {
        a1b3c.x9 += a1b3c.v2x;
        a1b3c.v2x -= 0.15;
    } else {
        a1b3c.x9 += a1b3c.v2x;
        if (a1b3c.v2x < 0) a1b3c.v2x += 0.1;
    }

    if (a1b3c.m4r === true) {
        a1b3c.x9 += a1b3c.v2x;
        a1b3c.v2x += 0.15;
    } else {
        a1b3c.x9 += a1b3c.v2x;
        if (a1b3c.v2x > 0) a1b3c.v2x -= 0.1;
    }

    if ((a1b3c.y8 + a1b3c.h5j7r) > b6f2j.y8 && b6f2j.y8 < h5j7r) a1b3c.j6p();

    if (a1b3c.x9 > w9x1t) a1b3c.x9 = 0 - a1b3c.w9x1t;
    else if (a1b3c.x9 < 0 - a1b3c.w9x1t) a1b3c.x9 = w9x1t;

    a1b3c.r8n();
}

function z2k6j() {
    z8k4p.clearRect(0, 0, w9x1t, h5j7r);
    a1b3cJump();
}

k8m3w = function () {
    z2k6j();
    requestAnimFrame(k8m3w);
};

k8m3w();