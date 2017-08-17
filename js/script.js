let canvas = $('canvas'),
    ctx = canvas.getContext('2d');

let particle = new ParticleFactory(canvas, ctx, 16, 200);

function scaleCanvas() {
    let width = window.innerWidth,
        height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
}

window.onresize = () => {
    scaleCanvas();
};

window.onload = () => {
    scaleCanvas();
    particle.init();
};