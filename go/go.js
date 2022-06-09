
function setup() {
    initializeFields();
    createCanvas(450, 450);
}

function draw() {
    background(color(0xF5, 0xD6, 0x65));
    for (var i = 50; i < 450; i += 50) {
        line(0, i, 450, i);
        line(i, 0, i, 450);
    }
    for (var i = 0; i < N; i++) {
        if (// 黑色
        i % 2 == 0)
            // 黑色
            fill(0);
        else
            // 白色
            fill(255);
        ellipse(bx[i], by[i], 40, 40);
    }
    ellipse(mouseX, mouseY, 40, 40);
}

var bx;

var by;

var N;

function mousePressed() {
    bx[N] = mouseX;
    by[N] = mouseY;
    N++;
}

function initializeFields() {
    bx = new Array(100);
    by = new Array(100);
    N = 0;
}
