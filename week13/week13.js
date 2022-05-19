//https://pde2js.herokuapp.com/ This can convert java to js.
function setup() {
    initializeFields();
    createCanvas(300, 300);
    fill(color(0x97, 0xCA, 0xFA));
    textSize(50);
    textAlign(CENTER, CENTER);
}

var choice;

function draw() {
    text("Dinner 1", 150, 50);
    text("Dinner 2", 150, 150);
    text("Dinner 3", 150, 250);
    if (choice == 0)
        ellipse(0, 60, 50, 50);
    if (choice == 1)
        ellipse(0, 160, 50, 50);
    if (choice == 2)
        ellipse(0, 260, 50, 50);
}

function mousePressed() {
    // random choose one of zero to two.
    choice = int(random(3));
}

function initializeFields() {
    choice = -1;
}
