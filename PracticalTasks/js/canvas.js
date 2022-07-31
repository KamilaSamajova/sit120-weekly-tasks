var italy = document.getElementById("myCanvas");
var ctx = italy.getContext("2d");
rectangle(ctx, 0, 0, italy.width / 3, italy.height, "green");
rectangle(ctx, italy.width / 3, 0, italy.width / 3, italy.height, "white");
rectangle(ctx, italy.width * 2 / 3, 0, italy.width, italy.height, "red");

// Function to draw a rectangle
function rectangle(ctx, startX, startY, width, height, color) {
    ctx.beginPath();
    ctx.rect(startX, startY, width, height);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
  }