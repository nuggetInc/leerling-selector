let oldListStr = "";
let list = [];

let colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#00ffff",
    "#ff00ff",
]

function PrintRandom() {
    let listStr = document.getElementById("inputField").value
    let list;
    if (oldListStr != listStr) {
        oldListStr = listStr;
        list = listStr.split("\n");
    }

    DrawBoard(list);
}

function DrawBoard(list) {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(250, 250, 245, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.translate(250, 250);
    ctx.rotate(Math.random() * Math.PI * 2);
    ctx.translate(-250, -250);

    ctx.save();
    ctx.lineWidth = 2;
    ctx.translate(250, 250);
    for (i = 0; i < list.length; i++) {

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.rotate(Math.PI * 2 / list.length);
        ctx.arc(0, 0, 245, 0, Math.PI * 2 / list.length);
        ctx.closePath();
        //ctx.lineTo(250, 0);
        if (list.length == i && list.length % 6 == 1) {
            ctx.fillStyle = colors[i % 6];
        } else {
            ctx.fillStyle = colors[i % 6 + 1];
        }
        ctx.fill();
    }
    ctx.restore();


    ctx.save();
    ctx.fillStyle = "black";
    ctx.textAlign = "right";
    ctx.translate(250, 250);
    ctx.rotate(-Math.PI / list.length);
    for (i = 0; i < list.length; i++) {
        ctx.moveTo(0, 0);
        ctx.rotate(Math.PI * 2 / list.length);
        ctx.font = "15px Arial";
        ctx.fillText(list[i], 240, 7.5);
    }
    ctx.restore();

    c.animate([
        // keyframes
        { transform: "rotate(0deg)" },
        { transform: "rotate(360deg)" },
        { transform: "rotate(720deg)" },
    ], {
        // timing options
        duration: 7500,
        iterations: 1,
        easing: "ease-out"
    });
}

window.onload = () => {
    DrawBoard(["hiiiii"]);
}