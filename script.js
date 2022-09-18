let canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),
radius = canvas.height / 2;

ctx.translate(radius, radius);
radius = radius * 0.9;
setInterval(drawClock, 0);

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.beginPath();
}

function drawNumbers(ctx, radius) {
    let ang, num;
    ctx.font = "35px Segoe Ui";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = '#000';
    ctx.fill();
    
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius){
    let x = new Date(),
    h = x.getHours(),
    m = x.getMinutes(),
    s = x.getSeconds();

    // Hour
    h = h % 12;
    h = (h * Math.PI / 6) + (m * Math.PI / (6 * 60)) + (s * Math.PI / (360 * 60));
    drawHand(ctx, h, radius * 0.5, radius * 0.07, "#000");

    // Minute
    m = (m * Math.PI / 30) + (s * Math.PI / (30 * 60));
    drawHand(ctx, m, radius * 0.7, radius * 0.07, "#000");
    
    // Second
    s = s * Math.PI / 30;
    drawHand(ctx, s, radius * 0.75, radius * 0.02, "#f00");
    //drawBorder(ctx, radius, s);
}

function drawHand(ctx, pos, length, width, color) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

function drawBorder(ctx, radius, s) {
    ctx.beginPath();
    ctx.arc(0, radius, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#0ff';
    ctx.fill();


    /* let grad = ctx.createLinearGradient(200, 0, 250, 0);
    grad.addColorStop(0, "#0000");
    grad.addColorStop(1, "#f00");
    ctx.beginPath();
    ctx.arc(0, 0, radius * 1.05, 0, 2 * Math.PI);
    ctx.fillStyle = grad;
    ctx.fill(); */
}